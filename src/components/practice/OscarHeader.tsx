/*
    <OscarHeader /> has been updated to return <h2>Oscar goes to Leonardo DiCaprio!</h2>. 

    I am going to create an <OscarFour /> component that will accept a children prop. 
    The children prop for <OscarFour /> will be of type React.ComponentType.

    The goal is to pass <OscarHeader /> into <OscarFour /> as a children prop.

    The goal of this practice is to see if it's even possible to pass in components as children 
    using `children: React.ComponentType`. 

    The result.. I think I'll just stick to using JSX.Element or React.ReactNode if I'm going
    to pass a component in as a children prop. It's just easier this way.
*/

const OscarHeader = () => {
    return (
        <h2>Oscar goes to Leonardo DiCaprio!</h2>
    );
};

export default OscarHeader;