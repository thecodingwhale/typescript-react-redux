import { combineReducers } from 'redux';
import { todosReducers } from './todos';
import { Todo } from '../actions/todos';

export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({
  todos: todosReducers
});
