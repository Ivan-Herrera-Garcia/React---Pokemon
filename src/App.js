/*import React from 'react';
import "./App.scss";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Busqueda, Pokemon_All } from "./router";

function App() {
  return (
   <Router>
    <Switch>
      <Route exac path="/" Component={Pokemon_All} />
      <Route path="/busqueda" Component={Busqueda} />
    </Switch>
   </Router>
  );
}

export default App;*/

import React from 'react';
import './App.scss';
import { Routes, Route} from 'react-router-dom';
import {About, Busqueda, Pokemon_All} from "./router"

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Pokemon_All/>} />
      <Route path="/busqueda" element={<Busqueda/>} />
      <Route path="/acerca-de" element={<About/>} />
    </Routes>
  );
}

export default App;

