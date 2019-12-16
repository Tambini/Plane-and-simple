import React, { Component } from 'react';
import './App.css';

import ProfilePage from './components/ProfilePage';


class App extends Component {
  constructor(props) {
    super(props)
  }


  
  render() {

    return (
      <div className="App">
        <ProfilePage />
      </div>
    );
  }

}

export default App;
