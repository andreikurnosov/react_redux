import * as actionTypes from '../actions/actionTypes';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: Math.random(),
          value: action.result
        })
      };
    case actionTypes.DELETE_RESULT:
      // const id = 2;
      // const newArray = [...state.results];
      // state.results.splice(id, 1);
      // results: newArray
      const updateArray = state.results.filter(
        (result) => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updateArray
      };
    default:
      return state;
  }
};

export default reducer;
