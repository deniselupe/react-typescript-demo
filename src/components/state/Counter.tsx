/*
    useReducer Strict Action Types

    In the previous lesson we learned how to type useReducer hook.

    Although we have no errors in the moment we do have a small problem.
    The 'action.type' type in CounterAction is set to string, which means that instead of 'increment', you can
    set an 'action.type' to any string and not trigger any errors. 

    Of course we do have a default case to handle this scenario, but why should we as the developer 
    restrict the 'action.type'?

    Let's learn to do just that. 

    We know that the <Counter /> reducer function is primarily dealing with increment and decrement as 
    the 'action.type'. So what we an do is implement template literals instead of string as the 
    'action.type' type.

        Before:
            interface CounterAction {
                type: string;
                payload: number;
            };

        After: 
            interface CounterAction {
                type: 'increment' | 'decrement';
                payload: number;
            };

    And as soon as we change this we can see that TypeScript will flag an error for JSX like:
        <button onClick={() => dispatch({ type: 'reset', payload: 10 })}>Increment 10</button>

    You would get an error that says:
        "Type 'reset' is not assignable to type 'increment' | 'decrement'"

    Our types for 'action.type' is much more strict now. 

    However, we are not quite done yet with our useReducer hook. 

    Let's say our <Counter /> component should also have a 'reset' functionality. Let's add a 
    'reset' template literal to the CounterAction.type union.

        Before:
        interface CounterAction {
            type: 'increment' | 'decrement';
            payload: number;
        };

        After:
        interface CounterAction {
            type: 'increment' | 'decrement' | 'reset';
            payload: number;
        };

    Next, let's handle the reset type in the 'reducer' function.

        Before: 
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

        After:
        function reducer(state: CounterState, action: CounterAction) {
            switch(action.type) {
                case 'increment':
                    return { count: state.count + action.payload };
                case 'decrement':
                    return { count: state.count - action.payload };
                case 'reset':
                    return initialState;
                default: 
                    return state;
            }
        }

    Finally, let's add a button in the JSX to dispatch the reset event:
        <button onClick={() => dispatch({ type: 'reset' })}>Reset Increment</button>

    When we do this though, we get an error that says:
        "Argument of type '{ type: "reset"; }' is not assignable to parameter of type 'CounterAction'.
        Property 'payload' is missing in type '{ type: "reset"; }' but required in type 'CounterAction'"

    If we take a look in our switch statement, we don't have a payload do we? Well, this is because we don't 
    need a 'action.payload' property to reset the 'state' back to initialState.

    We could pass a 'payload' property for the reset button, and give it a value of 0, and change the Switch case, 
    but if you have a complex state object, it might not be feasible. It is always better to just return the initialState. 

    So how do we tell TypeScript that the 'action.payload' property is not mandatory when dispatching { type: 'reset' }?

    We have to make the 'payload' property an optional type. We declare 'payload' as an optional property in the 
    CounterAction interface definition.

        Before:
            interface CounterAction {
                type: 'increment' | 'decrement' | 'reset';
                payload: number;
            };

        After: 
        interface CounterAction {
            type: 'increment' | 'decrement' | 'reset';
            payload?: number;
        };

    When we do this though, we get another error. Red squiggly lines appear on 
    'action.payload' for the switch statement's 'increment' and 'decrement' cases. 

    The error on these 'action.payload' lines say: "Object is possibly 'undefined'."

    So for 'increment' and 'decrement' cases, TypeScript is now unhappy that we have 
    told it 'payload' is optional, in which case it might be undefined, but we are trying to 
    add it with the 'count' value.

    Now you could fix this the old school JavaScript way by using '(action.payload || 0)', but this 
    doesn't feel nice does it? Personally not recommended.

        function reducer(state: CounterState, action: CounterAction) {
            switch(action.type) {
                case 'increment':
                    return { count: state.count + (action.payload || 0) };
                case 'decrement':
                    return { count: state.count - (action.payload || 0) };
                case 'reset':
                    return initialState;
                default: 
                    return state;
            }
        }

    Here is a good way to type our 'action'.

    We begin by creating a new 'action' type. Let's call it Update Action.
    This UpdateAction type is only responsible for only 'increment' and 'decrement'
    actions. We will also make 'payload' mandatory in UpdateAction type.

        interface UpdateAction {
            type: 'increment' | 'decrement';
            payload: number;
        };

    Let us also create a second action type. Let's call it ResetAction, which is responsible
    only for the reset action. Here we ignore the payload.

        interface ResetAction {
            type: 'reset';
        };

    Finally, we set CounterAction as being equal to UpdateAction or ResetAction. This will require
    making use of the Type Alias syntax and not interface syntax.

        Before:
            interface CounterAction {
                type: 'increment' | 'decrement' | 'reset';
                payload?: number;
            };

        After:
            type CounterAction = UpdateAction | ResetAction;

    TypeScript is now happy once more.

    We now have 'increment' and 'decrement' with a 'payload' property, but 
    'reset' without a 'payload'.

    Now this feature of creating the UpdateAction, ResetAction, and assigning CounterAction = UpdateAction | ResetAction 
    is called Discriminated Unions in TypeScript. This is the recommended approach for typing reducer functions.
*/

import { useReducer } from 'react';

interface CounterState {
    count: number;
};

interface UpdateAction {
    type: 'increment' | 'decrement';
    payload: number;
};

interface ResetAction {
    type: 'reset';
};

type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
    switch(action.type) {
        case 'increment':
            return { count: state.count + action.payload };
        case 'decrement':
            return { count: state.count - action.payload };
        case 'reset':
            return initialState;
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
            <button onClick={() => dispatch({ type: 'reset' })}>Reset Increment</button>
        </>
    );
}

export default Counter;