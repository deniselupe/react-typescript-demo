import './App.css';
import { Buttons } from './components/Buttons';
import { Input } from './components/Input';
import { Container } from './components/Container';

/*
    Prop Types and Tips

    3 Tips Related to Props and Types in React:
        1. Destructuring Props: The first one is that you can destructure props when defining the component
        2. Exporting Types: At the moment in all our files, we define types right at the top. This works for simple components, however, when you're working on
           large components with multiple types, you often want to move the types into a separate file, and import them where necessary. Keep in mind that this makes the 
           most sense when you have a lot more types to work with. (Visit the Person.tsx and Person.types.ts file for a good example on how to export and import 
           types like you do with components)
        3. Reusing Types: It is possible to extract a type and use it in multiple places. 


    Destructuring Props When Defining Component Example:

        interface InputProps {
            value: string;
        };

        export const Input = ({ value }: InputProps) => {
            const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                console.log(event);
            };

            return <input type='text' value={value} onChange={handleInputChange} />;
        };
*/

function App() {
    return(
        <div className='App'>
        </div>
    );
}

export default App;
