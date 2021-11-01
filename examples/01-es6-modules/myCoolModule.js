export default {
  time: Date.now(),
};

export function greet(name) {
  return `Hello ${name}!`;
}

/*  
CommonJS - node.js
module.exports = function(name) {
  ...
}

const greet = require('./myCoolModule');

ES Modules
ECMAScript Modules
*/

export const name = 'Andrew';

export const people = [
  {
    name: 'Tom',
  },
  {
    name: 'Nancy',
  },
  {
    name: 'Howard',
  },
];
