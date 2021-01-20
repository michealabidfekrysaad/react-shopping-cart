import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchSagas } from "./sagas/Index";
import reducers from "./reducers/Index";

const saga = createSagaMiddleware();

// for redux devtool browser
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(saga));
const store = createStore(reducers, enhancer);
saga.run(watchSagas);

export default store;

