import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurentlist from './components/Restaurentlist';
import ViewRest from './components/ViewRest';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/> 

    <Routes>
      {/* paths setting for restuatant list */}
      <Route path='/' element={<Restaurentlist/>}/>
      {/* paths setting for view rest */}
      <Route path='/view-restaurant/:id' element={<ViewRest/>}/>
    </Routes>


      <Footer/>
      </Router>

    </div>
  );
}

export default App;
