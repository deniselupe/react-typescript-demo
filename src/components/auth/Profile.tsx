/*
    Component Prop

    We have successfully typed the props for the <Private /> 
    component.

    But there is another small detail that you need to learn.

    At the moment, the <Profile /> component does not have any props of 
    its own. Let's add a 'name' prop'.

        interface ProfileProps {
            name: string;
        };

    We can now go back into <Private /> and pass in a 'name' prop.

    Continue to Private.tsx for the next notes/steps...
*/

export interface ProfileProps {
    name: string;
};

const Profile = ({ name }: ProfileProps) => {
    return <div>Private Profile Component, Name is {name}</div>;
};

export default Profile;