module.exports = {
  apps: [
    {
      name: 'su',
      command: './node_modules/.bin/rimraf dist && npm run build && npm run start',
      restart: true,
    },
  ],
}
