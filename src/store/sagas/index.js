import { all } from "redux-saga/effects";
import { sauceSaga } from "./sauce";

export function* holaSaga() {
  yield console.log("Hola Init Saga");
}
export default function* rootSaga() {
  yield all([holaSaga(), sauceSaga()]);
}
