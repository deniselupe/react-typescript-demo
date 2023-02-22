/*
    useContext Future Value

    We also have a second file created called UserContext.tsx.

    Initially, this file only contains the type of the Authenticated User. 
    It is an object with name and email as string values. 

        interface AuthUser {
            name: string;
            email: string;
        };

    Let us know finish the UserContext code and make it work with TypeScript.


    Step 1: 
    Create a new context
    Now initially we want to set UserContext to null as we don't yet know what 
    the value of this context is outside a component. Now that we have the context..

        import { createContext } from 'react';
        export const UserContext = createContext(null);

    Step 2:
    Create the component that provides the UserContext value. Let's begin by defining 
    this new component's prop type, and then by defining the provider component itself.

        interface UserContextProviderProps {
            children: React.ReactNode;
        };

    When creating this UserContext provider component, let's think carefully about 
    what this component is supposed to do... 

    Typically a UserContext is for managing the authenticated state of a user. 

    In other words, a user should be able to login and logout of your application. 

    If they're logged in, the context should hold user information like name, email address, etc.

    For our example we want the context to provide a function which can be used to login and logout, 
    as well as an object that is of type AuthUser if they're logged in.

    So for the first part of this provider component we are going to maintain a user state whose value will be 
    null if the user is logged out and will be an object if the user is logged in. We already 
    learned how to type the useState hook, so let's dive straight into this by importing { useState }.
    See comments within <UserContextProvider> below to understand the rest of Step 2.

    Step 3:
    Specify the type of UserContext
    We are almost done with defining our provider component, but we are getting an error
    on the <UserContext.Provider> 'value' prop.

        export const UserContextProvider = ({ children }: UserContextProviderProps) => {
            return (
                <UserContext.Provider value={{ user, setUser}}>
                    {children}
                </UserContext.Provider>
            );
        };

    The error says:
    "Type '{ user: AuthUser | null; setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>; }' is not assignable to type 'null'.ts(2322)"

    TypeScript is telling us "Hey you told me that context value is null when you first created UserContext, however, 
    you're now trying to pass in an object as the value. I cannot allow that."

    So for our step 3, we need to specify the type for our UserContext value. 

    How do we do this? Can we just specify that createContext is of type <AuthUser | null>?
        export const UserContext = createContext<AuthUser | null>(null);

    Unfortunately no, and this is because <UserContext.Provider> is passing a { user, setUser } object
    as the 'value' prop. Understand that 'user' itself can be of type <AuthUser | null> and 'setUser' is of type 
    React.Dispatch<React.SetStateAction<AuthUser | null>>, therefore this means that UserContext should NOT
    be of <AuthUser | null> type, but <{ user, setUser} | null>.. something like that.

    Let's create a type definition for the UserContext.

        interface UserContextType {
            user: AuthUser | null;
            setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
        };

    Now that we have the UserContext type, we mention it when creating the context. We are going to tell 
    TypeScript "Hey TypeScript, the context type will be null initially, however, in the future, it could be 
    UserContextType." So we declare createContext(null) to be createContext<UserContextType | null>(null);

        Before:
            export const UserContext = createContext(null);

        After:
            export const UserContext = createContext<UserContextType | null>(null);

    And when we do this we see that the red squiggly line for the <UserContext.Provider /> value prop goes away.
    TypeScript is happy once again.

    Step 4:
    Let's wrap our <User /> component with <UserContextProvider /> in App.tsx.

    Step 5:
    We make use of the UserContext inside the User.tsx file.
*/

import { createContext, useState } from 'react';

interface AuthUser {
    name: string;
    email: string;
};

interface UserContextType {
    user: AuthUser | null;
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

export const UserContext = createContext<UserContextType | null>(null);


interface UserContextProviderProps {
    children: React.ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    // Set the initial state to null to represent logout state, but we know that in the future the user will login
    // For this reason make sure to type your useState as <AuthUser | null>
    const [user, setUser] = useState<AuthUser | null>(null);

    /* 
        We want to pass in the state of the logged in user, and the function to login or logout.

        For the <UserContext.Provider> value prop, we will pass in an object that holds 
        the state of the logged in user, and the setUser function so that the user can login 
        or logout (the functions for handleLogin and handleLogout will be defined in the User.tsx 
        component, we're just passing the setter function for the 'user' state variable).

        ES5 Way:
            value = { user: user, setUser: setUser }

        ES6 Way: 
            value = { user, setUser }
    */
    return (
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};