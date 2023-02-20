/*
    useContext and TypeScript

    A common scenario for using useContext is providing a theme to components. 
    Let's use this scenario to see how we work with useContext and TypeScript.

    We will start out with the ./theme.ts file which holds a very simple theme for our 
    application. It has a primary and secondary palette. 

    ./Box.tsx is a very simple component that renders 'Theme Context' in 
    the browser. What we have to do is use the 'theme.ts' value as a context and set the 
    styles for the <Box />'s <div> tag. 

    Step 1: Create a new context in ThemeContext.tsx
    Step 2: Create the ThemeContext provider
    Step 3: Wrap <Box /> component witht he context provider
    Step 4: Consume context in Box.tsx

        import { createContext } from 'react';
        import { theme } from './theme';

        const ThemeContext = createContext(theme);

        interface ThemeContextProviderProps {
            children: React.ReactNode 
        };

        export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
            return <ThemeContext.Provider>{children}</ThemeContext.Provider>
        };

    You will get an error here that says:
        "Property 'value' is missing in type '{ children: ReactNode; }"

    So let's add a value prop to the <ThemeContext.Provider>.

        Before:
        return <ThemeContext.Provider>{children}</ThemeContext.Provider>

        After:
        return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>

    TypeScript is no longer giving an error. 

    Next, it's time to wrap the <Box /> component in <ThemeContextProvider />.
*/

import { createContext } from 'react';
import { theme } from './theme';

// Step 1: createContext accepts an initial value, which will be the theme object in ./theme.ts
export const ThemeContext = createContext(theme);

// Step 2: Let's begin with the ThemeContext.Provider's prop type
interface ThemeContextProviderProps {
    children: React.ReactNode 
};

// Next provide the Provider component itself
export const ThemeContextProvider = ({ children }: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
};