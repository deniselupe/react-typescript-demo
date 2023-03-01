interface OscarOneProps {
    children: React.ReactNode;
};

const OscarOne = ({ children }: OscarOneProps) => {
    return (
        <div>
            <h2>OscarOne Component with React.ReactNode children</h2>
            {children}
        </div>
    ); 
};

export default OscarOne;