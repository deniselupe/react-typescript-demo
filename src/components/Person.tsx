/*
    We are going to build a Person component, that takes in a 
    name object as a prop.

    The name prop will be an object that contains 'first' and 'last'
    as properties.
*/

interface PersonProps {
    name: {
        first: string;
        last: string;
    };
};

export const Person = (props: PersonProps) => {
    return <div>{props.name.first} {props.name.last}</div>;
};

