/*
    useState Type Assertion

    In the previous lesson we learned how to type the userState hook
    when the initial value type is different from the future value type.

    We specified that the state type can be null or AuthUser.

    But when we do specify null as one of the possible values, we always have 
    to make a check in our code that 'user' is not null before accessing the 
    'name' and 'email' properties.

    This of course is the right thing to do, but sometimes, you, as the developer
    would know that 'user' would be set to the correct value very soon after the component 
    mounts, and will never be null in the future.

    For example, you would set the 'user' in the useEffect hook, and let's also assume that you
    cannot logout. In such cases, you can, if you want to, use Type Assertion to let TypeScript 
    know that 'user' is always of type AuthUser and wont be null. 

    For Type Assertion, we use the 'as' keyword. So instead of specifying <AuthUser | null> 
    for the useState type, we can specify just <AuthUser>, and for the initial value we set an
    empty object 'as' AuthUser.

    Before:
    const [user, setUser] = useState<AuthUser | null>(null);

    After:
    const [user, setUser] = useState<AuthUser>({} as AuthUser);

    This will now allow us to access the 'name' and 'email' properties in the JSX 
    without a check for null. 

    So now you can do the following without the optional chaining operator:

    Before:
    <div>User name is {user?.name}</div>
    <div>User email is {user?.email}</div>

    After:
    <div>User name is {user.name}</div>
    <div>User email is {user.email}</div>
*/

import { useState } from 'react';

interface AuthUser {
    name: string;
    email: string;
};

export const User = () => {
    /*
        The initial value of user is an empty object, but we as the developer know that it will very soon be set to the correct value
        
        We set the empty as type AuthUser because we trust that 'user' will never be set to null
        
        Basically we are saying "We know better than the compiler." We are in fact lying to TypeScript that empty object is of type AuthUser
        
        If you're confident that user will be initialized soon after set up, and will always have a value after, you can use
        Type Assertion like you see here. If not, it's better to leave it like before. 

        Type Assertion is something you could potentially come across in a code base, so make sure you 
        aware of it.
    */ 
    const [user, setUser] = useState<AuthUser>({} as AuthUser);

    const handleLogin = () => {
        // Normally the name and email props will be set by the user, but for this example we'll hardcode it
        setUser({
            name: 'Denise',
            email: 'denise@example.com'
        });
    };

    // In this example we are commenting out handleLogout as we do not plan to set 'user' to null
    // const handleLogout = () => {
    //     // In the handler log out function we call setUser passing in null
    //     setUser(null);
    // };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    );
};