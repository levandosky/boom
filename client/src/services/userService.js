import {serverGetUser} from '../reducers/UserReducer';


export const getUser = () => {
  return (dispatch) => {
    dispatch(serverGetUser());
  }
}
