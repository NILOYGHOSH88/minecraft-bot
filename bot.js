const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: '136.243.83.105',
  port: 56390,
  username: 'MyBot',
  version: false, // এটি ভার্সন চেক করার এরর বন্ধ করবে
  auth: 'offline' // যেহেতু সার্ভারটি ক্র্যাকড (ফ্রি) তাই এটি জরুরি
});

// সার্ভারে কানেক্ট হলে এটি দেখাবে
bot.on('spawn', () => {
  console.log('Bot is ready and has joined the server!');
});

// কোনো সমস্যা হলে এটি কনসোলে প্রিন্ট করবে
bot.on('error', (err) => {
  console.log('Error occurred:', err);
});

// কিক করলে কি কারণ তা জানাবে
bot.on('kicked', (reason) => {
  console.log('Bot was kicked:', reason);
});

// হঠাৎ ডিসকানেক্ট হয়ে গেলে এটি আবার কানেক্ট করার চেষ্টা করবে
bot.on('end', () => {
  console.log('Bot disconnected, reconnecting in 5 seconds...');
  setTimeout(() => {
    process.exit(1); // রেন্ডারকে সিগন্যাল দেবে আবার স্টার্ট করার জন্য
  }, 5000);
});
