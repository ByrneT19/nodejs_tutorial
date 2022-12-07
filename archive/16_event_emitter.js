const EventEmitter = require("events");

// The alternative to this is to extend the EventEmitter class. 
// Do this if you wish to create custom content rather than just use the standard modlue as is done here.
const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with id: ${id}`);
});

customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

customEmitter.emit("response", "john", 34);