import React from 'react';
import './App.css'
import Navbar from './components/navbar/navbar';
import Baanner from './components/baner/banner';
import Rawpost from './components/Rawpost/Rawpost';
import {Originals,Actions,ComedyMovies} from './urls'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Baanner/>
     <Rawpost url={Originals} title='Netflix Originals'/>
     <Rawpost url={Actions} title='Action' isSmall />
     <Rawpost url={ComedyMovies} title='ComedyMovies' isSmall />

    
    </div>
  );
}

export default App;
