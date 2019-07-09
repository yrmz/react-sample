import * as Types from "../types/counter";

export const actionIncrement = props => {
  return {
    type: Types.INCREMENT
  };
};

export const actionDecrement = props => {
  return {
    type: Types.DECREMENT
  };
};
