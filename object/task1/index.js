'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */

//algo
//V1
//1.iterable keylist array
//2. add key-value to the obj

/*function buildObject(keysList, valuesList) {
  let copyObj = {};
  for (let index = 0; index < keysList.length; index += 1) {
    copyObj[keysList[index]] = valuesList[index];
  }
  return copyObj;
}*/

//V2
/*function buildObject(keysList, valuesList) {
  return keysList.reduce((acc, key, index) => {
  
  acc[key]=valueList[index]
    return=acc
  }, {});
};
}*/

//V3
/*function buildObject(keysList, valuesList) {
  return keysList.reduce((acc, key, index) => {
    return { ...acc, [key]: valuesList[index] };
  }, {});
}*/

//V4
const buildObject = (keysList, valuesList) =>
  keysList.reduce((acc, key, index) => {
    return { ...acc, [key]: valuesList[index] };
  }, {});

// examples
const keys = ['singer', 'Albom', 'year'];
const values = ['Sting', 'Shape of my heart', 1985];
const result = buildObject(keys, values); // ==> { name: 'Bob', address: 'Ukraine', age: 34 }
console.log(result);
