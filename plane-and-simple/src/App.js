import React, { Component } from 'react';
import './App.css';

//custom components
import ProfilePage from './components/ProfilePage';
import LandingPage from './components/LandingPage';
import Nav from './components/Nav';
import Footer from './components/Footer'

//api calls
import { allCities } from "./services/apiHelper"

import { Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cities: [],
      city: "",
      apiDataLoaded: false
    }

  }

  componentDidMount = async () => {
    const citiesData = await allCities()
    console.log(citiesData)

    this.setState({
      cities: citiesData,
      apiDataLoaded: true
    })
  }

  displayCity = () => {

  }


  render() {
   
    return (
      <div className="App">
        <Nav />
        <main>
          <Route exact path="/" render={(props) =>
            <LandingPage cities={this.state.cities} />} />
          <Route path="/profile/:cityId" render={(props) => {
            return this.state.apiDataLoaded ?
              <ProfilePage city={this.state.cities[0].data.results[0]} /> : null
          }} />
        </main>
        <Footer />
      </div>
    );
  }

}

export default App;
