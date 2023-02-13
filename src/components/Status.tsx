/*
    Advanced Props:
    Let's take a look at a few advanced types when passing props to a component.


    Unions and String Literals:
    For our first type, let's consider this Status component. For the JSX, we have 3 <h2> tags,
    Loading, Data fetched successfully, and Error fetching data.

    Our work here is to conditionally render only one of these statuses depending on a prop passed in. 
    Let's assume that the prop is status, and can either be 'loading', 'success', or 'error'.

    Let's befine by defining the prop type.

    After, in the App.tsx component, we can import and invoke the Status copmonent.
    If no prop is specified, we get an error that status prop is missing.

    function App() {
        return (
            <div className="App">
                <Status status='loading' />
                <Status status='success' />
                <Status status='error' />
            </div>
        );
    }

    Now, this works fine, but we do have a problem...

    Our message can only handle a status of 'loading', 'success', or 'error'. However, 
    the status type of the 'message' variable is any string.

    So we could pass in a completely random string for <Status />'s 'status' prop, and TypeScript 
    wouldn't flag it as an error. 

    To fix this, we can use a Union of String Literals as the status type.

    Old Type Declaration:
    interface StatusProps {
        status: string;
    };

    New Type Declaration:
    interface StatusProps {
        status: 'loading' | 'success' | 'error';
    };
*/
interface StatusProps {
    status: 'loading' | 'success' | 'error';
};

export const Status = (props: StatusProps) => {
    let message;

    if (props.status === 'loading') {
        message = 'Loading...';
    } else if (props.status === 'success') {
        message = 'Data fetched successfully!';
    } else if (props.status === 'error') {
        message = 'Error fetching data';
    }

    return (
        <div>
            <h2>{message}</h2>
        </div>
    );
};