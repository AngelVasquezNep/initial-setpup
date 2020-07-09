import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import sauce from "./sauce";
import helloWorld from "./helloWorld";

const rootReducer = combineReducers({
  sauce,
  helloWorld,
  form: formReducer
});

export default rootReducer;
