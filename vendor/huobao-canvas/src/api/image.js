/**
 * Image API | 图片生成 API
 */

import { request } from '@/utils'

// 生成图片
export const generateImage = (data, options = {}) => {
  const { requestType = 'json', endpoint = '/images/generations', responseType } = options
  
  return request({
    url: endpoint,
    method: 'post',
    data,
    responseType,
    headers: requestType === 'formdata' ? { 'Content-Type': 'multipart/form-data' } : {}
  })
}

// 查询异步图片任务状态
export const getImageJobStatus = (jobId, options = {}) => {
  const endpoint = options.endpoint || `/images/jobs/${encodeURIComponent(jobId)}`
  return request({ url: endpoint, method: 'get' })
}
