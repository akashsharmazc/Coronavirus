import React from 'react';
import './App.css';
import {GlobalProvider} from './contexts/GlobalState'
import {Searchbar} from './components/Searchbar'
import {Graph} from './components/Graph'
function App() {
  
  return (
<GlobalProvider>
     <Searchbar />
     <Graph/>
    </GlobalProvider>

  );
}

export default App;
