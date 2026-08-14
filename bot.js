const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: '136.243.83.105',
  port: 56390,
  username: 'MyBot',
  version: '1.20.4', // ফ্যালিক্স সার্ভারের সাথে কানেক্ট করার জন্য সবচেয়ে স্থিতিশীল জাভা ভার্সন
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
