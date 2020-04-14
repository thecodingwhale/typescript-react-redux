import { Todo, FetchTodosAction, ActionTypes } from '../actions';

export const todosReducers = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
