/*
    <PersonList /> will receive an array of names as props, and will render a 
    <h2> for each name that is listed in the array.

    Below is a good example of how you work with an array of objects as a prop.
*/

interface PersonListProps {
    names: {
        first: string;
        last: string;
    }[];
};

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {
                props.names.map(nameObj => {
                    return <h2 key={nameObj.first}>{nameObj.first} {nameObj.last}</h2>
                })
            }
        </div>
    );
};