import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="Nav">
      <ul>
        <Link to={`/`}>
          <li>Home</li>
        </Link>
        {/* <li>Contact </li> */}

      </ul>
    </div>


  )
}

export default Nav;