<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" autocomplete="on" label-position="left">

      <div class="title-container">
        <button type="button" class="login-lang-toggle" @click="toggleLang">{{ langButtonText }}</button>
        <h3 class="title">{{ text.loginTitle }}</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          :placeholder="text.username"
          name="username"
          type="text"
          tabindex="1"
          autocomplete="on"
        />
      </el-form-item>

      <el-tooltip v-model="capsTooltip" :content="text.capsLock" placement="right" manual>
        <el-form-item prop="password">
          <span class="svg-container">
            <svg-icon icon-class="password" />
          </span>
          <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            :placeholder="text.password"
            name="password"
            tabindex="2"
            autocomplete="on"
            @keyup.native="checkCapslock"
            @blur="capsTooltip = false"
            @keyup.enter.native="handleLogin"
          />
          <span class="show-pwd" @click="showPwd">
            <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
          </span>
        </el-form-item>
      </el-tooltip>

      <el-checkbox v-model="rememberLogin" class="remember-login">{{ text.rememberLogin }}</el-checkbox>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">{{ text.login }}</el-button>

      <div class="login-access-note">仅支持管理员已批准或在后台创建的账号登录。</div>
    </el-form>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import { getLanguage, toggleLanguage, t } from '@/utils/lang'

const REMEMBER_LOGIN_KEY = 'kb-remember-login'

export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error(t('usernameError', this?.lang)))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error(t('passwordError', this?.lang)))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rememberLogin: false,
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {},
      lang: getLanguage()
    }
  },
  computed: {
    text() {
      return {
        loginTitle: t('loginTitle', this.lang),
        username: t('username', this.lang),
        password: t('password', this.lang),
        login: t('login', this.lang),
        rememberLogin: t('rememberLogin', this.lang),
        capsLock: t('capsLock', this.lang)
      }
    },
    langButtonText() {
      return t('switchLabel', this.lang)
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    this.loadRememberedLogin()
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  destroyed() {
    // window.removeEventListener('storage', this.afterQRScan)
  },
  methods: {
    checkCapslock(e) {
      const { key } = e
      this.capsTooltip = key && key.length === 1 && (key >= 'A' && key <= 'Z')
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then(() => {
              this.persistRememberedLogin()
              if (/^(https?|file):\/\//.test(this.redirect || '')) {
                window.location.href = this.redirect
              } else {
                this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
              }
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log(t('loginError', this.lang))
          return false
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    },
    toggleLang() {
      this.lang = toggleLanguage()
    },
    loadRememberedLogin() {
      try {
        const saved = JSON.parse(localStorage.getItem(REMEMBER_LOGIN_KEY) || 'null')
        if (saved && saved.remember) {
          this.loginForm.username = saved.username || ''
          this.loginForm.password = saved.password || ''
          this.rememberLogin = true
        }
      } catch (error) {
        localStorage.removeItem(REMEMBER_LOGIN_KEY)
      }
    },
    persistRememberedLogin() {
      if (!this.rememberLogin) {
        localStorage.removeItem(REMEMBER_LOGIN_KEY)
        return
      }
      localStorage.setItem(REMEMBER_LOGIN_KEY, JSON.stringify({
        remember: true,
        username: this.loginForm.username,
        password: this.loginForm.password
      }))
    }
    // afterQRScan() {
    //   if (e.key === 'x-admin-oauth-code') {
    //     const code = getQueryObject(e.newValue)
    //     const codeMap = {
    //       wechat: 'code',
    //       tencent: 'code'
    //     }
    //     const type = codeMap[this.auth_type]
    //     const codeName = code[type]
    //     if (codeName) {
    //       this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
    //         this.$router.push({ path: this.redirect || '/' })
    //       })
    //     } else {
    //       alert('第三方登录失败')
    //     }
    //   }
    // }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}

.login-access-note {
  color: rgba(255, 255, 255, .72);
  font-size: 14px;
  line-height: 1.6;
  text-align: center;
}
</style>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .remember-login {
    display: block;
    margin: -4px 0 18px;
    color: #fff;

    .el-checkbox__label {
      color: #fff;
      font-weight: 700;
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    .login-lang-toggle {
      position: absolute;
      right: 0;
      top: 2px;
      border: 1px solid rgba(255,255,255,.28);
      border-radius: 999px;
      background: rgba(255,255,255,.08);
      color: #fff;
      padding: 6px 12px;
      font-weight: 800;
      cursor: pointer;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
</style>
