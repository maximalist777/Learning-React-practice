import { createStore } from 'redux';
import { color } from './reducers/color';

const store = createStore(color);

console.log(store.getState());
