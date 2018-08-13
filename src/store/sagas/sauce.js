import { takeLatest } from "redux-saga/effects";
import { sauceActionsCreate, sauceActionsType } from "../reducers/sauce";

export function* sauceSaga() {
  yield takeLatest(sauceActionsType.REDUX_SAUCE, sauceActionsCreate.reduxSauce);
}
