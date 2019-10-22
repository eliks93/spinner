const characters = ['|   ', '/   ', '-   ', '\\   '];

count = 4;
timer = 850 * count
for(let i = timer; i > 0; i -= 850) {
  characters.forEach(characeter => {
  setTimeout(() => process.stdout.write(`\r${characeter}`), timer)
  timer -= 200;
  })
};


