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

//метод filter

//input
//output:arr

//option1
const anotherNumbersList = [5, 0, 8, 10, -4, 50, 220];
/*function filterCallback(num) {
  console.log('filterCallback is called', num);
  return num > 500;
}
const filterRes = anotherNumbersList.filter(filterCallback);
console.log(filterRes);*/

//option2
//const filterRes= anotherNumberList.filter(function(num){
// return num > 500;
//});
// console.log(filterRes)

//option3
const filterRes = anotherNumbersList.filter(num => num > 5);
console.log(filterRes);
//======map

const numberList = [5, 0, 8, 10, -4, 50, 220];

//input: func,obj
//output: arr

//input:element
//output:modified el
const mapRes = numberList.map(el => el * el);
console.log(mapRes);

//find
//input: func
//output:

//input:elem
//output:boolean
//option1
/*const findRes = numbersList.find(el => {
     if (el % 2 === 1) {
        return true;
    }
    else {
        return false;
    }
})*/

//option2
const findRes = numberList.find(el => el % 2 === 1);
console.log(findRes);

//some
//input:callback
//output: boolean

//foreach
//input:func
//output:undefined

//callback
//input:el
//otput:undefined

numberList.forEach(el => {
  if (el < 0) {
    console.log(el);
  }
});
