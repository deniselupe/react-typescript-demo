/*
    useReducer Hook

    For this example, we have created a file Counter.tsx.

    Within the state/ folder from before. This file contains a simple count component.

    To maintain the count state and updations to the counter value, we have included the useReducer 
    hook.

    We have the 'initialState', which is an object with property 'count' set to 0.
    Then we have the 'reducer', which is responsible for updating the state. The 'reducer' accepts 
    'state' and 'action' as parameteres, and based on the 'action.type', updates the 'count' value.

    If 'action.type' is 'increment', 'count' is incremented by a 'action.payload' specified in the dispatch()
    parameter (i.e., { type: 'increment', payload: 10 }). If 'action.type' is decrement, we substract 'action.payload' from 
    the current 'count' value. Default case, we return the state as-is.

    Next, the <Counter /> component itself. We call the useReducer hook, passing in the 'reducer' function and the 'initialState', 
    which returns the 'state' and dispatch() for use in our component. 

    In the JSX we display the count value, and we also have two buttons to update the count value. 
    The first button is an 'Increment 10' button, which onClick dispatches an action of { type: 'increment', payload: 10 }.
    Similarly, we have the 'Decrement 10' button, which onClick dispatches an action of { type: 'decrement', playload: 10 }.
    A basic counter component.

    Let's now understand how to go about typing the useReducer hook used in this component. 

    Now where do we start? Well that is simple because TypeScript tells us where to start:

        function reducer(state, action) {
            switch(action.type) {
                case 'increment':
                    return { count: state.count + action.payload };
                case 'decrement':
                    return { count: state.count - action.payload };
                default: 
                    return state;
            }
        }

    We see the red squiggly line in our 'reducer' function's 'state' and 'action' parameters. We need to specify the type of 
    'state' as well as 'action'. Let's start with the 'state'. 'state' is an object with one property, 'count', whose 
    value is a number. So we can create an interface to define the type for the state:
    
        interface CounterState {
            count: number;
        };

    And then we specify that 'reducer' function's 'state' parameter is of type 'CounterState'.
    This fixes the first squiggly line on 'reducer' function's 'state' parameter.

        Before:
        function reducer(state, action) {
            switch(action.type) {
                case 'increment':
                    return { count: state.count + action.payload };
                case 'decrement':
                    return { count: state.count - action.payload };
                default: 
                    return state;
            }
        }

        After:
        function reducer(state: CounterState, action) {
            switch(action.type) {
                case 'increment':
                    return { count: state.count + action.payload };
                case 'decrement':
                    return { count: state.count - action.payload };
                default: 
                    return state;
            }
        }
    
    Let's move on to the second 'reducer' function parameter 'action'. If you take a look at 
    the 'reducer' function body, we can sort of figure out the structure of the 'action' parameter. 
    If seems that the 'action' parameter is an object with two object properties 'type' (which seems to be a string)
    and 'payload' (which seems to be a number).

    Let's create an interface for the 'action' parameter and see if this makes the error go away:

        interface CounterAction {
            type: string;
            payload: number;
        };

    Now let's set the type of 'reducer' function's 'action' parameter to CounterAction interface.

        Before:
        function reducer(state: CounterState, action) {
            switch(action.type) {
                case 'increment':
                    return { count: state.count + action.payload };
                case 'decrement':
                    return { count: state.count - action.payload };
                default: 
                    return state;
            }
        }

        After:
        function reducer(state: CounterState, action: CounterAction) {
            switch(action.type) {
                case 'increment':
                    return { count: state.count + action.payload };
                case 'decrement':
                    return { count: state.count - action.payload };
                default: 
                    return state;
            }
        }

    TypeScript is now happy. And guess what? This is all we have to do to type the 
    userReducer hook. This is again because of Type Inference. In the <Counter /> component if 
    you hover over 'state', you can see that TypeScript inferes that 'state' is of type 'CounterState', 
    and if you hover over 'dispatch()' the type is React.Dispatch<CounterAction>.

    TypeScript figured this out from the 'reducer' function that we passed into the useReducer hook. 
    As mentioned before, this is an example of how TypeScript requires your help only when it is absolutely 
    necessary. Other times TypeScript hardly needs your intervention, and will figure out the types on its own.

    Let's make sure that Type Checking works as expected. On the first button click, if we dispatch an action of 
    boolean type, TypeScript gives us an error. A red squiggly line shows on the 'type' property and the error message says: 
        "Type 'boolean' is not assignable to type 'string'.ts(2322) Counter.tsx(137, 5): The expected type comes from 
        property 'type' which is declared here on type 'CounterAction'"

        <button onClick={() => dispatch({ type: false, payload: 10 })}>Increment 10</button>

    And if we try to change the 'payload' propertie's value to the string '10', we get the following error for the 'payload' property:
        "Type 'string' is not assignable to type 'number'.ts(2322) Counter.tsx(143, 5): The expected type comes from property 
        'payload' which is declared here on type 'CounterAction'"

        <button onClick={() => dispatch({ type: 'increment', payload: '10' })}>Increment 10</button>

    
    We have successfully typed the useReducer hook. And on a side note, if you ever come across the need to pass in state
    and dispatch as props to a component, simply hover over 'state' or 'dispatch', copy the type which VSCode shows in the 
    tooltip, and use it as the prop type for the component receiving 'state' and 'dispatch' as props.

    Alright, so our code here works fine, but let me tell you that we can be more strict when it comes 
    to the 'action' type of the reducer function. Let's this discuss that further in the next lesson.
*/

import { useReducer } from 'react';

interface CounterState {
    count: number;
};

interface CounterAction {
    type: string;
    payload: number;
};

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
    switch(action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload };
        default: 
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>Increment 10</button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>Decrement 10</button>
        </>
    );
}

export default Counter;