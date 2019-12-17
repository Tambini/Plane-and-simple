import React, { Component } from "react";

import { fetchData, allCities } from '../services/apiHelper';

class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cities: [],  
      image: "",
    }
  }

  componentDidMount = async () => {
    const response = await allCities()
    console.log(response)
  }

  DisplayCities= () => {
    
  }


  render() {
    return (
      <div className="profile-container">
        <img src={this.state.image} alt="city-image" />
      </div>
    )
  }
}

export default ProfilePage