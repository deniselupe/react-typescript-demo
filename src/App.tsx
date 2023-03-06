import './App.css';
import List from './components/List';

/*
    Generic Props
*/


function App() {
    return (
        <div className='App'>
            <List 
                items={['Batman', 'Superman', 'Wonder Woman']}
                onClick={(item) => console.log(item)}
            />
            <List 
                items={[1, 2, 3]}
                onClick={(item) => console.log(item)}
            />
            <List 
                items={[
                    {
                        first: 'Bruce',
                        last: 'Wayne'
                    },
                    {
                        first: 'Clark',
                        last: 'Kent'
                    },
                    {
                        first: 'Princess',
                        last: 'Diana'
                    }
                ]}
                onClick={(item) => console.log(item)}
            />
        </div>
    );
}

export default App;
