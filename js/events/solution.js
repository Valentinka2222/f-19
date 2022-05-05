//bad
/*const changeTaskStatus = event => {
  const taskId = Number(event.target.dataset.id);
  const currentTask = tasks.find(task => task.id === taskId);
  currentTask.done = !currentTask.done;
  renderTasks(tasks);
};

listElem.addEventListener('click', changeTaskStatus);

const addTasks = () => {
  const inputElem = document.querySelector('.task-input');
  const obj = {};
  const newInput = inputElem.value;

  if (!newInput) {
    return;
  }

  obj.text = newInput;
  obj.done = false;
  obj.id = tasks.length + 1;
  tasks.unshift(obj);
  inputElem.value = '';
  renderTasks(tasks);
};

buttonELem.addEventListener('click', addTasks);*/

//good
/*const changeTaskStatus = event => {
  const taskId = Number(event.target.dataset.id);
  const currentTask = tasks.find(task => task.id === taskId);
  currentTask.done = !currentTask.done;
  renderTasks(tasks);
};

listElem.addEventListener('click', changeTaskStatus);

const createTaskhandler = () => {
  const inputElem = document.querySelector('.task-input');

  const newInput = inputElem.value;

  if (!newInput) {
    return;
  }

  tasks.unshift({
    text: newInput,
    done: false,
    id: tasks.length + 1,
  });
  inputElem.value = '';
  renderTasks(tasks);
};

buttonELem.addEventListener('click', createTaskhandler);*/

const tasks = [
  { text: 'Buy milk', done: false, id: 1 },
  { text: 'Pick up Tom from airport', done: false, id: 2 },
  { text: 'Visit party', done: false, id: 3 },
  { text: 'Visit doctor', done: true, id: 4 },
  { text: 'Buy meat', done: true, id: 5 },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  listElem.innerHTML = '';
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.setAttribute('data-id', id);

      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const createBtn = document.querySelector('.btn');

function createTaskHandler() {
  const inputElem = document.querySelector('.task-input');
  if (!inputElem.value) {
    return;
  }
  const updatedTask = {
    text: inputElem.value,
    done: false,
    id: Date.now(),
  };

  tasks.push(updatedTask);
  inputElem.value = '';

  renderTasks(tasks);
}

createBtn.addEventListener('click', createTaskHandler);

const updatedTask = event => {
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }
  const taskId = +event.target.dataset.id;
  const newTasks = tasks.find(task => task.id === taskId);

  newTasks.done = !newTasks.done;
  renderTasks(tasks);
};
listElem.addEventListener('click', updatedTask);

// put your code here
