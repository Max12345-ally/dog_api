import { useState, useEffect} from 'react'
import './App.css';
import Breedlist from './components/Breedlist'

function App() {
    const [dogs, setDogs] = useState([]);
    console.log(dogs)

    useEffect(() => {
       (async () => {
        let dogsData;
        try {
            const response = await fetch(`https://dog.ceo/api/breeds/image/random/9/alt`)
            
            const dogData = await response.json();
        } catch (error)  {
          console.log('error');
          dogsData =[];
        }
        
          
        setDogs(dogsData);

        })();  
      },[]); 


  return (

    
    <div className="App">
      <h1>Hello</h1>
      <Breedlist />
     {/* {dogs.map()} */}
    </div>
  );
}

export default App;
