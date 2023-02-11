/*
    TypeScript will not be happy if you don't specify the type for Greet's 'props' argument.

    In this example, we know that we are only passing one prop, 'name', to the <Greet /> component.
    We know that props are passed in the form of an object {}, and we know that the data type for the 'name'
    prop is going to be string.

    For this reason we are going to define an interface for <Greet />'s prop, that way TypeScript can stop giving 
    the following error:

    (parameter) props: any
    Parameter 'props' implicitly has an 'any' type.

    How this helps us find errors while developing:
        - When you type 'prop.' the editor will know to suggest the 'name' key
          so that you don't have to worry about manually entering the key name yourself.
          Entering the key name manually has introduces that possibility of having a type, and thus 
          causing an error.
        - When invoking the component in App.tsx, if you try to pass in any other data type than 'string' for
          <Greet />'s name prop, TypeScript will right away points it out with an error that says "Type is not assignable 
          to type string".

    Should you use interfaces or type aliases?
        - TypeScript's documentation says "If you would like a heuristic, use interface until you need to use features from type."
*/

interface GreetProps {
    name: string,
};

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>Welcome {props.name}! You have 10 messages</h2>
        </div>
    );
};