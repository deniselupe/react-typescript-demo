interface OscarThreeProps {
    component: React.ComponentType;
};

const OscarThree = ({ component: Component}: OscarThreeProps) => {
    return (
        <div>
            <h2>OscarThree Component with React.ComponentType prop</h2>
            <Component />
        </div>
    );
};

export default OscarThree;