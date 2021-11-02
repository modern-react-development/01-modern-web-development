/* 

*/

//syntactic sugar

function add(a, b) {
  return a + b;
}

var add = function (a, b) {
  return a + b;
};

var add = (a, b) => a + b;

var add = (a, b) => {
  return a + b;
};

let sayHello = (name) => 'Hello ' + name;

let getPerson = () => ({
  name: 'Andrew',
});

let person = {
  name: 'Andrew',
  cat: 'Pumpkin',
  favColor: 'purple',
};

// aliasing

// old method let coolCat = person.cat;

let { cat: coolCat } = person;

// let
// const - constant assignment, use if this variable will never be re-assigned
// use const everywhere... unless you can't, then use let

const PI = 42;
// PI = 42; // won't work!

// Block Scope

function doTheThing() {
  let answer = 42;
  if (true) {
    let answer2 = 50;
    console.log(answer2);
  } else {
  }
  const name = 'a';
  for (let i = 0; i < 50; i++) {
    console.log(i);
  }
  try {
    // do stuff here that might throw an error...
  } catch (error) {}

  const value = 42;
  switch (value) {
    case 42: {
    }

    default: {
    }
  }
}
doTheThing();

{
  let answer = 42;
  console.log(answer);
}

let answer = 42;
let name = 'andrew';

const world = {
  answer,
  name,
  [answer + 5]: 'hello',
};
