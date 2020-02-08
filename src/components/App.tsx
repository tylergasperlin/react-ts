import React from 'react';
import {connect} from 'react-redux'
import {Todo, fetchTodos} from '../actions'
import {StoreState} from '../reducers'

interface AppProps{
    todos: Todo[];
    fetchTodos(): any;
}

class _App extends React.Component<AppProps> {
    componentDidMount(){
        this.props.fetchTodos()
    }

    render() {
        return <div>Hi there</div>;
    }
}

const mapStatetoProps = ({todos}: StoreState): {todos: Todo[]} => {
    return {todos};
}

export const App = connect(mapStatetoProps, {fetchTodos})(_App)