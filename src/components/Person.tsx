/*
    We are going to build a Person component, that takes in a 
    name object as a prop.

    The name prop will be an object that contains 'first' and 'last'
    as properties.
*/

/*
    Prop Types and Tips

    3 Tips Related to Props and Types in React:
        1. Destructuring Props: The first one is that you can destructure props when defining the component
        2. Exporting Types: At the moment in all our files, we define types right at the top. This works for simple components, however, when you're working on
           large components with multiple types, you often want to move the types into a separate file, and import them where necessary. Keep in mind that this makes the 
           most sense when you have a lot more types to work with. (Visit the Person.tsx and Person.types.ts file for a good example on how to export and import 
           types like you do with components)
        3. Reusing Types: It is possible to extract a type and use it in multiple places. (Visit Person.types.ts for examples)


    Destructuring Props When Defining Component Example:

        interface InputProps {
            value: string;
        };

        export const Input = ({ value }: InputProps) => {
            const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                console.log(event);
            };

            return <input type='text' value={value} onChange={handleInputChange} />;
        };

    -------------------------------------------------------------

    If we take a look at this <Person /> component, we have the person props defined
    at the top. Let's move into a separate file. We are going to create a new file called 
    'Person.types.ts'. 

    (Visit the Person.types.ts file to see how you can export the type declaration for <Person />'s props)

    Then you'll import the Person.types.ts file:
*/
import { PersonProps } from './Person.types';

export const Person = (props: PersonProps) => {
    return <div>{props.name.first} {props.name.last}</div>;
};

