import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({
          id: Math.random(),
          value: action.result
        })
      });

    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // state.results.splice(id, 1);
      // results: newArray
      const updatedArray = state.results.filter(
        (result) => result.id !== action.resultElId
      );
      return updateObject(state, { results: updatedArray });
    default:
      return state;
  }
};

export default reducer;
