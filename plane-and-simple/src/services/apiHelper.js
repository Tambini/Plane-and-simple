import axios from 'axios';

const url = "https://www.triposo.com/api/20190906/location.json?";
const accountID = "ULDPYY8A"
const apiToken = "7jwucw1j1gjrqjg8j67gbnu57i3zpz0u"
const input = "Amsterdam"


export const fetchData = async () => {
  const data = await axios.get(`${url}id=${input}&account=${accountID}&token=${apiToken}&fields=all`);
  return data
}


export const allCities = async () => {
  //
  const cities = ["London", "Madrid", "Paris", "Dubai", "Amsterdam", "Milan", "Sydney", " Lima", "Rio_de_Janeiro", "New_York"]

  const cityUrls = cities.map((city) => (`${url}id=${city}&account=${accountID}&token=${apiToken}&fields=all`)

  )

  console.log(cityUrls)
  const cityPromises = cityUrls.map(cityUrl => axios.get(cityUrl))

  const cityData = await Promise.all(cityPromises)



  return (cityData)
}


