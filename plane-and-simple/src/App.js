import React, { Component } from 'react';
import './App.css';

//custom components
import ProfilePage from './components/ProfilePage';
import LandingPage from './components/LandingPage';
import Nav from './components/Nav';
import Footer from './components/Footer'

//api calls
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
        <Nav />
        <ProfilePage />
        <LandingPage />
        <Footer />
      </div>
    );
  }

}

export default App;
