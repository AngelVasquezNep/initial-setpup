import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import reducers from "./reducers";
import rootSaga from "./sagas";

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(logger, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
