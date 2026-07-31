module.exports = {
  apps: [
    {
      name: "clink-ai-api",
      script: "scripts/preview-server.js",
      cwd: "/www/wwwroot/ai-terminal-kb-repo",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: "8099",
        PROJECT_DATA_DIR: "/www/wwwroot/w-shawn.cn-data"
      }
    }
  ]
};
