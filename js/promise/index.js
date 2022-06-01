const formElem = document.querySelector('.login-form');

const serverUrl = 'https://6272c6bfa6522e24ac3e537b.mockapi.io/v1/users';

console.log('formElem created');
console.dir(new Date());

function createUserHandler() {
  event.preventDefault();
  console.log('test');

  //read form

  const user = {
    email: 'valentina@gmail.com',
    name: 'Valentina',
    password: '123',
  };

  //in:string,obj
  //out:promise

  const promise = fetch(serverUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  //input:callback,callback
  //output:promise

  //callback
  //input:result of prev promise
  //output:any
  promise
    .then(res => {
      //input:none
      //output:promise
      return res.json();
    })
    .then(body => {
      console.log(body);
    });
}

formElem.addEventListener('submit', createUserHandler);
console.log('Listener created');
