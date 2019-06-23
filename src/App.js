import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Summary from './components/Summary';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/summary' component={Summary} />
      </div>
    </BrowserRouter>
  );
}

export default App;
