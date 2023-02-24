/*
    Component Prop

    This compoennt receives two props which have destructured:
        - isLoggedIn
        - Component: A component that needs to be invoked if the user is in fact logged in

    In the JSX we check if the user is logged in, and invoke the passed in Component prop. 

    If the user is not logged in, we simply return the login component asking the user to
    sign in first. 

    We need a reusable component prop here as the component could be any component we want
    behind a login screen.

    Our task now is to ensure the code plays nicely with TypeScript. 

    Both <Login /> and <Profile /> don't have any props or state, so they do not need any types.

    Let's simply focus on <Private />.

    <Private /> accepts two props: isLoggedIn, and Component. Let's go ahead and define the 
    <Private /> prop's type.

    isLoggedIn is a boolean, but what is the type for the Component prop? We need a type
    that allows us to pass in any React Component. Well it turns out we need to use a 
    type from the React library, and the type is React.ComponentType.

        interface PrivateProps {
            isLoggedIn: boolean;
            Component: React.ComponentType;
        };

    Let's now go ahead and specify PrivateProps as the top for <Private />'s props. Once 
    we do that, TypeScript is happy.

    This is how we type a Component prop. 

    But there is another small detail that you need to learn.

    At the moment, the <Profile /> component does not have any props of 
    its own. Let's add a 'name' prop'.

    After giving <Profile /> a 'name' prop, we are now going to pass in a 
    'name' component to the Component prop that was passed in to <Private />.

        Before:
            const Private = ({ isLoggedIn, Component }: PrivateProps) => {
                if (isLoggedIn) {
                    return <Component />;
                } else {
                    return <Login />;
                }
            };

        After:
            const Private = ({ isLoggedIn, Component }: PrivateProps) => {
                if (isLoggedIn) {
                    return <Component name='Denise' />;
                } else {
                    return <Login />;
                }
            };

    When we do this though, TypeScript is not happy again. It does not know that the 
    <Component /> can accept a 'name' prop.

    To fix this, we need to export the 'ProfileProps' type that was defined in
    Profile.tsx, import it in Private.tsx, and then after React.ComponentType, within angle
    brackets, specify <ProfileProps>. This will fix the error.

    Now, I personally would like to make the 'Component' prop name be lowercased,
    so I am going to change it to 'component', and give it an alias of 'Component', 
    this way when I use it in the JSX, the JSX will have <Component /> instead of 
    <component />.

    Now we can test this in App.tsx.
*/

import Login from './Login';
import { ProfileProps } from './Profile';

interface PrivateProps {
    isLoggedIn: boolean;
    component: React.ComponentType<ProfileProps>;
};

const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
    if (isLoggedIn) {
        return <Component name='Denise' />;
    } else {
        return <Login />;
    }
};

export default Private;