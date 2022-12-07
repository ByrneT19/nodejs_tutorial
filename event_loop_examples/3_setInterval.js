// This is the async code block
setInterval(() => {
    console.log('hello world');
}, 2000);
// this will run first
console.log(`I will run first`);
// process stays alive unless you kill it process Ctrl + C
// unexpected error