import { Todo, FetchTodosAction, Action, ActionTypes} from '../actions';
//matches actions index.ts
export const todosReducer = (state: Todo[] = [], actions: Action) => {
    switch (actions.type) {
        case ActionTypes.fetchtodos:
            return actions.payload;
        default:
            return state;
    }
};
