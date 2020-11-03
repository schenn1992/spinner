process.stdout.write('hello from spinner1.js... \rheyyy\n');

//create an array 
const pics = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   \n']
let counter = 100;

//use a for loop to iterate through the array
for (let pic of pics ) {
  setTimeout(() => {
    process.stdout.write(pic);
  }, counter);
  counter += 200;
}