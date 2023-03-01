import './App.css';
import OscarHeader from './components/OscarHeader';
import OscarThree from './components/OscarThree';

/*
    React.ReactNode, React.ComponentType, and JSX.Element are all types in React that represent 
    different kinds of React components or elements.


    JSX.Element: 
    This is the type that represents a React element, which is the output of a React component. 
    It can be a primitive value, a React component, or a fragment. An example of a JSX element is 
    <div>Hello World!</div>. When you render a component in React, it returns a JSX element.


    React.ComponentType: 
    This is a type that represents a React component that can be rendered. It can be a function 
    component or a class component. An example of a React.ComponentType is function 
    MyComponent() { return <div>Hello World!</div> }. You can use this type to define props that 
    expect a React component as a value.


    React.ReactNode: 
    This is a type that represents any type of value that can be rendered by React, including 
    JSX.Element, React.ComponentType, string, number, null, and undefined. An example of React.ReactNode 
    is <div>Hello World!</div> or function MyComponent() { return <div>Hello World!</div> }. You can use this 
    type to define props that expect any type of React node as a value.


    In general, you should use JSX.Element when you want to type a single React element, 
    React.ComponentType when you want to type a React component, and React.ReactNode when you 
    want to type any kind of value that can be rendered by React. However, the choice of which 
    type to use depends on the specific use case and what you are trying to achieve in your code.

*/

function App() {
    return(
        <div className='App'>
            <OscarThree component={OscarHeader} />
        </div>
    );
}

export default App;
