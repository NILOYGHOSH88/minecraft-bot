const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: '136.243.83.105',
  port: 56390,
  username: 'MyBot',
  version: '26.2', // সার্ভারের চাহিদা অনুযায়ী সরাসরি 26.2 ভার্সন সেট করা হলো
  auth: 'offline'
});

bot.on('spawn', () => {
  console.log('Bot successfully joined the server!');
});

bot.on('error', (err) => {
  console.log('Error occurred:', err);
});

bot.on('kicked', (reason) => {
  console.log('Bot was kicked:', reason);
});

bot.on('end', () => {
  console.log('Bot disconnected, reconnecting...');
  setTimeout(() => {
    process.exit(1);
  }, 5000);
});
