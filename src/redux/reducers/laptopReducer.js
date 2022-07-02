import { BUY_LAPTOP } from "../actions/action-types";

const initialState = {
  numberOfLaptops: 100
};

const laptopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case BUY_LAPTOP:
      return {
        ...state,
        numberOfLaptops: state.numberOfLaptops - 1
      };
    default:
      return state;
  }
};

export default laptopReducer;
