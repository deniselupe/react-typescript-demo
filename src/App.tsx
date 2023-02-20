/*
    useContext Hook

    Step 3: Wrap the <Box /> component in <ThemeContextProvider />
*/

import './App.css';
import Box from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';

function App() {
    return(
        <div className='App'>
            {/* In the JSX invoke <ThemeContextProvider/>  with <Box /> as the children */}
            <ThemeContextProvider><Box /></ThemeContextProvider>
        </div>
    );
}

export default App;
