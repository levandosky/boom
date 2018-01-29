const TEST_BOARD = 'TEST';

const boardActions = {
  [TEST_BOARD] : (socket) => {
    socket.emit('action', { type: 'TEST_BOARD', payload: {test: 'test'}});
  }
}

export default boardActions;
