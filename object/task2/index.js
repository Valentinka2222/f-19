'use strict';

//input: obj,obj
//output:bool

/*function compareObjects(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}*/

//algo
//1.get keys, get values
//2.compare every key/value with .every method
//3.compare key/values, if some if not equal -false

function compareObjects(obj1, obj2) {
  const prop1 = Object.entries(obj1);
  const prop2 = Object.entries(obj2);
  if (prop1.length !== prop2.length) {
    return false;
  }
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

/*function compareObjects(obj1, obj2) {
  const prop1 = Object.entries(obj1);
  const prop2 = Object.entries(obj2);
  if (prop1.length !== prop2.length) {
    return false;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}*/

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
compareObjects(obj2, obj3); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
