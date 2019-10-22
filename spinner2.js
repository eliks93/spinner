const characters = ['|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-   ', '\\   '];
timer = 1700;

characters.forEach(characeter => {
  
  setTimeout(() => process.stdout.write(`\r${characeter}`), timer)
  timer -= 200;

})


