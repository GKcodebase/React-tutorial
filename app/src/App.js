import React from 'react';
import list from './components/List';
const name = 'Bois';

function getName(){
  return name;
}
function App() {
  return (
    <div>
      <h1>Hello {getName()}</h1>
      <div>{list()}</div>
    </div>
  );
}

export default App;