'use strict';

const numbersList1 = [1, 2, 3, 4, 5];
//const numbersList1= new Array()
console.log('before pop ' + numbersList1);
//pop

//input: none
//return :number
const res = numbersList1.pop();
console.log(res);
console.log('after pop ' + numbersList1);

//push
const numbersList2 = [1, 2, 3, 4, 5];
console.log('before push ' + numbersList2);
//input:number
//return:number
const pushRes = numbersList2.push(6);
console.log(pushRes);
console.log('after push ' + numbersList2);

//shift
const numbersList3 = [1, 2, 3, 4, 5];
console.log('before shift ' + numbersList3);

//input:none
//output:number
console.log(numbersList3.shift());
console.log('after shift ' + numbersList3);

//unshift
const numbersList4 = [1, 2, 3, 4, 5];
console.log('before unshift ' + numbersList4);

//input:none
//output:number
console.log(numbersList4.unshift(0));
console.log('after unshift ' + numbersList4);
