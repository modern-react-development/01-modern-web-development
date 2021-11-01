import World, { name, greet, people } from './myCoolModule';
import Animal from './Animal';

const { time } = World;

console.log(greet('Andrew'));

const myCat = new Animal('Pumpkin');

console.log({ name, people });
