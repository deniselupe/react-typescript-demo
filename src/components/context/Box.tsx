/*
    useContext and TypeScript

    Step 4: Consume the theme from ThemeContext.tsx

    This completes our example usage of context with TypeScript. 
    And we got it done without having to write any context-specific TypeScript
    code. Like mentioned before, TypeScript and inference will try to do all the work 
    for you whenever possible. 


    This is an easy example due to us knowing the context value when creating the context.

    However, you will come across scenarios where the context value is not known initially
    and gets set at a later point in time. Let's learn how to deal with that in the next
    lesson.
*/

import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Box() {
    const theme = useContext(ThemeContext);
    return <div style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}>Theme Context</div>;
}

export default Box;