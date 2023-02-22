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

    Optional Step 6:
    At the moment you can see that <User /> has to check if userContext exists everytime 
    we need to use its value. We also have to use optional chaining in the <User /> JSX because
    userContext may potentially be null, and userContext.user may also potentially be null.

    Because UseContext's value is initially set to null, but then right immediately afterwards
    the value is set to a UserContextType object, if we wanted to, we can change the code to where <User /> doesn't have 
    to check for the existance of userContext everytime it needs to make use of it's value.

    Keep in mind that we cannot change the code to do the same for useContext.user though, and this is 
    because userContext.user needs to be able to transition because an AuthUser type or null type.

    So let's go ahead and change how UseContext's type is defined initially using Type Assertion.

    As a reminder, using Type Asserion is telling TypeScript "Hey I know better, and this value is
    of type _____". It's our way to lie to TypeScript.

    So when creating UserContext, we can change createContext to be of type <UserContextType> and 
    assign it to ({} as UserContextType).
    
        Before:
            export const UserContext = createContext<UserContextType | null>(null);

        After:
            export const UserContext = createContext<UserContextType>({} as UserContextType);

    Actually, due to Type Inferencing, you can also rewrite it like this:
        export const UserContext= createContext({} as UserContextType);

    After making this change, we can now remove the if statements from <User /> and remove the 
    optional chaining operator ?. from the <User />'s JSX.

    Before:
        function User() {
            const userContext = useContext(UserContext);

            const handleLogin = () => {
                if (userContext) {
                    userContext.setUser({
                        name: 'Denise',
                        email: 'denise@example.com'
                    });
                }
            };

            const handleLogout = () => {
                if (userContext) {
                    userContext.setUser(null);
                }
            };

            return (
                <div>
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleLogout}>Logout</button>
                    <h2>User name is {userContext?.user?.name}</h2>
                    <h2>User email is {userContext?.user?.email}</h2>
                </div>
            );
        }

    After:
        function User() {
            const userContext = useContext(UserContext);

            const handleLogin = () => {
                userContext.setUser({
                    name: 'Denise',
                    email: 'denise@example.com'
                });
            };

            const handleLogout = () => {
                userContext.setUser(null);
            };

            return (
                <div>
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleLogout}>Logout</button>
                    <h2>User name is {userContext.user?.name}</h2>
                    <h2>User email is {userContext.user?.email}</h2>
                </div>
            );
        }

    This is a pretty common thing to do when working with TypeScript and 
    Context API. If you think about it, a Context always has to be created outside the component 
    whereas its future value will be set inside a compoonent. So there is a that gap that needs 
    to be plugged in and type assertion is how you do it.
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

export const UserContext = createContext({} as UserContextType);


interface UserContextProviderProps {
    children: React.ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
    const [user, setUser] = useState<AuthUser | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser}}>
            {children}
        </UserContext.Provider>
    );
};