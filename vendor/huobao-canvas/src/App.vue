<script setup>
/**
 * Root App component | 根组件
 * Provides naive-ui config and router view
 */
import { computed } from 'vue'
import { NConfigProvider, NMessageProvider, NDialogProvider, darkTheme } from 'naive-ui'
import { isDark } from './stores/theme'

// Naive UI theme based on dark mode | 基于深色模式的 Naive UI 主题
const theme = computed(() => isDark.value ? darkTheme : null)

// Global theme overrides | 全局主题覆盖
const themeOverrides = {
  common: {
    primaryColor: '#6fa8d9',
    primaryColorHover: '#4f90c8',
    primaryColorPressed: '#3f7eb4',
    primaryColorSuppl: '#6fa8d9',
    successColor: '#6fa8d9',
    successColorHover: '#4f90c8',
    successColorPressed: '#3f7eb4',
    successColorSuppl: '#6fa8d9',
    borderRadius: '12px',
    borderRadiusSmall: '8px'
  },
  Dialog: {
    borderRadius: '16px',
    padding: '24px'
  },
  Modal: {
    borderRadius: '16px',
    padding: '24px'
  },
  Card: {
    borderRadius: '16px',
    padding: '24px'
  },
  Button: {
    borderRadiusMedium: '10px',
    borderRadiusSmall: '8px',
    borderRadiusLarge: '12px',
    heightMedium: '36px',
    paddingMedium: '0 16px'
  },
  Input: {
    borderRadius: '10px',
    heightMedium: '36px'
  }
}
</script>

<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <n-message-provider>
      <n-dialog-provider>
        <router-view />
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style>
/* Global app styles handled in style.css */
</style>
