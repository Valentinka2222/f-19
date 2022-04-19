/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

//input:obj,string, any
//output:obj

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// put your code here

// put your code here

// put your code here

// examples
const user = {
  name: 'John',
};
/*addPropertyV1(user, 'currency', 'USD'); // ==> { value: 170, currency: 'USD' }
function addPropertyV1(obj, key, value) {
  return (obj[key] = value);
}*/
//test

function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}
function addPropertyV3(obj, key, value) {
  return Object.assign({}, obj, { [key]: value });
}

function addPropertyV4(obj, key, value) {
  return { ...{}, ...obj, ...{ [key]: value } };
}
console.log(addPropertyV4(user, 'age', 17));
//rest operator

function sum(...args) {
  console.log(args);
}
sum(1, 2, 555);
