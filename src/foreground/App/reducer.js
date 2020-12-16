import { SET_AMOUNT, FETCH_SUCCEEDED } from './constants';

export const initialState = {
  counter: 9,
};

function reducer(state = initialState, action) {
  console.log('inside reducer', state, action);
  switch (action.type) {
    case SET_AMOUNT:
      console.log('set amount')
      return { ...state, counter: action.payload };
    case FETCH_SUCCEEDED:
      console.log('fetch succeeded');
      return { ...state, counter: action.payload };
    default:
      return state;
  }
}

export default reducer;