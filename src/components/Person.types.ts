/*
    Prop Types and Tips

    We are wanting to move the type declaration for the <Person />'s props to this file, 
    'Person.types.ts'.

    To use this new file inside the Person.tsx file, all we have to do is export it by adding the 
    'export' keyword before the interface PersonProps ...

    And to import it into the Person.tsx file, you just import:
    import { PersonProps } from './Person.types';

    -------------------------------------------------------------

    Reusing Types

    It is possible to extract a type and use it in multiple places.

    We can take the name object inside PersonProps interface and extract it into a sepearte type.

    Before:
    export interface PersonProps {
        name: {
            first: string;
            last: string;
        };
    };

    After:
    export interface Name {
        first: string;
        last: string;
    };

    export interface PersonProps {
        name: Name;
    };

    Now that we have this 'Name' type, we can also use it in other places just like how it was used inside 
    PersonProps interface. Let's go ahead and reuse this 'Name' type inside the type declaration for <PersonList /> props.
    Visit PersonList.tsx for the example.
*/

export interface Name {
    first: string;
    last: string;
};

export interface PersonProps {
    name: Name;
};