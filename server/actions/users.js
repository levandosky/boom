const SERVER_LOGIN = 'SERVER/LOGIN';


const usersActions = {
  [SERVER_LOGIN] : (all, user, action) => {
    user.emit('action', {
      type: 'SET_USER',
      payload: {
        currentUser: action.payload,
        id: user.id,
        logged: true
      }
    });
  }
}


export default usersActions;
