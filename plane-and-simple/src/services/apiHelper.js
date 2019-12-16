import axios from 'axios';

const url = "https://www.triposo.com/api/20190906/location.json?";
const accountID = "ULDPYY8A"
const apiToken = "7jwucw1j1gjrqjg8j67gbnu57i3zpz0u"
const input = "Boston"


  export const fetchData = async () => {
    const data = await axios.get(`${url}id=${input}&account=${accountID}&token=${apiToken}&fields=all`);
    return (data)
  }

  // const cities =["London", "Madrid", "Paris", "Dubai", "Amsterdam", "Milan", "Sydney", " Lima", ]

  // export const allCities = async () => {
  //   const data = await axios.get(`${url}id=${input}&account=${accountID}&token=${apiToken}&fields=all`);
  //   return (data)
  // }


