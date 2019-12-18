import React from "react";

import { fetchData, allCities } from '../services/apiHelper';
import { Link } from 'react-router-dom';

export default function Landing(props) {
  return (
    <div>
      {props.cities &&
        <div className="landing-container">
          {props.cities.map((city, index) => {
            return (
              <div className = "landing-page-links">
              <Link to={`/profile/${city.data.id}`}> 
                <img className= "city-image" key={index} src={city.data.images[0].sizes.original.url} />
                </Link>
                </div>
            )
          })}
        </div>}
    </div>
  )

}


