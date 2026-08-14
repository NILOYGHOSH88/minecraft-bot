const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: '136.243.83.105',
  port: 56390,
  username: 'MyBot',
  version: '1.20.1'
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
