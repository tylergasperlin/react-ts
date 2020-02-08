import { Todo, Action, ActionTypes } from '../actions';
//matches actions index.ts
//setup types alias and and types enum you set up an implicit type guard 
// you know exactly what type of object you are working with 
export const todosReducer = (state: Todo[] = [], actions: Action) => {
    //switch statement acts as a type guard 
    switch (actions.type) {
        case ActionTypes.fetchtodos:
            return actions.payload;
        case ActionTypes.deleteTodo:
            return state.filter((todo: Todo) => todo.id !== actions.payload);
        default:
            return state;
    }
};
