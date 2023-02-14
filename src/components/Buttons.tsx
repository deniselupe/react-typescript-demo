/*
    Event Props

    We'll be working with two of the most common event handlers used in React:
        - onClick
        - onChange

    Here we have a new file called Buttons.tsx which contains a very simple button component.

    What we want here is for the button component to accept a click event as a prop and pass it on 
    to the HTML button element.

    Begin by adding the type for <Buttons />'s props.

    Half of the time a click handler does not need any parameter, and doesn't return anything.
    For example it can make an API call in the function body, but doesn't have to accept a parameter, or 
    return a value. For such cases, you can type the event as type () => void.

    () => void: This means that it does not return anything.

    Now you can have the following in App.tsx without any TypeScript errors:

    function App() {
        return (
            <div className="App">
                <Buttons 
                    handleClick={() => console.log('Button clicked')}
                />
            </div>
        );
    }

    Another variant of this handler is when you need the event passed in to your click handler function. 
    But what exactly is the type for this click event?
        - We once again rely on a React type
        - The type of this event is React.MouseEvent
        - We can also be more specific by saying this is a button click by adding React.MouseEvent<HTMLButtonElement>
        - HTMLButtonElement does not have to be imported as it is already available in our TypeScript environment

    Summary:
    We define the type for the <Buttons />'s prop using an interface.

    In the interface we say that the <Buttons />'s prop will be an object that holds a handleClick property, and 
    the handleClick property is a function that takes in two parameters and returns no value. The two properties of 
    the handleClick function is going to be 'event' and 'id'. The 'event' parameter is of type React.MouseEvent<HTMLButtonElement> 
    and the 'id' parameter is of type number.
*/

interface ButtonsProps {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Buttons = (props: ButtonsProps) => {
    return <button onClick={(event) => props.handleClick(event, 1)}>Click</button>;
};