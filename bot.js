const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'mythiclegacybd.falixsrv.me', 
  port: 56390,
  username: 'AFK_Bot',
  version: false 
})

bot.on('spawn', () => {
  console.log('বট সফলভাবে সার্ভারে ঢুকেছে!')
})
