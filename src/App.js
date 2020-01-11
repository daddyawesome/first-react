import React, { useState } from 'react';
import Tweet from './tweet';

function App(){
  const [isRed,setRed] = useState(false);
  const [count, setCount] = useState(0);

  const [users,setUsers] = useState([
    {name: "Daddy Awesome", message:"I am awesome"},
    {name: "John", message:"I am Jon Snow"},
    {name: "russel", message:"Russel by name russel by reputation"},
  ]
  );

  const increment = () => {
    setCount(count +1)
    setRed(!isRed)
  };
  return(
    <div className='app'>
      <h1 className = {isRed ? 'red': ''}>Change my Color</h1>
      <button onClick ={increment}>Increment</button>
      <h1>{count}</h1>
      {users.map(user =>
        <Tweet name={user.name} message={user.message} />
        )}
      
      
    </div>
  );
}

export default App;
