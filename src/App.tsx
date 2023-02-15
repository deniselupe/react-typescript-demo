import './App.css';
import { Buttons } from './components/Buttons';
import { Input } from './components/Input';
import { Container } from './components/Container';

function App() {
    return(
        <div>
            {/* 
                Style Props
                
                If you try to add a property into styles that is not a valid CSS property, 
                let's say for example, replacing 'padding' with 'paddingasd', TypeScript will get 
                angry and throw an error.

                <Container styles={{ border: '2px solid black', paddingasd: '1rem' }} />

                If you also try to assign a value to a CSS property that is not of the correct type, 
                for example, assigining a 'display' property with the value of 0, TypeScript again will 
                throw an error.

                <Container styles={{ border: '2px solid black', paddingasd: '1rem', display: 0 }} />
            */}
            <Container styles={{ border: '2px solid black', padding: '1rem' }} />
        </div>
    );
}

export default App;
