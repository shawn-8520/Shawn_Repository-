const Mock = require('mockjs')

const routes = [
  {
    path: '',
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/site',
    redirect: '/site/index',
    name: 'SiteEntry',
    meta: { title: 'SiteEntry', icon: 'link' },
    children: [
      {
        path: 'index',
        name: 'SiteEntry',
        meta: { title: 'SiteEntry', icon: 'link' }
      }
    ]
  },
  {
    path: '/members',
    redirect: '/members/index',
    name: 'Members',
    meta: { title: 'Members', icon: 'peoples' },
    children: [
      {
        path: 'index',
        name: 'Members',
        meta: { title: 'Members', icon: 'peoples' }
      }
    ]
  }
]

const roles = [
  {
    key: 'admin',
    name: '管理员',
    description: '可查看和管理全部后台页面',
    routes: routes
  },
  {
    key: 'editor',
    name: '编辑者',
    description: '可登录桌面，不可进入后台管理页',
    routes: routes.filter(i => i.path !== '/members')
  },
  {
    key: 'visitor',
    name: '访客',
    description: '仅可查看数据看板',
    routes: [{
      path: '',
      redirect: 'dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          meta: { title: 'dashboard', icon: 'dashboard' }
        }
      ]
    }]
  }
]

module.exports = [
  // mock get all routes form server
  {
    url: '/vue-element-admin/routes',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: routes
      }
    }
  },

  // mock get all roles form server
  {
    url: '/vue-element-admin/roles',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: roles
      }
    }
  },

  // add role
  {
    url: '/vue-element-admin/role',
    type: 'post',
    response: {
      code: 20000,
      data: {
        key: Mock.mock('@integer(300, 5000)')
      }
    }
  },

  // update role
  {
    url: '/vue-element-admin/role/[A-Za-z0-9]',
    type: 'put',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  },

  // delete role
  {
    url: '/vue-element-admin/role/[A-Za-z0-9]',
    type: 'delete',
    response: {
      code: 20000,
      data: {
        status: 'success'
      }
    }
  }
]
