/*
    useContext Future Value

    Step 5:
    We make use of the UserContext in the User.tsx file.
*/

import { useContext } from 'react';
import { UserContext } from './UserContext';

function User() {
    // Let's assign the value of UserContext (What was passed as the value prop of <UserContext.Provider>) to a variable 'userContext'
    const userContext = useContext(UserContext);

    // Then within both handleLogin and handleLogout we'll make use of 'userContext.setUser()'
    const handleLogin = () => {
        if (userContext) {
            // If userContext is truthy, setUser to a hardcoded AuthUser object
            userContext.setUser({
                name: 'Denise',
                email: 'denise@example.com'
            });
        }
    };

    const handleLogout = () => {
        if (userContext) {
            // If userContext is truthy, setUser to null
            userContext.setUser(null);
        }
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <h2>User name is {userContext?.user?.name}</h2>
            <h2>User email is {userContext?.user?.email}</h2>
        </div>
    );
}

export default User;