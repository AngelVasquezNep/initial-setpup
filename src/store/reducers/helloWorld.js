import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = {
  message: "Hola Papitas",
  result: 0,
};

const { Types, Creators } = createActions(
  {
    changeMessage: ["message"],
    sum: ['a', 'b']
  },
  { prefix: "HELLO_WORLD_" }
);

const changeMessage = (state, { message }) => {
  return {
    ...state,
    message
  };
};

const sum = (state, { a, b }) => {
  return {
    ...state,
    result: a + b
  };
};


const HANDLERS = {
  [Types.CHANGE_MESSAGE]: changeMessage,
  [Types.SUM]: sum,
};

export const hellosActionsCreate = Creators;
export const helloActionsType = Types;

export default createReducer(INITIAL_STATE, HANDLERS);
