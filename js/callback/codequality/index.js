'use strict';
//bad
/*function withdraw(clients, balances, client, amount) {
for (let i = 0; i < clients.length; i++) {
    if (clients[i] === client && balances[i] >= amount) {
      return (balances[i] -= amount);
    }
    if (clients[i] === client && balances[i] < amount) {
      return -1;
    }
  }
}*/
//norm
//const withdraw = (clients, balances, client, amount) => {
// const balance = balances[clients.indexOf(client)];
// return balance > amount ? balance - amount : -1;
//};

//test data
//const users = ['Anna', 'John', 'User']
//const balances = [1400.87, -6]
//console.log(withdraw(users, balances, 'John', 'User', 50);
//console.log(balances)

//norm
/*const withdraw = (clients, balances, client, amount) => {
  const clientIndex = clients.indexOf(client);

  if (amount > balances[clientIndex]) {
    return -1;
  }
  balances[clientIndex] -= amount;
  return balances[clientIndex];
};*/

//bad
/*function withdraw(clients, balances, client, amount) {
  for (let i = 0; i < clients.length; i++) {
    if (clients[i] === client && balances[i] >= amount) {
      return (balances[i] -= amount);
    } else if (clients[i] === client && balances[i] < amount) {
      return -1;
    }
  }
}*/

//norm

/*const withdraw = (clients, balances, client, amount) => {
  const indexClient = clients.indexOf(client);
  return balances[indexClient] <= amount ? -1 : balances[indexClient] - amount;
};*/

//good

/*function withdraw(clients, balances, client, amount) {
  let index = clients.indexOf(client);

  if (balances[index] >= amount) {
    return (balances[index] -= amount);
  }

  return -1;
}*/

//bad
const withdraw = (clients, balances, client, amount) => {
  let result = 0;
  clients.forEach(function (name, index) {
    if (name.includes(client) && balances[index] >= amount) {
      result = balances[index] - amount;
    } else if (name.includes(client) && balances[index] < amount) {
      result = -1;
    }
  });
  return result;
};
