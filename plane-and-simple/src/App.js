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
    const londonCityImage = citiesData[0].data.results[0].images[1].sizes.original.url
    const madridCityImage = citiesData[1].data.results[0].images[0].sizes.original.url
    const parisCityImage = citiesData[2].data.results[0].images[0].sizes.original.url
    const dubaiCityImage = citiesData[3].data.results[0].images[0].sizes.original.url
    const amsterdamCityImage = citiesData[4].data.results[0].images[0].sizes.original.url
    const sydneyCityImage = citiesData[5].data.results[0].images[0].sizes.original.url
    const limaCityImage = citiesData[6].data.results[0].images[0].sizes.original.url
    const rioCityImage = citiesData[7].data.results[0].images[0].sizes.original.url
    const barcelonaCityImage = citiesData[8].data.results[0].images[0].sizes.original.url
    const milanCityImage = citiesData[9].data.results[0].images[0].sizes.original.url
    const melbourneCityImage = citiesData[10].data.results[0].images[0].sizes.original.url
    const athensCityImage = citiesData[10].data.results[0].images[0].sizes.original.url
  
      this.setState({
        cities: citiesData,
        londonCityImage: londonCityImage,
        madridCityImage: madridCityImage,
        parisCityImage: parisCityImage,
        dubaiCityImage: dubaiCityImage,
        amsterdamCityImage: amsterdamCityImage,
        sydneyCityImage: sydneyCityImage,
        limaCityImage: limaCityImage,
        rioCityImage: rioCityImage,
        barcelonaCityImage: barcelonaCityImage,
        milanCityImage: milanCityImage,
        melbourneCityImage: melbourneCityImage,
        athensCityImage: athensCityImage,
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
          <Route path="/profile/:city" render={(props) =>
          {
            return this.state.apiDataLoaded ?
              <ProfilePage cityImage={this.state.londonCityImage} />
              : null
          }} />
        </main>
        <Footer />
      </div>
    );
  }

}

export default App;
