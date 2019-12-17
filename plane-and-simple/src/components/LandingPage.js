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
              <Link to={`/profile/${city.data.results[0].id}`}>
                <img className="landing-page-images" key={index} src={city.data.results[0].images[0].sizes.original.url} />
              </Link>
            )
          })}
        </div>}
    </div>
  )

}

