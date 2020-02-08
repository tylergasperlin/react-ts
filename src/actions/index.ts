import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

interface FetchTodosAction {
    type: ActionTypes.fetchtodos;
    payload: Todo[];
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
    return (dispatch: Dispatch) => {
        return async (dispatch: Dispatch) => {
            const response = await axios.get<Todo[]>(url);
            //using type annotation ensures you pass in the correct types and properties
            //this is optional
            dispatch<FetchTodosAction>({
                type: ActionTypes.fetchtodos,
                payload: response.data
            });
        };
    };
};
