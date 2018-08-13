import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import sauce from "./sauce";

const rootReducer = combineReducers({
  sauce,
  form: formReducer
});

export default rootReducer;
