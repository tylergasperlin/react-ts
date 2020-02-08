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


ReactDOM.render(<App color='red' />, document.querySelector('#root'));
