import React,{useContext} from 'react';
import './App.css';
import {GlobalProvider} from './contexts/GlobalState'
import {Searchbar} from './components/Searchbar'
import {Graph} from './components/Graph'
import {Header} from './components/Header'
import {Statename} from './components/Statename'
function App() {

  return (
<GlobalProvider>
     <div id="Main-container">
    <Header/>
  <Searchbar/>
    <Statename />
     <Graph/>
     </div>
  </GlobalProvider>
  );
}

export default App;
