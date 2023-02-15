/*
    <PersonList /> will receive an array of names as props, and will render a 
    <h2> for each name that is listed in the array.

    Below is a good example of how you work with an array of objects as a prop.
*/

/*
    Prop Types and Tips

    We have created a 'Name' type that can be reused where needed. The 'Name' type is 
    located inside the './Person.types.ts' file, so we are going to go ahead and import 'Name' from 
    './Person.types.ts' and make use of it inside the PersonListProps interface. 

    Before:
    interface PersonListProps {
        name: {
            first: string;
            last: string;
        };
    };

    After:
    interface PersonListProps {
        names: Name[];
    };
*/
import { Name } from './Person.types';

interface PersonListProps {
    // 'names' is an array of the 'Name' type
    names: Name[];
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