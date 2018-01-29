import Users from './users';


const actions = Object.assign(
  Users
);


export default (action, all, user) => {
  console.log('Get new action', action.type);

  const calledAction = actions[action.type];

  if (calledAction) {
    calledAction(all, user, action);
  }
}
