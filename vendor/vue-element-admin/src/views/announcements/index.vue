<template>
  <div class="announcement-page">
    <div class="page-heading">
      <div>
        <h2>公告管理</h2>
        <p>发布后会实时显示在智能体工作台的“最新公告”模块。</p>
      </div>
      <el-button type="primary" icon="el-icon-refresh" @click="loadAnnouncements">刷新</el-button>
    </div>

    <el-card shadow="never" class="publish-card">
      <div slot="header"><strong>发布公告</strong></div>
      <el-form ref="form" :model="form" :rules="rules" label-position="top">
        <el-form-item label="公告标题" prop="title">
          <el-input v-model.trim="form.title" maxlength="120" show-word-limit placeholder="请输入公告标题" />
        </el-form-item>
        <el-form-item label="公告内容">
          <el-input v-model.trim="form.content" type="textarea" :rows="4" maxlength="1000" show-word-limit placeholder="请输入公告内容，可选" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="publishing" @click="publish">立即发布</el-button>
          <el-button @click="resetForm">清空</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card shadow="never">
      <div slot="header" class="list-heading">
        <strong>历史公告</strong>
        <span>共 {{ announcements.length }} 条</span>
      </div>
      <el-table v-loading="loading" :data="announcements" border>
        <el-table-column prop="title" label="标题" min-width="220" />
        <el-table-column prop="content" label="内容" min-width="320" show-overflow-tooltip />
        <el-table-column label="状态" width="100">
          <template slot-scope="{ row }">
            <el-tag :type="row.status === 'published' ? 'success' : 'info'">{{ row.status === 'published' ? '已发布' : '草稿' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="发布时间" width="180">
          <template slot-scope="{ row }">{{ formatTime(row.createdAt) }}</template>
        </el-table-column>
        <el-table-column label="操作" width="100" fixed="right">
          <template slot-scope="{ row }">
            <el-button type="text" class="delete-button" @click="remove(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Announcements',
  data() {
    return {
      loading: false,
      publishing: false,
      announcements: [],
      form: { title: '', content: '' },
      rules: { title: [{ required: true, message: '请填写公告标题', trigger: 'blur' }] }
    }
  },
  created() {
    this.loadAnnouncements()
  },
  methods: {
    headers() {
      const cookieToken = document.cookie.split(';').map(item => item.trim()).find(item => item.indexOf('Admin-Token=') === 0)
      return {
        'Content-Type': 'application/json',
        'X-Admin-Token': localStorage.getItem('Admin-Token') || (cookieToken ? decodeURIComponent(cookieToken.split('=').slice(1).join('=')) : '')
      }
    },
    async request(url, options = {}) {
      const response = await fetch(url, { ...options, headers: { ...this.headers(), ...(options.headers || {}) } })
      const payload = await response.json()
      if (!payload.ok) throw new Error(payload.message || '请求失败')
      return payload
    },
    async loadAnnouncements() {
      this.loading = true
      try {
        const payload = await this.request('/api/announcements')
        this.announcements = Array.isArray(payload.data) ? payload.data : []
      } catch (error) {
        this.$message.error(error.message)
      } finally {
        this.loading = false
      }
    },
    publish() {
      this.$refs.form.validate(async valid => {
        if (!valid) return
        this.publishing = true
        try {
          await this.request('/api/announcements', {
            method: 'POST',
            body: JSON.stringify({ ...this.form, status: 'published' })
          })
          this.$message.success('公告已发布到智能体工作台')
          this.resetForm()
          await this.loadAnnouncements()
        } catch (error) {
          this.$message.error(error.message)
        } finally {
          this.publishing = false
        }
      })
    },
    resetForm() {
      this.form = { title: '', content: '' }
      this.$nextTick(() => this.$refs.form && this.$refs.form.clearValidate())
    },
    remove(row) {
      this.$confirm('删除后首页将不再显示该公告，是否继续？', '删除公告', { type: 'warning' })
        .then(async () => {
          await this.request('/api/announcements?id=' + encodeURIComponent(row.id), { method: 'DELETE' })
          this.$message.success('公告已删除')
          await this.loadAnnouncements()
        })
        .catch(error => {
          if (error && error !== 'cancel') this.$message.error(error.message || '删除失败')
        })
    },
    formatTime(value) {
      return value ? new Date(value).toLocaleString('zh-CN', { hour12: false }) : '-'
    }
  }
}
</script>

<style lang="scss" scoped>
.announcement-page {
  min-height: 100vh;
  padding: 28px;
  background: #f3f7fb;
}
.page-heading,
.list-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.page-heading {
  margin-bottom: 20px;
  h2 { margin: 0; color: #1f2d3d; }
  p { margin: 8px 0 0; color: #6b7c93; }
}
.publish-card { margin-bottom: 20px; }
.delete-button { color: #f56c6c; }
</style>
