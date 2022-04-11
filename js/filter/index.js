//input: arr,callback
//output:arr

//callback
//el
//boolean

//algo
//1.iterate arr
//2/apply callback to el
// if
const filterArr = num => {
  return num > 1;
};

const filterArrayElements = (arr, callback) => {
  const res = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (callback(arr[index])) {
      res.push(arr[index]);
    }
  }
  return res;
};

//test data
const res = filterArrayElements([1, 2, 3, 4], filterArr);

console.log(res);
