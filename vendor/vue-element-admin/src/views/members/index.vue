<template>
  <div class="members-page">
    <div class="members-header">
      <div>
        <h2>成员管理</h2>
        <p>管理后台成员、角色权限与账号状态。</p>
      </div>
      <el-button type="primary" icon="el-icon-plus" @click="openCreate">新增成员</el-button>
    </div>

    <el-row :gutter="18" class="member-summary">
      <el-col :xs="24" :sm="8">
        <div class="summary-card">
          <span>成员总数</span>
          <strong>{{ members.length }}</strong>
        </div>
      </el-col>
      <el-col :xs="24" :sm="8">
        <div class="summary-card">
          <span>管理员</span>
          <strong>{{ adminCount }}</strong>
        </div>
      </el-col>
      <el-col :xs="24" :sm="8">
        <div class="summary-card">
          <span>启用账号</span>
          <strong>{{ activeCount }}</strong>
        </div>
      </el-col>
    </el-row>

    <el-card class="members-table-card registration-card" shadow="never">
      <div class="table-toolbar table-toolbar-wide">
        <div>
          <h3>注册申请</h3>
          <p>用户提交注册后，会先进入这里等待管理员审核。</p>
        </div>
        <el-tag type="warning">待审核 {{ pendingRequests.length }}</el-tag>
      </div>
      <el-table :data="registrationRequests" border style="width: 100%;">
        <el-table-column prop="name" label="姓名" min-width="130" />
        <el-table-column prop="account" label="账号" min-width="130" />
        <el-table-column prop="password" label="密码" min-width="130" />
        <el-table-column prop="email" label="邮箱" min-width="200" />
        <el-table-column prop="message" label="申请说明" min-width="220" show-overflow-tooltip />
        <el-table-column prop="status" label="状态" width="110" align="center">
          <template slot-scope="{ row }">
            <el-tag :type="row.status === '待审核' ? 'warning' : row.status === '已同意' ? 'success' : 'info'">{{ row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createdAt" label="提交时间" width="170" />
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="{ row }">
            <el-button :disabled="row.status !== '待审核'" size="mini" type="primary" @click="approveRequest(row)">同意</el-button>
            <el-button :disabled="row.status !== '待审核'" size="mini" type="danger" @click="rejectRequest(row)">拒绝</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-card class="members-table-card" shadow="never">
      <div class="table-toolbar">
        <el-input v-model="keyword" placeholder="搜索姓名、账号、邮箱、角色" prefix-icon="el-icon-search" clearable />
      </div>
      <el-table :data="filteredMembers" border style="width: 100%;">
        <el-table-column prop="name" label="姓名" min-width="140" />
        <el-table-column prop="account" label="账号" min-width="140" />
        <el-table-column prop="password" label="密码" min-width="140" />
        <el-table-column prop="email" label="邮箱" min-width="220" />
        <el-table-column label="角色" width="140" align="center">
          <template slot-scope="{ row }">
            <el-tag :type="row.role === '管理员' ? 'primary' : 'info'">{{ row.role }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="状态" width="120" align="center">
          <template slot-scope="{ row }">
            <el-tag :type="row.status === '启用' ? 'success' : 'warning'">{{ row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="lastActive" label="最近活跃" width="160" />
        <el-table-column label="操作" width="180" align="center">
          <template slot-scope="{ row }">
            <el-button size="mini" type="primary" @click="openEdit(row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="removeMember(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog :title="editingId ? '编辑成员' : '新增成员'" :visible.sync="dialogVisible" width="520px">
      <el-form :model="form" label-width="88px">
        <el-form-item label="姓名">
          <el-input v-model="form.name" placeholder="请输入成员姓名" />
        </el-form-item>
        <el-form-item label="账号">
          <el-input v-model="form.account" placeholder="请输入登录账号" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" placeholder="请输入登录密码" show-password />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email" placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="form.role" style="width: 100%;">
            <el-option label="管理员" value="管理员" />
            <el-option label="编辑者" value="编辑者" />
            <el-option label="访客" value="访客" />
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="form.status">
            <el-radio-button label="启用" />
            <el-radio-button label="停用" />
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="dialogVisible=false">取消</el-button>
        <el-button type="primary" @click="saveMember">保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
const STORAGE_KEY = 'kb-admin-members'
const REGISTRATION_REQUESTS_KEY = 'kb-registration-requests'
const defaultMembers = []

function createBlankForm() {
  return {
    name: '',
    account: '',
    password: '',
    email: '',
    role: '编辑者',
    status: '启用'
  }
}

function normalizeMember(member) {
  const name = String(member.name || '未命名成员')
  const email = String(member.email || '')
  const fallbackAccount = email.split('@')[0] || name
  return {
    ...member,
    name,
    account: String(member.account || fallbackAccount),
    password: String(member.password || ''),
    email,
    role: String(member.role || '编辑者'),
    status: String(member.status || '启用'),
    lastActive: String(member.lastActive || '刚刚')
  }
}

export default {
  name: 'Members',
  data() {
    return {
      keyword: '',
      dialogVisible: false,
      editingId: '',
      form: createBlankForm(),
      members: this.loadMembers(),
      registrationRequests: this.loadRegistrationRequests()
    }
  },
  computed: {
    pendingRequests() {
      return this.registrationRequests.filter(request => request.status === '待审核')
    },
    filteredMembers() {
      const keyword = this.keyword.trim().toLowerCase()
      if (!keyword) return this.members
      return this.members.filter(member => {
        return [member.name, member.account, member.password, member.email, member.role, member.status].some(value => String(value).toLowerCase().includes(keyword))
      })
    },
    adminCount() {
      return this.members.filter(member => member.role === '管理员').length
    },
    activeCount() {
      return this.members.filter(member => member.status === '启用').length
    }
  },
  methods: {
    loadMembers() {
      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null')
        return (Array.isArray(saved) ? saved : defaultMembers).map(normalizeMember)
      } catch (error) {
        return defaultMembers.map(normalizeMember)
      }
    },
    persistMembers() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.members))
    },
    loadRegistrationRequests() {
      try {
        const saved = JSON.parse(localStorage.getItem(REGISTRATION_REQUESTS_KEY) || '[]')
        return Array.isArray(saved) ? saved.map(request => ({
          id: String(request.id || `req-${Date.now()}`),
          name: String(request.name || ''),
          account: String(request.account || ''),
          password: String(request.password || ''),
          email: String(request.email || ''),
          message: String(request.message || ''),
          role: String(request.role || '编辑者'),
          status: String(request.status || '待审核'),
          createdAt: String(request.createdAt || '刚刚')
        })) : []
      } catch (error) {
        return []
      }
    },
    persistRegistrationRequests() {
      localStorage.setItem(REGISTRATION_REQUESTS_KEY, JSON.stringify(this.registrationRequests))
    },
    openCreate() {
      this.editingId = ''
      this.form = createBlankForm()
      this.dialogVisible = true
    },
    openEdit(member) {
      this.editingId = member.id
      this.form = { name: member.name, account: member.account, password: member.password, email: member.email, role: member.role, status: member.status }
      this.dialogVisible = true
    },
    saveMember() {
      if (!this.form.name.trim() || !this.form.account.trim() || !this.form.password.trim() || !this.form.email.trim()) {
        this.$message.warning('请填写姓名、账号、密码和邮箱')
        return
      }
      if (this.editingId) {
        this.members = this.members.map(member => {
          return member.id === this.editingId ? { ...member, ...this.form, lastActive: '刚刚' } : member
        })
      } else {
        this.members.unshift({
          id: `m-${Date.now()}`,
          ...this.form,
          lastActive: '刚刚'
        })
      }
      this.persistMembers()
      this.dialogVisible = false
      this.$message.success('保存成功')
    },
    removeMember(member) {
      this.$confirm(`确认删除成员「${member.name}」？`, '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.members = this.members.filter(item => item.id !== member.id)
        this.persistMembers()
        this.$message.success('删除成功')
      }).catch(() => {})
    },
    approveRequest(request) {
      const exists = this.members.some(member => member.account === request.account)
      if (!exists) {
        this.members.unshift({
          id: `m-${Date.now()}`,
          name: request.name,
          account: request.account,
          password: request.password,
          email: request.email,
          role: request.role || '编辑者',
          status: '启用',
          lastActive: '刚刚'
        })
        this.persistMembers()
      }
      this.registrationRequests = this.registrationRequests.map(item => {
        return item.id === request.id ? { ...item, status: '已同意' } : item
      })
      this.persistRegistrationRequests()
      this.$message.success('已同意注册申请')
    },
    rejectRequest(request) {
      this.registrationRequests = this.registrationRequests.map(item => {
        return item.id === request.id ? { ...item, status: '已拒绝' } : item
      })
      this.persistRegistrationRequests()
      this.$message.success('已拒绝注册申请')
    }
  }
}
</script>

<style lang="scss" scoped>
.members-page {
  min-height: calc(100vh - 84px);
  padding: 28px;
  background: #f3f7fb;
}

.members-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h2 {
    margin: 0;
    color: #1f2d3d;
    font-size: 24px;
  }

  p {
    margin: 8px 0 0;
    color: #6b7c93;
  }
}

.member-summary {
  margin-bottom: 18px;
}

.summary-card {
  min-height: 96px;
  padding: 20px;
  border: 1px solid #dce7f2;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 10px 28px rgba(84, 117, 150, .08);

  span {
    color: #708198;
    font-size: 14px;
  }

  strong {
    display: block;
    margin-top: 12px;
    color: #1f2d3d;
    font-size: 32px;
  }
}

.members-table-card {
  border: 1px solid #dce7f2;
  border-radius: 14px;
  margin-bottom: 18px;
}

.table-toolbar {
  max-width: 320px;
  margin-bottom: 16px;
}

.table-toolbar-wide {
  max-width: none;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 18px;

  h3 {
    margin: 0;
    color: #1f2d3d;
    font-size: 18px;
  }

  p {
    margin: 6px 0 0;
    color: #6b7c93;
  }
}
</style>
