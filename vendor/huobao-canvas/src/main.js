/**
 * Main entry point | 主入口
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.css'

async function applyProjectModelSettings() {
  try {
    const response = await fetch('/api/model-settings')
    const payload = await response.json()
    const tokenEntry = document.cookie.split(';').map(item => item.trim()).find(item => item.startsWith('Admin-Token='))
    const token = tokenEntry
      ? decodeURIComponent(tokenEntry.split('=').slice(1).join('='))
      : localStorage.getItem('Admin-Token') || ''
    // 先固定使用本地代理，避免模型设置未准备好时回退到外部地址导致 Network Error。
    localStorage.setItem('api-provider', 'chatfire')
    localStorage.setItem('base-urls-by-provider', JSON.stringify({ chatfire: `${location.origin}/api/canvas-openai` }))
    if (!payload?.ok || !payload.data?.ready) {
      if (token) sessionStorage.setItem('session-api-keys-by-provider', JSON.stringify({ chatfire: token }))
      return
    }
    const model = String(payload.data.defaultModel || '').split('::').pop()
    localStorage.setItem('api-provider', 'chatfire')
    localStorage.setItem('base-urls-by-provider', JSON.stringify({ chatfire: `${location.origin}/api/canvas-openai` }))
    localStorage.setItem('selected-chat-model', model)
    localStorage.setItem('custom-chat-models-by-provider', JSON.stringify({ chatfire: [{ key: model, label: model }] }))
    localStorage.setItem('selected-image-model', 'pollinations/flux')
    localStorage.setItem('custom-image-models-by-provider', JSON.stringify({ chatfire: [
      { key: 'pollinations/flux', label: 'FLUX（Pollinations 免费免密）' },
      { key: 'pollinations/kontext', label: 'Kontext（Pollinations 免费额度）' },
      { key: 'aihorde/sdxl-img2img', label: 'AI Horde SDXL（免费免注册图生图）' }
    ] }))
    if (token) sessionStorage.setItem('session-api-keys-by-provider', JSON.stringify({ chatfire: token }))
  } catch {}
}

await applyProjectModelSettings()

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')
