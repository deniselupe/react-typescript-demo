interface OscarTwoProps {
    children: JSX.Element;
};

const OscarTwo = ({ children }: OscarTwoProps) => {
    return (
        <div>
            <h2>OscarTwo Component with JSX.Element children</h2>
            {children}
        </div>
    );
};

export default OscarTwo;