
const MEMBERS_KEY = 'kb-admin-members'

function loadMembers() {
  try {
    const saved = JSON.parse(localStorage.getItem(MEMBERS_KEY) || '[]')
    return Array.isArray(saved) ? saved : []
  } catch (error) {
    return []
  }
}

function roleToPermission(role) {
  return role === '管理员' ? 'admin' : 'editor'
}

function findApprovedMember(account, password) {
  return loadMembers().find(member => {
    return member.account === account && member.password === password && member.status === '启用'
  })
}

function memberInfoFromToken(token) {
  if (!token.startsWith('member-token-')) return null
  const account = decodeURIComponent(token.replace('member-token-', ''))
  const member = loadMembers().find(item => item.account === account && item.status === '启用')
  if (!member) return null
  const role = roleToPermission(member.role)
  return {
    roles: [role],
    introduction: member.role || '知识库成员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: member.name || member.account
  }
}

module.exports = [
  // user login
  {
    url: '/vue-element-admin/user/login',
    type: 'post',
    response: config => {
      const { username, password } = config.body
      const member = findApprovedMember(username, password)
      if (!member) {
        return {
          code: 60204,
          message: 'Account and password are incorrect.'
        }
      }

      return {
        code: 20000,
        data: { token: `member-token-${encodeURIComponent(member.account)}` }
      }
    }
  },

  // get user info
  {
    url: '/vue-element-admin/user/info\.*',
    type: 'get',
    response: config => {
      const { token } = config.query
      const info = memberInfoFromToken(token)

      // mock error
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.'
        }
      }

      return {
        code: 20000,
        data: info
      }
    }
  },

  // user logout
  {
    url: '/vue-element-admin/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
