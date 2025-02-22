import { createStore,applyMiddleware } from "redux";
import {thunk} from 'redux-thunk';
import {logger} from 'redux-logger';

import reducer from "./reducer";
const middleware = [thunk, logger];

const store = createStore(reducer,applyMiddleware(...middleware))

export default store