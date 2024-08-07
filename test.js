// Your code here
const { Employee } = require("./employee");

const john = new Employee("John Wick", "Dog lover");

const sayNameFunc = john.sayName.bind(john);
const sayOccupationFunc = john.sayOccupation.bind(john);

setTimeout(sayNameFunc, 2000);
setTimeout(sayOccupationFunc, 3000);
