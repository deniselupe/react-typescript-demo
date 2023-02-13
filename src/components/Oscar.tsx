/*
    Advanced Props

    We have the following component. 

    export const Oscar = () => {
        return <div>Oscar goes to Leonardo Dicaprio!</div>;
    };

    Instead of returning the hard coded text from the <Oscar /> component, 
    we want the <Oscar /> component to render the <Heading /> component as it's children 
    prop, and that the <Heading /> component receives string 'Oscar goes to Leonardo Dicaprio!'
    as its children prop.

    How are we going to specify the prop type for the Oscar component? What is the type for a React component?

    There are a few types you can specify, but the safest bet is React.ReactNode which is a type provided by 
    the React type's package.

    React.ReactNode is a type provided by the @types/react package (listed in the package.json file).

    Now passing React components as children props is pretty common, so make sure you remember about the 
    React.ReactNode type fromt he @types/react package.
*/
interface OscarProps {
    children: React.ReactNode;
};

export const Oscar = (props: OscarProps) => {
    return <div>{props.children}</div>;
};