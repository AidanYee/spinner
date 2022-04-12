const spinner = "\r| \r/ \r- \r\\ \r| \r/ \r- \r\\ \r|"
let compundDelay = 0

for (const char of spinner) {
  setTimeout(() => {process.stdout.write(char);
  }, compundDelay) //replace with variable instead of time
  compundDelay += 200 //adds a 200 millisecond delay to every character in loop
};