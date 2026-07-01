module.exports = {
  apps: [
    {
      name: "portfolio",
      script: "node_modules/.bin/next",
      args: "start -p 3000 -H 127.0.0.1",
      cwd: __dirname,
      instances: 1,
      autorestart: true,
      watch: false,
      max_restarts: 10,
      restart_delay: 5000,
      time: true,
      merge_logs: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
