import React from 'react';
import './App.css';
import Search from './components/search-component/search-component';
import {Route, Switch} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = "/" exact component = {Search}/>
      </Switch>
    </div>
  );
}

export default App;
