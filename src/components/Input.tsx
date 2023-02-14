/*
    Event Props

    Next we will work with onChange event. 

    We have a component <Input /> that returns a simple <input /> component.

    Typically with input elements, the component will need two props:
        - The input value
        - The onChange handler

    The process of typing is very similar to the click event type, so let's dive into declaring 
    the type for <Input />'s props.
*/

interface InputProps {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = (props: InputProps) => {
    return <input type='text' value={props.value} onChange={props.handleChange} />;
};