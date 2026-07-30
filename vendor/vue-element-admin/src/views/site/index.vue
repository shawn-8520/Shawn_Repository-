<template>
  <div class="site-entry-page">
    <div class="site-entry-header">
      <div>
        <h2>使用页面</h2>
        <p>从后台快速进入知识库前台与三个核心使用页面。</p>
      </div>
      <el-button type="primary" icon="el-icon-position" @click="openDesktop">打开知识库桌面</el-button>
    </div>

    <el-row :gutter="18">
      <el-col v-for="item in entries" :key="item.hash" :xs="24" :sm="12" :lg="6">
        <el-card class="entry-card" shadow="never">
          <div class="entry-icon">
            <i :class="item.icon" />
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.desc }}</p>
          <el-button plain @click="openPage(item)">进入页面</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'SiteEntry',
  data() {
    return {
      entries: [
        { title: '01 主页桌面', hash: '#home', directDesktop: true, icon: 'el-icon-monitor', desc: '直接进入 OS 虚拟桌面。' },
        { title: '02 作品集', hash: '#works', icon: 'el-icon-folder-opened', desc: '管理作品文件、分类与无限画板。' },
        { title: '03 我的 OS', hash: '#system', icon: 'el-icon-cpu', desc: '进入 AI 无限画布与系统工作区。' },
        { title: '启动页', hash: '', icon: 'el-icon-video-play', desc: '从初始启动页重新进入知识库。' }
      ]
    }
  },
  methods: {
    openDesktop() {
      this.openPage({ hash: '#home', directDesktop: true })
    },
    openPage(item) {
      const query = item.directDesktop ? '?launch=1' : ''
      const target = `../ai-terminal-kb.html${query}${item.hash || ''}`
      window.open(target, '_blank', 'noopener')
    }
  }
}
</script>

<style lang="scss" scoped>
.site-entry-page {
  min-height: calc(100vh - 84px);
  padding: 28px;
  background: #f3f7fb;
}

.site-entry-header {
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

.entry-card {
  min-height: 230px;
  margin-bottom: 18px;
  border: 1px solid #dce7f2;
  border-radius: 14px;

  h3 {
    margin: 16px 0 8px;
    color: #1f2d3d;
    font-size: 18px;
  }

  p {
    min-height: 44px;
    margin: 0 0 18px;
    color: #6b7c93;
    line-height: 1.6;
  }
}

.entry-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: #d8ecff;
  color: #1d7ed0;
  font-size: 24px;
}
</style>
