import React from 'react';
import './styles/App.scss';
import Navbar from './components/layout/Navbar';
import Students from './components/students/Students';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


var App = ()=>{
  return(
    <>
    <BrowserRouter>
      <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Students} ></Route>
      </Switch>
     
      </div>
    </BrowserRouter>
    </>
  )
}

export default App;