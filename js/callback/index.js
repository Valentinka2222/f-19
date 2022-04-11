/*
 * A callback is a function passed as an argument to another function
 * This technique allows a function to call another function
 * A callback function can run after another function has finished
 * */

function sum(from, to, resolver) {
  let sum = 0;
  for (let index = from; index <= to; index += 1) {
    sum += index;
  }
  resolver(res);
}

//input:num
//return: undefined
function printResult(res) {
  console.log('result is' + res);
}
sum(10, 16, printResult);
function alertResult(res) {
  alert('Result is ' + res);
}
sum(10, 16, alertResult);
function sentResult(res) {
  //sending email
}
sum(10, 16, sentResult);
