import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
  }


  componentDidMount() {
    axios.get('https://www.triposo.com/api/20190906/location.json?id=Amsterdam&fields=all')
      .then(result => {
        console.log(result);


      })

  }
    render() {


      return (
        <div className="App">

        </div>
      );
    }

}

export default App;
