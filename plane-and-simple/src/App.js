import React, { Component } from 'react';
import './App.css';

//custom components
import ProfilePage from './components/ProfilePage';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
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

  


  render() {
   
    return (
      <div className="App">
        <Header />
        <main>
          <Route exact path="/" render={(props) =>
            <LandingPage cities={this.state.cities} />} />
          <Route path="/profile/:cityId" render={(props) => {
            return this.state.apiDataLoaded ?
              <ProfilePage cities={this.state.cities} cityName={props.match.params.cityId} />
              : null
          }} />
        </main>
        <Footer />
      </div>
    );
  }

}

export default App;