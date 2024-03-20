const root = GetResourcePath(GetCurrentResourceName());
const fs = require('node:fs')

// wrong
fs.readFile(`${root}/test.txt`, { encoding: 'utf8' }, (err, data) => {
  emitNet('chat:addMessage', -1, { // this call will error out due to thread affinity
    args: [ data ]
  });
});

// right
fs.readFile(`${root}/test.txt`, { encoding: 'utf8' }, (err, data) => {
  setImmediate(() => { // the callback will be called next game tick
    emitNet('chat:addMessage', -1, {
      args: [ data ]
    });
  });
});
