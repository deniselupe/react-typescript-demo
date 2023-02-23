/*
    useRef

    Let's now take a look at the second scenario to manage mutable refs with the useRef hook.

    This here is a simple timer component.

    We have a timer state variable to keep the number of seconds.
    We then create areference and store it in a constant called intervalRef.
    When the component mounts, we invoke the setInterval function to increase the timer
    value by 1 every second. The return value of setInterval is stored in intervalRef.current.

    So we are mutating the reference value.

    To make sure the timer is cleared when the component unmounts, we call the stopTimer()
    function. Inside stopTimer() we call clearInterval() passing in intervalRef.current as the argument
    which holds the interval ID. We also added a button to stop the timer.

    Let's now fix the TypeScript errors. There is an error on intervalRef.current. Hovering over the error
    inside useEffect for 'intervalRef.current', we see error "Type number is not assignable to type null". 

    Now if you're not aware, setInterval returns a numeric value which is the ID of that interval. 
    However on initialization of useRef we told TypeScript that useRef is of type null only. 
    So let's change useRef so that it's of type number or null.

        Before:
            const intervalRef = useRef(null);

        After: 
            const intervalRef = useRef<number | null>(null);

    And with that, our first error is fixed. 

    The second 'intervalRef.current' error is inside the stopTimer function definition.
    Hovering over this error we see "Argument type of number | null is not assignable to
    parameter of type number | undefined". 

    Now we could change the useRef's initial value from null to undefined, and that would resolve
    the error, or, we can leave it at null and make the null check inside the stopTimer() function.

        Before:
            const stopTimer = () => {
                window.clearInterval(intervalRef.current);
            };

        After:
            const stopTimer = () => {
                if (intervalRef.current) {
                    window.clearInterval(intervalRef.current);
                }
            };
        
    TypeScript is happy once again. So this is pretty much how you type
    the useREf hook. For DOM Reference, specify the DOM element type. For 
    Mutable references, specify the appropriate type. 
*/

import { useState, useRef, useEffect } from 'react';

function MutableRef() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef<number | null>(null);

    const stopTimer = () => {
        if (intervalRef.current) {
            window.clearInterval(intervalRef.current);
        }
    };

    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);

        return () => {
            stopTimer();
        };
    }, []);

    return (
        <div>
            HookTimer - {timer} - 
            <button onClick={() => stopTimer()}>Stop Timer</button>
        </div>
    );
}

export default MutableRef;