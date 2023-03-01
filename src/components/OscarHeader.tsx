/*
    <OscarHeader /> has been updated to return <h2>Oscar goes to Leonardo DiCaprio!</h2>. 
    The string that will be passed in the prop is going to be 'Oscar goes to Leonardo DiCaprio!'. 

    I am going to create an <OscarThree /> that will accept a component as a prop named 
    'component', and so it's prop type will be set to React.ComponentType.

    I am going to pass 'OscarHeader' as the component prop to <OscarThree />, and then 
    within <OscarThree /> I am going to render <OscarHeader />.

    Let's see how to make <OscarThree /> render without any TypeScript errors.
*/

const OscarHeader = () => {
    return (
        <h2>Oscar goes to Leonardo DiCaprio!</h2>
    );
};

export default OscarHeader;