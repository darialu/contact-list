import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const logMiddleware = store => next => action => {
  console.log(action, store.getState());
  next(action);
};

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logMiddleware),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;



