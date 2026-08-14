const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: '136.243.83.105',
  port: 56390,
  username: 'MyBot',
  version: '26.2' // এখানে সার্ভারের সঠিক ভার্সন 26.2 বসিয়ে দেওয়া হলো
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
