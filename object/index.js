'use strict';

const users = [
  { id: '1', name: 'Bob' },
  { id: '2', name: 'Tom' },
  { id: '3', name: 'Sam' },
  { id: '4', name: 'Tad' },
];
const adminIds = ['1', '3'];

console.log(markAdmins(users, adminIds));
/*function markAdmins(usersList, adminIds) {
  return usersList.map((el, i) => {
    if (adminIds.includes(el.id)) {
      return (el.isAdmin = true);
    } else {
      return (el.isAdmin = false);
    }
  });
}
*/
