/*
    This is the <OscarHeader /> component. 

    It's job is to accept a children prop of type string, and render it within
    <h2> tags. 

    I'm going to pass a <OscarHeader>Oscar goes to Leonardo DiCaprio!</OscarHeader>
    JSX as a children prop to <OscarOne />.

    <OscarOne /> will have its children component defined as type React.ReactNode.

    I am then going to pass the same <OscarHeader>Oscar goes to Leonardo DiCaprio!</OscarHeader> 
    JSX as a children prop to <OscarTwo /> which will define it's children prop as of type 
    JSX.Element. 

    Let's see how to make <OscarOne /> and <OscarTwo /> render without any 
    TypeScript errors.
*/

interface OscarHeaderProps {
    children: string;
};

const OscarHeader = ({ children }: OscarHeaderProps) => {
    return (
        <h2>{children}</h2>
    );
};

export default OscarHeader;