const message = 'Test';
const weight = 55;

function run() {
  console.log('RUN');
}
// GLOBAL LEX ENV
// {
//   'enviromentRecord': {
//     'message': 'Test',
//     'weight': 55,
//     'run': {
//         console.log('RUN');
//      },
//      'createMessenger': { ..},
//      'messanger': ....
//   },
//   'outherLexicalEnv': null
// }

/*if (false) {
  function sum(a, b) {
    return a + b;
  }
}
sum(5, 10);*/

// createMessenger()
// GLOBAL LEX ENV
// {
//   'enviromentRecord': {
//     'message': 'Test',
//     'sender': 55,
//     ' sendMessage':
//      'setSender': { ..},
//      'setMessage': ....
//   },
//   'outherLexicalEnv': null
// }

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

const messanger = createMessenger();
messanger.sendMessage('Ann');
run();
