import { useReducer } from 'react';

const initialState = {
    count: 0
};

interface CurrentStateType {
    count: number;
};

interface UpdateActionType {
    type: 'increment' | 'decrement';
    payload: number;
};

interface ResetActionType {
    type: 'reset' ;
}

type CounterActionType = UpdateActionType | ResetActionType;

const reducerFunction = (currentState: CurrentStateType, action: CounterActionType) => {
    switch(action.type) {
        case 'increment':
            return { count: currentState.count + action.payload };
        case 'decrement':
            return { count: currentState.count - action.payload };
        case 'reset':
            return initialState;
        default:
            return currentState;
    }
};

const Counter = () => {
    const [state, dispatch] = useReducer(reducerFunction, initialState);

    return (
        <div>
            <h2>Count: {state.count}</h2>
            <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>Increment 1</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>Decrement 1</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset Count</button>
        </div>
    );
};

export default Counter;