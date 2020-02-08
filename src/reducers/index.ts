import {combineReducers} from 'redux'
import { todosReducer } from './todos'
import {Todo} from '../actions'

//describes state within redux store
export interface StoreState {
    todos: Todo[]
}

//redux looks at object we pass into combine reducers 
export const reducers = combineReducers<StoreState>({
    //typescript makes sure that we return a value of type array of Todos
    //We want storestate to return an array of Todos
    //so now if the todosReducer returns a number instead of an array of Todo we get a type error here
    todos: todosReducer
});
