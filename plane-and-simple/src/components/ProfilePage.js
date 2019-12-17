import React, { Component } from "react";

import { allCities } from '../services/apiHelper';

export default function ProfilePage(props) {
  // componentDidMount = async () => {
  //   // const response = await fetchData()
  //   // console.log(response.data);
  //   // let cityImage = response.;
  //   // let citySnippit = response.data.results[0].intro;
  //   // let cityPopulation = response.data.results[0].properties[0].value;
  //   // console.log(cityImage);
  //   // console.log(citySnippit);
  //   // console.log(cityPopulation);
  //   // // console.log(response.data.results)

  //   // this.setState({
  //   //   image: cityImage,
  //   //   snippit: citySnippit,
  //   //   population: cityPopulation,
  //   // })

  // }

  console.log(props)
  return (
    <div className="profile-container">
      {props &&
        <img src={props.city.images[0].sizes.original.url} alt="city-image" />
      }
      {/* <h1> {this.state.snippit}</h1>
      <h2>Population = {this.state.population}</h2> */}

    </div>

  )
}







