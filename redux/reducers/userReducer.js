import {SETUSERAGE, SETUSERNAME} from '../store/actionType';

const initialState = {
  name: '',
  age: 0,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETUSERNAME:
      return {...state, name: action.payload};
    case SETUSERAGE:
      return {...state, age: action.payload};
    default:
      return state;
  }
};
