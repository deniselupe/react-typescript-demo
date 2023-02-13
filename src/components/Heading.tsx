/*
    Advanced Props

    export const Heading = () => {
        return <h2>Placeholder text</h2>;
    };

    Here we have the Heading component that renders a placeholder text.

    What we want to do is invoke this Heading component by passing in 
    some text between the open and closing tags.

    App.tsx
    function App() {
        return (
            <div className='App'>
                <Status status='loading' />
                <Heading>Placeholder text</Heading>
            </div>
        );
    }

    When we do this though, we see an error in App.tsx's <Heading /> component that says:
    "Type '{ children: string; } has no properties in common with type IntrinsicAttributres"

    To fix this, let's go ahead and defined the children prop type. This will make the error go away.
*/
interface HeadingProps {
    children: string;
};

export const Heading = (props: HeadingProps) => {
    return <h2>{props.children}</h2>;
};