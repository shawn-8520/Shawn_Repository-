<template>
  <!-- API Settings Modal | API 设置弹窗 -->
  <n-modal v-model:show="showModal" preset="card" title="API 设置" style="width: 560px;">
    <n-tabs type="line" animated>
      <!-- API 配置标签 -->
      <n-tab-pane name="api" tab="API 配置">
        <n-form ref="formRef" :model="formData" label-placement="left" label-width="80">
          <n-form-item label="渠道" path="provider">
            <n-select
              v-model:value="formData.provider"
              :options="providerOptions"
              placeholder="选择 API 渠道"
            />
          </n-form-item>

          <div class="free-preset-card">
            <div class="free-preset-head">
              <div>
                <strong>免费模型 API 预设</strong>
                <p>自动配置免费模型渠道、Base URL 和默认模型。</p>
              </div>
              <n-tag size="small" type="success">推荐</n-tag>
            </div>
            <div class="free-preset-actions">
              <n-button
                v-for="preset in freeApiPresets"
                :key="preset.provider"
                size="small"
                secondary
                :type="formData.provider === preset.provider ? 'primary' : 'default'"
                @click="applyFreePreset(preset)"
              >
                {{ preset.label }}
              </n-button>
            </div>
            <p class="free-preset-note">平台仍需要你的个人免费 API Key；本项目不会内置或保存公共密钥。</p>
          </div>

          <n-form-item label="Base URL" path="baseUrl">
            <n-input
              v-model:value="formData.baseUrl"
              placeholder="https://api.chatfire.site/v1"
            />
          </n-form-item>
          <n-form-item label="API Key" path="apiKey">
            <n-input
              v-model:value="formData.apiKey"
              type="password"
              show-password-on="click"
              placeholder="请输入 API Key"
            />
          </n-form-item>
          <n-form-item label="保存方式">
            <n-checkbox v-model:checked="sessionOnlyKey">
              仅本次会话保存 Key（推荐）
            </n-checkbox>
          </n-form-item>

          <div class="security-card">
            <div class="security-card-head">
              <div>
                <strong>API 安全检测</strong>
                <p>检查旧版明文 Key、长期保存 Key、非 HTTPS API 地址。</p>
              </div>
              <n-button size="small" secondary @click="runSecurityCheck">检测</n-button>
            </div>
            <div v-if="securityScanResult" class="security-result">
              <n-alert
                :type="securityScanResult.risks.length ? 'warning' : 'success'"
                :title="securityScanResult.risks.length ? `发现 ${securityScanResult.risks.length} 个风险` : '未发现明显风险'"
              >
                <ul v-if="securityScanResult.risks.length" class="security-risk-list">
                  <li v-for="risk in securityScanResult.risks" :key="risk">{{ risk }}</li>
                </ul>
                <p v-else>当前没有发现长期保存 Key 或不安全地址。</p>
              </n-alert>
              <n-button
                v-if="securityScanResult.risks.length"
                size="small"
                type="primary"
                class="mt-2"
                @click="fixSecurityRisks"
              >
                一键修复
              </n-button>
            </div>
          </div>

          <n-divider title-placement="left" class="!my-3">
            <span class="text-xs text-[var(--text-secondary)]">端点路径</span>
          </n-divider>
          
          <div class="endpoint-list">
            <div class="endpoint-item">
              <span class="endpoint-label">问答</span>
              <n-tag size="small" type="info" class="endpoint-tag">{{ currentEndpoints.chat }}</n-tag>
            </div>
            <div class="endpoint-item">
              <span class="endpoint-label">生图</span>
              <n-tag size="small" type="success" class="endpoint-tag">{{ currentEndpoints.image }}</n-tag>
            </div>
            <div class="endpoint-item">
              <span class="endpoint-label">视频生成</span>
              <n-tag size="small" type="warning" class="endpoint-tag">{{ currentEndpoints.video }}</n-tag>
            </div>
            <div class="endpoint-item">
              <span class="endpoint-label">视频查询</span>
              <n-tag size="small" type="warning" class="endpoint-tag">{{ currentEndpoints.videoQuery }}</n-tag>
            </div>
          </div>

          <n-alert v-if="!isConfigured" type="warning" title="未配置" class="mb-4">
            <div class="flex flex-col gap-2">
              <p>API 地址和免费模型已可一键配置；还需要填写你自己的免费 API Key。</p>
            </div>
          </n-alert>

          <n-alert v-else type="success" title="已配置" class="mb-4">
            API 已就绪，可以使用 AI 功能
          </n-alert>
        </n-form>
      </n-tab-pane>

      <!-- 模型配置标签 -->
      <n-tab-pane name="models" tab="模型配置">
        <div class="model-config-section">
          <div class="model-group">
            <div class="model-group-header">
              <span class="model-group-title">当前默认模型</span>
              <n-tag size="tiny" type="success">{{ currentProviderLabel }}</n-tag>
            </div>
            <n-form label-placement="left" label-width="92">
              <n-form-item label="文字模型">
                <n-select
                  v-model:value="modelStore.selectedChatModel"
                  :options="chatModelSelectOptions"
                  placeholder="选择文字模型"
                  filterable
                />
              </n-form-item>
              <n-form-item label="图片模型">
                <n-select
                  v-model:value="modelStore.selectedImageModel"
                  :options="imageModelSelectOptions"
                  placeholder="选择图片模型"
                  filterable
                />
              </n-form-item>
              <n-form-item label="视频模型">
                <n-select
                  v-model:value="modelStore.selectedVideoModel"
                  :options="videoModelSelectOptions"
                  placeholder="选择视频模型"
                  filterable
                />
              </n-form-item>
            </n-form>
          </div>

          <!-- 问答模型 -->
          <div class="model-group">
            <div class="model-group-header">
              <span class="model-group-title">问答模型</span>
              <n-tag size="tiny" type="info">{{ allChatModels.length }} 个</n-tag>
            </div>
            <div class="model-input-row">
              <n-input
                v-model:value="newChatModel"
                placeholder="输入模型名称，如 gpt-4o"
                size="small"
                @keyup.enter="handleAddChatModel"
              />
              <n-button size="small" type="primary" @click="handleAddChatModel" :disabled="!newChatModel">
                添加
              </n-button>
            </div>
            <div class="model-tags">
              <n-tag
                v-for="model in allChatModels"
                :key="model.key"
                size="small"
                :closable="model.isCustom"
                :type="modelStore.selectedChatModel === model.key ? 'info' : (model.isCustom ? 'info' : 'default')"
                :class="['model-choice-tag', { 'is-selected': modelStore.selectedChatModel === model.key }]"
                @click="handleSelectChatModel(model)"
                @close="handleRemoveChatModel(model.key)"
              >
                {{ model.label }}
              </n-tag>
            </div>
          </div>

          <!-- 图片模型 -->
          <div class="model-group">
            <div class="model-group-header">
              <span class="model-group-title">图片模型</span>
              <n-tag size="tiny" type="success">{{ allImageModels.length }} 个</n-tag>
            </div>
            <div class="model-input-row">
              <n-input
                v-model:value="newImageModel"
                placeholder="输入模型名称，如 dall-e-3"
                size="small"
                @keyup.enter="handleAddImageModel"
              />
              <n-button size="small" type="primary" @click="handleAddImageModel" :disabled="!newImageModel">
                添加
              </n-button>
            </div>
            <div class="model-tags">
              <n-tag
                v-for="model in allImageModels"
                :key="model.key"
                size="small"
                :closable="model.isCustom"
                :type="modelStore.selectedImageModel === model.key ? 'success' : (model.isCustom ? 'success' : 'default')"
                :class="['model-choice-tag', { 'is-selected': modelStore.selectedImageModel === model.key }]"
                @click="handleSelectImageModel(model)"
                @close="handleRemoveImageModel(model.key)"
              >
                {{ model.label }}
              </n-tag>
            </div>
          </div>

          <!-- 视频模型 -->
          <div class="model-group">
            <div class="model-group-header">
              <span class="model-group-title">视频模型</span>
              <n-tag size="tiny" type="warning">{{ allVideoModels.length }} 个</n-tag>
            </div>
            <div class="model-input-row">
              <n-input
                v-model:value="newVideoModel"
                placeholder="输入模型名称，如 sora-2"
                size="small"
                @keyup.enter="handleAddVideoModel"
              />
              <n-button size="small" type="primary" @click="handleAddVideoModel" :disabled="!newVideoModel">
                添加
              </n-button>
            </div>
            <div class="model-tags">
              <n-tag
                v-for="model in allVideoModels"
                :key="model.key"
                size="small"
                :closable="model.isCustom"
                :type="modelStore.selectedVideoModel === model.key ? 'warning' : (model.isCustom ? 'warning' : 'default')"
                :class="['model-choice-tag', { 'is-selected': modelStore.selectedVideoModel === model.key }]"
                @click="handleSelectVideoModel(model)"
                @close="handleRemoveVideoModel(model.key)"
              >
                {{ model.label }}
              </n-tag>
            </div>
          </div>
        </div>
      </n-tab-pane>
    </n-tabs>

    <template #footer>
      <div class="flex justify-between items-center">
        <span class="text-xs text-[var(--text-secondary)]">API Key 仅用于本地请求配置</span>
        <div class="flex gap-2">
          <n-button @click="handleClear" tertiary>清除配置</n-button>
          <n-button @click="showModal = false">取消</n-button>
          <n-button type="primary" @click="handleSave">保存</n-button>
        </div>
      </div>
    </template>
  </n-modal>
</template>

<script setup>
/**
 * API Settings Component | API 设置组件
 * Modal for configuring API key, base URL, and custom models
 */
import { ref, reactive, watch, computed } from 'vue'
import { NModal, NForm, NFormItem, NInput, NButton, NAlert, NDivider, NTag, NTabs, NTabPane, NSelect, NCheckbox } from 'naive-ui'
import { useModelStore } from '../stores/pinia'
import { getProviderConfig } from '../config/providers'

// Props | 属性
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
})

// Emits | 事件
const emit = defineEmits(['update:show', 'saved'])

// API Config 状态
const isConfigured = computed(() => !!modelStore.currentApiKey)

// Model Store (Pinia) | 模型配置 Store
const modelStore = useModelStore()

// Provider options for select | 渠道下拉选项
const providerOptions = modelStore.providerList.map(p => ({
  label: p.label,
  value: p.key
}))

// 当前渠道的端点路径
const currentEndpoints = computed(() => {
  const config = getProviderConfig(formData.provider)
  const endpoints = config.endpoints || {
    chat: '/chat/completions',
    image: '/v1/images/generations',
    video: '/v1/videos',
    videoQuery: '/v1/videos/{taskId}'
  }
  return {
    ...endpoints,
    image: typeof endpoints.image === 'function' ? '/hf-inference/models/{model}' : endpoints.image
  }
})

// 全局模型列表（不区分渠道）
const allChatModels = computed(() => modelStore.allChatModels)
const allImageModels = computed(() => modelStore.allImageModels)
const allVideoModels = computed(() => modelStore.allVideoModels)
const currentProviderLabel = computed(() => modelStore.providerLabel)
const formProviderModels = computed(() => modelStore.getModelsByProvider(formData.provider))
const chatModelSelectOptions = computed(() => formProviderModels.value.chat.map(m => ({ label: m.label, value: m.key })))
const imageModelSelectOptions = computed(() => formProviderModels.value.image.map(m => ({ label: m.label, value: m.key })))
const videoModelSelectOptions = computed(() => formProviderModels.value.video.map(m => ({ label: m.label, value: m.key })))
const freeApiPresets = [
  {
    label: 'HF 文字+图片',
    provider: 'huggingface',
    chatModel: 'openai/gpt-oss-20b',
    imageModel: 'black-forest-labs/FLUX.1-schnell',
    keyUrl: 'https://huggingface.co/settings/tokens'
  },
  {
    label: 'OpenRouter 文字',
    provider: 'openrouter',
    chatModel: 'deepseek/deepseek-chat-v3-0324:free',
    keyUrl: 'https://openrouter.ai/settings/keys'
  },
  {
    label: 'Gemini 文字',
    provider: 'gemini',
    chatModel: 'gemini-3.5-flash',
    keyUrl: 'https://aistudio.google.com/app/apikey'
  }
]
const currentKeyUrl = computed(() => (
  freeApiPresets.find(preset => preset.provider === formData.provider)?.keyUrl
  || 'https://api.chatfire.site/login?inviteCode=EEE80324'
))

// Modal visibility | 弹窗可见性
const showModal = ref(props.show)
const sessionOnlyKey = computed({
  get: () => modelStore.apiKeyStorageMode !== 'persistent',
  set: (checked) => modelStore.setApiKeyStorageMode(checked ? 'session' : 'persistent')
})
const securityScanResult = ref(null)

// Form data | 表单数据
const formData = reactive({
  provider: modelStore.currentProvider,
  apiKey: '',
  baseUrl: ''
})

// New model inputs | 新模型输入
const newChatModel = ref('')
const newImageModel = ref('')
const newVideoModel = ref('')

// 初始化或切换渠道时，更新 API 配置
const updateFormApiConfig = () => {
  const provider = formData.provider
  const config = getProviderConfig(provider)
  formData.apiKey = modelStore.apiKeysByProvider[provider] || ''
  formData.baseUrl = modelStore.baseUrlsByProvider[provider] || config.defaultBaseUrl || ''
}

const getStoredJsonSafe = (storage, key) => {
  try {
    const value = storage.getItem(key)
    return value ? JSON.parse(value) : {}
  } catch {
    return {}
  }
}

const runSecurityCheck = () => {
  const risks = []
  const legacyApiKey = localStorage.getItem('apiKey')
  const persistentKeys = getStoredJsonSafe(localStorage, 'api-keys-by-provider')
  const storedBaseUrls = getStoredJsonSafe(localStorage, 'base-urls-by-provider')
  const activeBaseUrl = formData.baseUrl || ''

  if (legacyApiKey) {
    risks.push('检测到旧版 apiKey 明文残留，建议清理。')
  }

  if (Object.values(persistentKeys).some(Boolean)) {
    risks.push('检测到 API Key 被长期保存在本地，建议改为仅本次会话保存。')
  }

  const unsafeUrls = Object.values({ ...storedBaseUrls, active: activeBaseUrl })
    .filter(Boolean)
    .filter(url => !String(url).startsWith('https://'))

  if (unsafeUrls.length) {
    risks.push('检测到非 HTTPS API 地址，可能被中间人窃取请求内容。')
  }

  securityScanResult.value = { risks }
}

const fixSecurityRisks = () => {
  modelStore.setApiKeyStorageMode('session')
  modelStore.clearLegacyApiSecrets()
  formData.apiKey = ''
  securityScanResult.value = { risks: [] }
  window.$message?.success('已清理长期保存的 Key，并切换为仅本次会话保存')
}

const applyFreePreset = (preset) => {
  const config = getProviderConfig(preset.provider)
  formData.provider = preset.provider
  formData.baseUrl = config.defaultBaseUrl || ''
  modelStore.setProvider(preset.provider)
  modelStore.setBaseUrlByProvider(preset.provider, formData.baseUrl)
  modelStore.selectedChatModel = preset.chatModel

  if (preset.imageModel) {
    modelStore.selectedImageModel = preset.imageModel
  }

  const video = modelStore.getModelsByProvider(preset.provider).video[0]
  if (video) {
    modelStore.selectedVideoModel = video.key
  }

  window.$message?.success(`已配置 ${preset.label} API 预设`)
}

const ensureModelProvider = (model) => {
  const provider = model.provider?.[0]
  if (!provider || provider === formData.provider) return

  const config = getProviderConfig(provider)
  formData.provider = provider
  modelStore.setProvider(provider)

  if (!modelStore.baseUrlsByProvider[provider] && config.defaultBaseUrl) {
    modelStore.setBaseUrlByProvider(provider, config.defaultBaseUrl)
  }
}

const handleSelectChatModel = (model) => {
  ensureModelProvider(model)
  modelStore.selectedChatModel = model.key
}

const handleSelectImageModel = (model) => {
  ensureModelProvider(model)
  modelStore.selectedImageModel = model.key
}

const handleSelectVideoModel = (model) => {
  ensureModelProvider(model)
  modelStore.selectedVideoModel = model.key
}

// Watch prop changes | 监听属性变化
watch(() => props.show, (val) => {
  showModal.value = val
  if (val) {
    formData.provider = modelStore.currentProvider
    updateFormApiConfig()
  }
})

// 监听渠道变化，更新表单中的 API 配置
watch(() => formData.provider, () => {
  updateFormApiConfig()
  const { chat, image, video } = modelStore.getModelsByProvider(formData.provider)
  if (chat.length && !chat.some(m => m.key === modelStore.selectedChatModel)) {
    modelStore.selectedChatModel = chat[0].key
  }
  if (image.length && !image.some(m => m.key === modelStore.selectedImageModel)) {
    modelStore.selectedImageModel = image[0].key
  }
  if (video.length && !video.some(m => m.key === modelStore.selectedVideoModel)) {
    modelStore.selectedVideoModel = video[0].key
  }
})

// Watch modal changes | 监听弹窗变化
watch(showModal, (val) => {
  emit('update:show', val)
})

// Handle add models | 处理添加模型
const handleAddChatModel = () => {
  if (newChatModel.value.trim()) {
    modelStore.addCustomChatModel(newChatModel.value.trim())
    newChatModel.value = ''
  }
}

const handleAddImageModel = () => {
  if (newImageModel.value.trim()) {
    modelStore.addCustomImageModel(newImageModel.value.trim())
    newImageModel.value = ''
  }
}

const handleAddVideoModel = () => {
  if (newVideoModel.value.trim()) {
    modelStore.addCustomVideoModel(newVideoModel.value.trim())
    newVideoModel.value = ''
  }
}

// Handle remove models | 处理删除模型
const handleRemoveChatModel = (modelKey) => {
  modelStore.removeCustomChatModel(modelKey)
}

const handleRemoveImageModel = (modelKey) => {
  modelStore.removeCustomImageModel(modelKey)
}

const handleRemoveVideoModel = (modelKey) => {
  modelStore.removeCustomVideoModel(modelKey)
}

// Handle save | 处理保存
const handleSave = () => {
  if (formData.provider) {
    modelStore.setProvider(formData.provider)
  }
  modelStore.setApiKeyStorageMode(sessionOnlyKey.value ? 'session' : 'persistent')
  if (formData.apiKey) {
    modelStore.setApiKeyByProvider(formData.provider, formData.apiKey)
  }
  if (formData.baseUrl) {
    modelStore.setBaseUrlByProvider(formData.provider, formData.baseUrl)
  }
  showModal.value = false
  emit('saved')
}

// Handle clear | 处理清除
const handleClear = () => {
  modelStore.clearApiConfigByProvider(formData.provider)
  modelStore.clearLegacyApiSecrets()
  modelStore.clearCustomModels()
  formData.apiKey = ''
  formData.baseUrl = ''
}
</script>

<style scoped>
.endpoint-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  padding: 12px;
  background: var(--bg-secondary, #f5f5f5);
  border-radius: 6px;
}

.free-preset-card {
  margin: 0 0 16px;
  padding: 12px;
  border: 1px solid rgba(64, 158, 255, 0.2);
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(232, 245, 255, 0.9), rgba(255, 255, 255, 0.92));
}

.free-preset-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
}

.free-preset-head strong {
  display: block;
  font-size: 14px;
  color: var(--text-primary, #24364f);
}

.free-preset-head p,
.free-preset-note {
  margin: 4px 0 0;
  font-size: 12px;
  color: var(--text-secondary, #64748b);
}

.free-preset-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.security-card {
  margin: 0 0 16px;
  padding: 12px;
  border: 1px solid rgba(239, 168, 61, 0.25);
  border-radius: 10px;
  background: rgba(255, 250, 235, 0.78);
}

.security-card-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}

.security-card-head strong {
  display: block;
  font-size: 14px;
  color: var(--text-primary, #24364f);
}

.security-card-head p {
  margin: 4px 0 0;
  font-size: 12px;
  color: var(--text-secondary, #64748b);
}

.security-result {
  margin-top: 10px;
}

.security-risk-list {
  margin: 0;
  padding-left: 18px;
}

.endpoint-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.endpoint-label {
  font-size: 13px;
  color: var(--text-secondary, #666);
  min-width: 70px;
}

.endpoint-tag {
  font-family: monospace;
  font-size: 12px;
}

.model-config-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.model-group {
  padding: 12px;
  background: var(--bg-secondary, #f5f5f5);
  border-radius: 8px;
}

.model-group-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.model-group-title {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary, #333);
}

.model-input-row {
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
}

.model-input-row .n-input {
  flex: 1;
}

.model-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
}

.model-choice-tag {
  cursor: pointer;
  user-select: none;
  transition: transform 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease;
}

.model-choice-tag:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 14px rgba(40, 109, 180, 0.12);
}

.model-choice-tag.is-selected {
  border-color: rgba(40, 109, 180, 0.5);
  box-shadow: 0 8px 18px rgba(40, 109, 180, 0.16);
  font-weight: 600;
}
</style>
