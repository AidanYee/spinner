process.stdout.write('hello from spinner1.js... \rhola \n');

setTimeout(() => {
  process.stdout.write('\r|   ');
},100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
},500);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r|   '); //start of seccond rotation
},1100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, 1700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 1900);