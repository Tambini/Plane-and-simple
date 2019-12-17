import React, { Component } from 'react';
import './App.css';

import ProfilePage from './components/ProfilePage';
import LandingPage from './components/LandingPage';
import { allCities } from "./services/apiHelper"


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  componentDidMount = async () => {
    const response = await allCities()
    console.log(response)
  }



  render() {

    return (
      <div className="App">
        <ProfilePage />
        <LandingPage />
      </div>
    );
  }

}

export default App;
