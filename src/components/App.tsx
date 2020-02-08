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
    fetchTodos: Function
    deleteTodo: typeof deleteTodo;
}
const [fetching, setFetching] = React.useState(false)
React.useEffect (() =>{
    setFetching(false)
})

class _App extends React.Component<AppProps> {
    onButtonClick = (): void => {
        this.props.fetchTodos();
        setFetching(true)
    };



    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return (
            <div onClick={()=>this.onTodoclick(todo.id)} key={todo.id}>{todo.title}</div>
            )
        });
    }

    onTodoclick = (id: number): void => {
        this.props.deleteTodo(id)
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>Fetch</button>
                {this.renderList()}
            </div>
        );
    }
}

const mapStatetoProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos };
};

export const App = connect(mapStatetoProps, { fetchTodos, deleteTodo })(_App);
