const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'mythiclegacybd.falixsrv.me', 
  port: 56390,
  username: 'AFK_Bot',
  version: false 
})

bot.on('spawn', () => {
  console.log('বট সফলভাবে সার্ভারে ঢুকেছে!')
  
  // প্রতি ৫ সেকেন্ড পর পর বট ডানে বা বামે একটু ঘুরবে এবং লাফাবে
  setInterval(() => {
    bot.look(Math.random() * Math.PI * 2, 0)
    bot.setControlState('jump', true)
    setTimeout(() => {
      bot.setControlState('jump', false)
    }, 500)
  }, 5000)
})

bot.on('end', () => {
  console.log('ডিসকানেক্ট হয়ে গেছে...')
})
