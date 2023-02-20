import './App.css';
import Counter from './components/state/Counter';

/*
    useReducer Hook

    In the previous few lessons, we learned how to work with TypeScript and 
    the useState hook. useState hook is great for simple state values. However, if you have 
    complex state logic where the next state depends on the previous state, useReducer is preferrable.

    Let's learn how to use TypeScript with useReducer.
*/

function App() {
    return(
        <div className='App'>
            <Counter />
        </div>
    );
}

export default App;
