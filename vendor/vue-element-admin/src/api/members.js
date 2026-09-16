import request from '@/utils/request'

export function getMembers() {
  return request({ url: '/api/admin/members', method: 'get' })
}

export function createMember(data) {
  return request({ url: '/api/admin/members', method: 'post', data })
}

export function updateMember(id, data) {
  return request({ url: `/api/admin/members/${encodeURIComponent(id)}`, method: 'put', data })
}

export function deleteMember(id) {
  return request({ url: `/api/admin/members/${encodeURIComponent(id)}`, method: 'delete' })
}

export function getRegistrationRequests() {
  return request({ url: '/api/admin/registrations', method: 'get' })
}

export function reviewRegistration(id, action, data = {}) {
  return request({
    url: `/api/admin/registrations/${encodeURIComponent(id)}/${action}`,
    method: 'post',
    data
  })
}
