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
      cityImage: " ",
      apiDataLoaded: false
    }

  }


  componentDidMount = async () => {
    const citiesData = await allCities()
    console.log(citiesData)
    const cityImage = citiesData[0].data.results[0].images[1].sizes.original.url
  
    this.setState({
      cities: citiesData,
      apiDataLoaded: true
    })

  }

  displayCity = () => {

  }

  //this.state.cities[1].data.results[0]
  render() {

    return (
      <div className="App">
        <Nav />
        <main>
          <Route exact path="/" render={(props) =>
            <LandingPage cities={this.state.cities} />} />
          <Route path="/profile/:city" render={(props) => {
            return this.state.apiDataLoaded ?
              <ProfilePage cityImage={this.state.cities} />
              : null
          }} />
        </main>
        <Footer />
      </div>
    );
  }

}

export default App;
