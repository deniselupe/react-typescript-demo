/*
    useState Future Value

    This lesson we will cover how to write useEffects in TypeScript
    when you don't know what the initial value of a state variable is and would
    like to give it a value in the future.

    This User component has two buttons login and logout whose handlers are to be 
    defined once again. 

    We also have a <div> tags which are supposed to render the logged in user's name
    and email address.

    Above the component we have defined the type of the logged in user. It is an object 
    with name and email as properties.

    Within the component we have also invoked the useState hook. 'user' is the state varaible and 'setUser' 
    is the setter function.

    Let us now finish this component and userstand how to make it work with TypeScript.

    When a user visits our website they are not logged in by default. 
    When that is the case, a very common thing to do is initialize useState with null.

    Let's do the same.

    We should also set the users state to null when the user logs out so.

    When the user clicks on the login button, we want to set the name and email properties.
    Of course those values would be provided by the user, but for our example, let's hardcode it.

    const handleLogin = () => {
        // Normally the name and email props will be set by the user, but for this example we'll hardcode it
        setUser({
            name: 'Denise',
            email: 'denise@example.com'
        });
    };

    However, setting the prop this way would cause TypeScript to give us an error that says:
    "Argument of type '{ name: string; email: string; }' is not assignable to parameter of type '(prevState: null) => null'."

    So what has happened here is that TypeScript has inferred the type of 'user' to be null because of the
    initial value that we have specified. So now when we try to assign user an object of type AuthUser, 
    TypeScript is not happy. It is telling us "Hey, you told me that the user is of type null, so I can't
    let you pass it a non-null value to the setter function."

    How to pacify TypeScript:
        - We need to specify the type for the useState hook and not rely on TypeScript inference.
          We specify state type by including angle brackets after the useState keyword. Within the angle 
          brackets, we specify that they type can be either null, or, AuthUser. You'll specify this in the 
          angle brackets using a Union.

          Before:
          const [user, setUser] = useState(null);

          After:
          const [user, setUser] = useState<AuthUser | null>(null);

          TypeScript is now happy once again.
*/

import { useState } from 'react';

interface AuthUser {
    name: string;
    email: string;
};

export const User = () => {
    // The initial value of user will be null, but in the future can be changed to an AuthUser type
    const [user, setUser] = useState<AuthUser | null>(null);

    const handleLogin = () => {
        // Normally the name and email props will be set by the user, but for this example we'll hardcode it
        setUser({
            name: 'Denise',
            email: 'denise@example.com'
        });
    };

    const handleLogout = () => {
        // In the handler log out function we call setUser passing in null
        setUser(null);
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            {/*
                We can now use autocomplete to interpolate user.name and user.email. If you use
                autocomplete, you will see that the editor will give it the ?. optional chaining 
                operator. 

                And this is because the user can be null. So only if user exists, access the name 
                and email properties.

                Also if you try to get rid of this optional chaining, TypeScript is going to complain 
                again with: "Object is possibly null", so you always have to check if the object 
                exists before accessing properties.

                The <User /> component is now complete.
            */}
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    );
};