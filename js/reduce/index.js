const transactions = [5, 0, 8, 10, -4, 50, 220, 1203, 556, 41];

//input:callback,init acc(optional)
//output:acc(number)

//callback
//acc,el,index,array(optional)
//acc
transactions.reduce((acc, elem) => {
  console.log('acc = ' + acc);
  console.log(elem);
  return acc + elem;
});
//=============
