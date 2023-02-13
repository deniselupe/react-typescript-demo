/*
    Typing Props:
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

/*
    Basic Props:
    We decided we wanted to declare another prop in GreetProps called 'messageCount', and 
    define it as type number. We declare the new prop 'messageCount' in GreetProps interface,
    but have not used it just yet in either App.tsx for in the JSX for Greet.tsx.

    App.tsx immediately gives us an error that says:
    Property 'messageCount' is missing in type '{ name: string }' but required in type 'GreetProps'.

    TypeScript is telling us:
    "Hey, messageCount is missing as a prop, please add it."

    We include the messageCount prop in App.tsx and use it in Greet.tsx JSX, and that resolves the error.

    Next, let's take a look at a boolean type. We want the text, 'Welcome Guest' to be displayed when the 
    user is not logged in. If the user is logged in, we display the name and the message count. So to the 
    GreetProps add a new key 'isLoggedIn', and set it to the type of boolean.
*/

/*
    Advanced Props

    Let's say we don't want to require the messageCount prop. How do we make the messageCount prop optional?

    To make the prop optional, we need to add a question mark to the end of the prop name where we defined it's type.

    Before:
    interface GreetProps {
        name: string;
        messageCount: number;
        isLoggedIn: boolean;
    };

    After:
    interface GreetProps {
        name: string;
        messageCount?: number;
        isLoggedIn: boolean;
    };

    The JSX will still need a {props.messageCount} value to render in it's <h2> string, 
    so what do we print in the case that a messageCount prop was not passed to the <Greet /> component?

    Inside the Greet component, define the following default value:
    const { messageCount = 0 } = props;

    If a user does not provide a messageCount prop to the <Greet /> component, then when we are destructuring 
    for the messageCount prop, we assign it to the value of 0 if no value is found.
*/

interface GreetProps {
    name: string;
    messageCount?: number;
    isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props;

    return (
        <div>
            <h2>
                {
                    props.isLoggedIn 
                    ?
                    `Welcome ${props.name}! You have ${messageCount} messages`
                    :
                    'Welcome Guest'
                }
            </h2>
        </div>
    );
};