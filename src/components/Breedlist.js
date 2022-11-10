import React from 'react'

function Breedlist() {

  const dogs = [
    { name: "bob", breed: "dalmation" },
    { name: "alice", breed: "york" }
  ];


  return (
    <div className="App">
      {/* <ul>{names}</ul> */}
      <ul>{dogs[0].name}</ul>
      <ul>
        {dogs.map((dog) => (
          <li>
            {dog.name} - {dog.breed}
          </li>
        ))}
      </ul>
    </div>
  );




  return (

    
    <div className="App">
        <button>11</button>

    </div>
  );
    
}


  


export default Breedlist;