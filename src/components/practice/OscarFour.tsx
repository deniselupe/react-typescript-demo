interface OscarFourProps {
    children: React.ComponentType;
};

const OscarFour = ({ children }: OscarFourProps) => {
    const Component = children;

    return (
        <div><Component /></div>
    );
};

export default OscarFour;