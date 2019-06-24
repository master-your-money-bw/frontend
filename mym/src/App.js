import React from 'react';
import './App.css';
import Login from './components/Login';
import { Route } from 'react-router-dom';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Homepage}/> {/* will be removed */}
      <Route path="/login" component={Login}/>
    </div>
  );
}

export default App;
