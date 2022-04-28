const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
};

const getCustomersList = obj => {
  let copyObj = {};
  for (let key in obj) {
    if (typeof obj[key] == 'object') {
      copyObj[key] = Object.assign({}, obj[key]);
    } else {
      copyObj[key] = obj[key];
    }
  }

  const arrayValues = [...Object.values(copyObj)];
  arrayValues.forEach((value, index) => {
    value.id = Object.keys(copyObj)[index];
  });
  return arrayValues.sort((a, b) => a.age - b.age);
};
console.log(getCustomersList(customers));

function compareObjects(obj1, obj2) {
  const keys = Object.keys(obj1);

  if (keys.length != Object.keys(obj2).length) {
    return false;
  }

  return arr.every(key => obj1[el] === obj2[el]);
}
