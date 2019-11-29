import { SIGN_IN, SIGN_OUT } from './action';

const user = JSON.parse(localStorage.getItem('user'));
const initalState = user ? user : {};

const appReducer = (state = initalState, action) => {
  switch (action.type) {

    case SIGN_IN:
      localStorage.setItem('user', JSON.stringify(action.user));
      return action.user;

    case SIGN_OUT:
      localStorage.removeItem('user');
      return {};

    default:
      return state;
  }
};
export default appReducer;