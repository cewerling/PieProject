// Array destructuring is a simplified method of extracting multiple properties from an array.
// It creates a pattern that describes the kind of value you are expecting.  It uses position.

let LotRArray = ['Fellowship of the ring', 'Two Towers', 'Return of the King'];
console.log(LotRArray[0]);
let firstElementInLotRArray = LotRArray[0];
console.log(LotRArray[1]);
console.log(LotRArray[2]);

let [first, second, third] = LotRArray;
console.log(first, second, third);

let [a, , c] = ['Mercury', 'Venus', 'Earth'];
console.log(a, c);

let planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];
let [first, , third, ...others] = planets;
console.log(first);
console.log(third);
console.log(others);
console.log(...others);

const [fruit, setFruit] = useState('banana');
let fruitStateVariable = useState('banana');  // Returns a pair (not pear)
let fruit = fruitStateVariable[0];            // First item in the pair
let setFruit = fruitStateVariable[1];         // Second item in the pair
