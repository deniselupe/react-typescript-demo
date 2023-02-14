import './App.css';
import { Buttons } from './components/Buttons';
import { Input } from './components/Input';

function App() {
    return(
        <div>
            <Buttons 
                handleClick={(event, id) => console.log('Button clicked', event, id)}
            />
            <Input value='' handleChange={(event) => console.log(event)} />
        </div>
    );
}

export default App;
