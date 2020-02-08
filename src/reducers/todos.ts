import { Todo, FetchTodosAction } from '../actions';
import { ActionTypes } from '../actions/types';

//matches actions index.ts
export const todosReducer = (state: Todo[] = [], actions: FetchTodosAction) => {
    switch (actions.type) {
        case ActionTypes.fetchtodos:
            return actions.payload;
        default:
            return state;
    }
};
