import * as Types from "../types/counterAsync";

export const actionIncrementAsync = props => {
  return {
    type: Types.INCREMENT_ASYNC
  };
};

export const actionDecrementAsync = props => {
  return {
    type: Types.DECREMENT_ASYNC
  };
};
