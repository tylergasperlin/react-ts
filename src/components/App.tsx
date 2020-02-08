import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../actions';
import { StoreState } from '../reducers';

interface AppProps {
    todos: Todo[];
    //since we use fetchTodos with redux thunk =
    //react-redux does not know what a redux thunk type action is and there are no solutions
    //ideally we could say this:
    //fetchTodos: typeof fetchTodos;
    //instead we will just call fetchTodos a function
    fetchTodos: Function;
    deleteTodo: typeof deleteTodo;
}

const _App = (props: AppProps) => {
    const [fetching, setFetching] = React.useState(false);
    React.useEffect(() => {
        setFetching(false);
    },[props.todos]);

    const onButtonClick = (): void => {
        props.fetchTodos();
        setFetching(true);
    };

    const onTodoclick = (id: number): void => {
        props.deleteTodo(id);
    };

    const renderList = (): JSX.Element[] => {
        return props.todos.map((todo: Todo) => {
            return (
                <div onClick={() => onTodoclick(todo.id)} key={todo.id}>
                    {todo.title}
                </div>
            );
        });
    };

    return (
        <div>
            <button onClick={onButtonClick}>Fetch</button>
            {fetching? 'LOADING' : null}
            {renderList()}
        </div>
    );
};

const mapStatetoProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos };
};

export const App = connect(mapStatetoProps, { fetchTodos, deleteTodo })(_App);
