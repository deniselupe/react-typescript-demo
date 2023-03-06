/*
    Generic Props

    This is a simple component that receives an array of items, and handles 
    a click event on each of those items.

    We have a props type called ListProps which contains `items` which is an 
    array of strings, and `onClick` handler which receives the item value as 
    an argument. 

    On the <List /> component itself, we destructure `items` and `onClick` from props. 

    For the JSX there is an <h2> tag that says "List of Items", and below the heading
    we .map() over the `items` array, rendering the `item` in a <div> tag. On click
    of the <div> tag, we also call the onClick prop, passing in the `item` string.

    This might not be a practical <List /> component, but for now it serves the purpose.

    In App.tsx, we import <List /> and invoked it.

    function App() {
        return (
            <div className='App'>
                <List 
                    items={['Batman', 'Superman', 'Wonder Woman']}
                    onClick={(item) => console.log(item)}
                />
            </div>
        );
    }

    However the next day, we realize that we need to handle a list of numbers, 
    and handle the click on each number. If we try to invoke the <List /> component
    again with an array of numbers for the `items` prop, we will get an error.

    Error:
    Type 'number' is not assignable to type 'string'. This is because we have mentioned
    that <List />'s `items` prop is an array of strings. 

    One possible solution is to allow either a string or a number as the type for `items`
    and `onClick` props.

        Before:
            interface ListProps {
                items: string[];
                onClick: (value: string) => void;
            };

        After:
            interface ListProps {
                items: string[] | number[];
                onClick: (value: string | number) => void;
            };
    
    TypeScript is once again happy.

    But this is once again specific to `items` being an array of strings
    or numbers only. What is tomorrow, we want `items` to also be an array
    of objects?

    What we need is a way to tell TypeScript that the type of `items` and 
    the `onClick` handler item can vary. Generics are a way to do that.

    In fact, we've looked at Generics already in this series.

    Past Example:
        interface AuthUser {
            name: string;
            email: string;
        };
        
        export const User = () => {
            const [user, setUser] = useState<AuthUser>({} as AuthUser);
            
            const handleLogin = () => {
                setUser({
                    name: 'Denise',
                    email: 'denise@example.com'
                });
            };

            return (
                <div>
                    <button onClick={handleLogin}>Login</button>
                    <div>User name is {user.name}</div>
                    <div>User email is {user.email}</div>
                </div>
            );
        };

    When we specified a type to useState, or even in one of the previous examples 
    where we specify to React.ComponentType (i.e., React.ComponentType<ProfileProps>),
    we made use of Generics. 

    Let's see how to add Generic types for our <List /> component.

    
    Step 1:
    We add a Generic type to the ListProps type. Now what is a Generic type?
    Well you can think of them as parameterized types. One line 1 right after 
    `ListProps` we specify within angle brackets <T>. Now <T> is sort of a 
    convention and stands for 'Type', but you are welcome to use any label you
    want to use. We are sticking to <T>.

        interface ListProps<T> {
            items: string[] | number[];
            onClick: (value: string | number) => void;
        };

    Once we mention that ListProps accepts a variable called `T`, we assign the same 
    to `items` and to the `onClick` prop as well. 

        interface ListProps<T> {
            items: T[];
            onClick: (value: T) => void;
        };

    When we do this, we get an error on ({ items, onClick }: ListProps) that says:
    "Generic type 'ListProps' requires 1 type argument(s)."
    
    This is because we need to specify the Generic type as mentioned in the interface definition.
    So change this line to say:
        const List = ({ items, onClick }: ListProps<T>) => {}

    But then, what example is <T>? TypeScript does not know that. To fix this, we need to specify
    what T can be before the parenthesis. 

        Before:
            const List = ({ items, onClick }: ListProps<T>) => {}

        After:
            const List = <T>({ items, onClick }: ListProps<T>) => {}

    But this <T> needs to extend a base type. We are going to specify an empty object as that
    covers everything.

    Side Note: 
    I believe that the reason why <T extends {}> helps satisfy the scenario where `items` equals 
    either an array of string, number, or objects is because in JavaScript EVERYTHING is an object.
    So maybe saying that <T extends {}> is saying that anything that is considered an object at all
    can be used as the base type for T. 

        Before:
            const List = <T>({ items, onClick }: ListProps<T>) => {}

        After:
            const List = <T extends  {}>({ items, onClick }: ListProps<T>) => {}

    So T extends an empty object, or in other words, the least restriction when passing in props.

    When we do that, we see that the error in App.tsx is gone. We can now pass in an array of any type.
    We are stretching ourselves a bit because `item` as object would not be the best to specify as a value 
    to render in a <div> tag. 

    If you want to add restrictions to what the Generic Type can be, you can focus on this constraint we have
    specified <T extends {}>.

    For example, if we want only an array of numbers or strings, we specify the constraint instead as:
    <T extends string | number>.

    This would make it to where an `items` prop that equals to an array of objects would be
    rejected by TypeScript.

    Another useful constraint would be saying that T is going to be an object that must contain
    and id property. 

    So this would mean that `items` can only be an array of objects, with each object having at least
    an `id` property.

    So the constraint would be changed to <T extends { id: number }>. This restriction will ensure that
    we can safely pass `item.id` when rendering the text for each item <div> in the JSX.

    And the `items` prop would equal to:
        [
            {
                id: 1,
                first: 'Bruce',
                last: 'Wayne'
            },
            {
                id: 2,
                first: 'Clark',
                last: 'Kent'
            },
            {
                id: 3,
                first: 'Princess',
                last: 'Diana'
            }
        ]

    And as you have seen, that in addition to each `items` object having an `id` 
    property, they can contain any other property as well, and in this case, the `items` objects
    also have a `first` property and a `last` property.

    Generics is really powerful and is something that you will come across when working 
    with React and TypeScript. It helps you avoid code duplication when you need multiple types
    to be handled but at the same time helps provide strict type checking.
*/

interface ListProps<T> {
    items: T[];
    onClick: (value: T) => void;
};

const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
    return (
        <div>
            <h2>List of Items</h2>
            {
                items.map((item, index) => {
                    return (
                        <div key={index} onClick={() => onClick(item)}>
                            {JSON.stringify(item)}
                        </div>
                    )
                })
            }
        </div>
    );
};

export default List;