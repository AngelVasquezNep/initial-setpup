import { createActions, createReducer } from "reduxsauce";

const INITIAL_STATE = {
  msg: "HOLA_SAUCE",
  secondParam: ""
};

const { Types, Creators } = createActions(
  {
    reduxSauce: ["msg", "secondParam"]
  },
  { prefix: "SAUCE_" }
);

const reduxSauce = (state = INITIAL_STATE, { msg, secondParam }) => {
  return {
    ...state,
    msg,
    secondParam
  };
};

const HANDLERS = {
  [Types.REDUX_SAUCE]: reduxSauce
};

export const sauceActionsCreate = Creators;
export const sauceActionsType = Types;

export default createReducer(INITIAL_STATE, HANDLERS);
