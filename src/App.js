import React from 'react';

function App(){
  
  const sayHello = () => {
    console.log("hello2");
  }
  
  return(
    <div>
      <h1>Hello React</h1>
      <button onClick={sayHello()}>Helo</button>
    </div>
  );
}

export default App;
