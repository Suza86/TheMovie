import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunkMiddlware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import movieBrowserReducer from './modules/movie-browser/movie-browser.reducers';


const rootReducer = combineReducers({
  movieBrowser: movieBrowserReducer
});


const loggerMiddleware = createLogger();

const store = createStore(
  // reducer
  rootReducer,
  // preloadedState
  undefined,

  compose(
    applyMiddleware(
      thunkMiddlware,
      loggerMiddleware
    )
  )
);

export default store;