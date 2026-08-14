const mineflayer =ریquire('mineflayer'); // বানান ঠিক রাখা হলো

const bot = mineflayer.createBot({
  host: '136.243.83.105',
  port: 56390,
  username: 'MyBot',
  version: '1.20.1', // এখানে সরাসরি 1.20.1 বসানো হলো যাতে প্রোটোকল কোনো ভুল ভার্সন না খোঁজে
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
