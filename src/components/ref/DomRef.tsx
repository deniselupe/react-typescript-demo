/*
    useRef Hook

    This file contains a component where we use the ref hook to focus
    an input element when the component mounts.

    We first invoke the useRef hook passing in null as the initial value. 
    The return value is stored in a constant called inputRef. We set this 
    constant equal to teh ref prop on the input element.

    We then access the DOM element in the useEffect hook to 
    focus the input. Pretty straightfoward use case which you might have seen
    when learning about the useRef hook.

    Of course though, you will see that there is a red squiggly line on 
    'inputRef.current.focus()'. If you hover over the error you can see
    that TypeScript is complaining that "Object is possibly null". 

    So we can't call .focus() on null. To fix this we can simply check for 
    null using optional chaining.

        Before:
            useEffect(() => {
                inputRef.current.focus();
            }, []);

        After:
            useEffect(() => {
                inputRef.current?.focus();
            }, []);
    
    However, when we do that, we get a new error on the '.focus()' portion.
    The error says "Property 'focus' does not exist on type 'never'"

    Now this has to do with the reference type. And to fix this we have to specify the
    type of the DOM element. So since input is the HTML element we are referencing, 
    after useRef add type <HTMLInputElement>.

        Before:
            const inputRef = useRef(null);

        After:
            const inputRef = useRef<HTMLInputElement>(null);

    And when we finally do this change, TypeScript is happy.

    Now there are different types of HTML elements, so pick the one that
    suits your requirement. A bonus tip here is if you're sure your reference 
    is never null when you access it, you can add the non-null assertion 
    when invoking useRef. So after null, add the exclamation sign. This 
    allows us to call .focus() without optional chaining.

        Before:
            const inputRef = useRef<HTMLInputElement>(null);

        After:
            const inputRef = useRef<HTMLInputElement>(null!);

    So these are some of the points to keep in mind when using the useRef hook
    for DOM references. 
*/

import { useRef, useEffect } from 'react';

function DomRef() {
    const inputRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    );
}

export default DomRef;