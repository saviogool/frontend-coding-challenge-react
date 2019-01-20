/* ************************************* */
/* ********       IMPORTS       ******** */
/* ************************************* */
import promiseMiddleware from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import reducers from './reducers';

const { logger } = require('redux-logger');

/* ************************************* */
/* ********      VARIABLES      ******** */
/* ************************************* */
const composeEnhancers = composeWithDevTools({});

const middlewares = [];
middlewares.push(promiseMiddleware());
middlewares.push(thunk);
middlewares.push(logger);

/* ************************************* */
/* ********  PRIVATE FUNCTIONS  ******** */
/* ************************************* */

/* ************************************* */
/* ********       EXPORTS       ******** */
/* ************************************* */
export default createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)));
