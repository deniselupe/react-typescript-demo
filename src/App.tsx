/*
    Component Props

    Let's learn how to pass a component as a prop
    with React and Typescript.

    For this lesson we will be working with the files inside
    ./components/auth/.

    The ./components/auth/ folder contains three files:
        - Login.tsx: Which is a simple component that says "Please login to continue"
        - Profile.tsx: A component that says "Private Profile Component"
        - Private.tsx: A component that controls whether a user can view a component or not based on whether they are logged in
*/

import './App.css';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';

function App() {
    return(
        <div className='App'>
            <Private isLoggedIn={true} component={Profile} />
        </div>
    );
}

export default App;