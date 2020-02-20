import React from 'react';
import './app.css';
import STORE from './store.js'
import List from './List.js';

function App() {
  const arrayList = STORE.lists.map(list => {
    return (
        <List
          key     = {list.id}
          header  = {list.header}
          cards   = {list.cardIds.map(id => STORE.allCards[id])}
      />
    ) 
  });
  
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {arrayList}
      </div>
    </main>
  );
}

export default App;