let count = 100;
let chars = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];

for (const char of chars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, count);
  count += 200;
}