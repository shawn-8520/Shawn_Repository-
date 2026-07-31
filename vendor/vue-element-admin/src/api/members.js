import request from '@/utils/request'

export function getMembers() {
  return request({ url: '/api/members', method: 'get' })
}

export function createMember(data) {
  return request({ url: '/api/members', method: 'post', data })
}

export function updateMember(id, data) {
  return request({ url: `/api/members/${encodeURIComponent(id)}`, method: 'put', data })
}

export function deleteMember(id) {
  return request({ url: `/api/members/${encodeURIComponent(id)}`, method: 'delete' })
}

export function getRegistrationRequests() {
  return request({ url: '/api/registration-requests', method: 'get' })
}

export function approveRegistrationRequest(id) {
  return request({ url: `/api/registration-requests/${encodeURIComponent(id)}/approve`, method: 'post' })
}

export function rejectRegistrationRequest(id) {
  return request({ url: `/api/registration-requests/${encodeURIComponent(id)}/reject`, method: 'post' })
}

export function migrateLegacyMembers(data) {
  return request({ url: '/api/members/migrate', method: 'post', data })
}
