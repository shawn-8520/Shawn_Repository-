<template>
  <div class="navbar">
    <hamburger id="hamburger-container" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />

    <div class="right-menu">
      <template v-if="device!=='mobile'">
        <button class="language-toggle right-menu-item hover-effect" @click="toggleLang">
          {{ langButtonText }}
        </button>
      </template>

      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
          <span class="user-meta">
            <strong>{{ name || text.unknownUser }}</strong>
            <small>{{ roleLabel }}</small>
          </span>
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="logout">
            <span style="display:block;">{{ text.logout }}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import { getLanguage, toggleLanguage, t } from '@/utils/lang'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  data() {
    return {
      lang: getLanguage()
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'name',
      'roles',
      'device'
    ]),
    text() {
      return {
        logout: t('logout', this.lang),
        unknownUser: t('unknownUser', this.lang)
      }
    },
    langButtonText() {
      return t('switchLabel', this.lang)
    },
    roleLabel() {
      if (this.roles.includes('admin')) return t('adminLevel', this.lang)
      if (this.roles.includes('editor')) return t('editorLevel', this.lang)
      return t('visitorLevel', this.lang)
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    toggleLang() {
      this.lang = toggleLanguage()
      this.$nextTick(() => {
        document.title = t('appTitle', this.lang)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .language-toggle {
      min-width: 42px;
      border: 0;
      background: transparent;
      font-size: 14px;
      font-weight: 800;
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        display: flex;
        align-items: center;
        gap: 10px;
        height: 50px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid #d8e5f2;
        }

        .user-meta {
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          min-width: 86px;
          line-height: 1.2;

          strong {
            color: #1f2d3d;
            font-size: 13px;
            font-weight: 800;
          }

          small {
            margin-top: 3px;
            color: #2b83d3;
            font-size: 12px;
            font-weight: 700;
          }
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: static;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
