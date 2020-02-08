import React from 'react';
import ReactDOM from 'react-dom';

interface AppProps {
    color?: string;
}


const App = (props: AppProps): JSX.Element => {
    let [counter, setCounter] = React.useState(0)

    const onIncrement = (): void => {
        setCounter( counter + 1)
    }
    
    const onDecrement = (): void => {
        setCounter(counter - 1)
    }
    
    return (
        <div>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            {counter}
        </div>
    ) 
}

// class App extends React.Component<AppProps> {

//     state = {counter: 0}

//     onIncrement = (): void => {
//         this.setState({counter: this.state.counter + 1})
//     }

//     onDecrement = (): void => {
//         this.setState({counter: this.state.counter - 1})
//     }

//     render() {
//         return(

//         )
//     }
// }

ReactDOM.render(<App color='red' />, document.querySelector('#root'));
