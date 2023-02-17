/*
    useState Hook

    To understand how to write useState hooks with TypeScript, let's start out
    with a <LoggedIn /> component that has 2 buttons and an output.

    There will be a button that the user can click to set useState's 'isLoggedIn' 
    to true, and another button to set the value to false.

    Based on whether isLoggedIn's value, we will render the text:
        - User is logged in
        - User is logged out

    So what needs to be changed here for TypeScript?
        - Nothing. TypeScript is smart enough to inference what the data type of 
          [isLoggedIn, setIsLoggedIn] is. When you assign a value to a variable on initial declaration, 
          TypeScript will assume that the data type for the variable must be the same as it's iniital value.
          In this case, we assigned the initial value of false to isLoggedIn, and therefore you can only 
          update isLoggedIn to boolean values going forward. If you tried to update the value of isLoggedIn 
          to a different type, like a number for example, TypeScript will throw an error and say that you can 
          only set isLoggedIn to a boolean type. The data type of the setIsLoggedIn function however is special,
          as it is of type React.Dispatch<React.SetStateAction<boolean>>. The React.Dispatch and 
          React.SetStateAction types are provided by React's type library.

    This example here is a simple one.

    But what about more complex types? Like let's say that you don't know the value of a state variable initially, 
    but would like to give it a value in the future? This will be covered in the next lesson.
*/

import { useState } from 'react';

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
        </div>
    );
};