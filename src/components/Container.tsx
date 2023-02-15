/*
    Style Props
    Let's see how to type styles as props.

    We have a <Container /> component, and for the JSX we have a div tag with the style tag containing:
    style={{ border: '1px solid black', padding: '1rem' }}

    export const Container = () => {
        return (
            <div style={{ border: '1px solid black', padding: '1rem' }}>
                Text content goes here
            </div>
        );
    };

    We want to change it to where we pass in style as props rather than hard code it 
    within the component. Let's begin by declaring the type for the style props.

    But what exactly is the type of styles? The keys in the style prop is mainly a string, and the value
    can be either a number or a string. Now we can't just say that the values of a style can be just any string. 

    How can we ensure that the values inside a string obj are valid CSS properties? Well, for this reason, the React team
    also included the type in the React library itself.

    Introducing React.CSSProperties!
*/

interface ContainerProps {
    styles: React.CSSProperties;
};

export const Container = (props: ContainerProps) => {
    return (
        <div style={props.styles}>
            Text content goes here
        </div>
    );
};