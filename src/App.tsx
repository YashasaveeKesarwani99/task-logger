import React from 'react';
import './App.css';

// import modules for adding routing
import { Routes, Route} from "react-router-dom";

// importing pages
import Page from './Pages/Page';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path='/' element = {<Home/>}/>
       <Route path='/:page' element = {<Page/>}/>
     </Routes>
    </div>
  );
}

export default App;
