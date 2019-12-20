import axios from 'axios';

const url = "https://www.triposo.com/api/20190906/location.json?";
const accountID = "ULDPYY8A"
const apiToken = "7jwucw1j1gjrqjg8j67gbnu57i3zpz0u"
const city = ""


export const allCities = async () => {

  const cities = ["London", "Madrid", "Paris", "Dubai", "Amsterdam", "Sydney", "Lima", "Rio_de_Janeiro", "Barcelona", "Milan", "Melbourne", "Athens"]

  const cityUrls = cities.map((city) => (`${url}id=${city}&account=${accountID}&token=${apiToken}&fields=all`)

  )

  // console.log(cityUrls)

  const cityPromises = cityUrls.map(cityUrl => axios.get(cityUrl).then(result => {
    return {
      name: result.data.results[0].id,
      data: result.data.results[0],

    }
  })
  )


  const cityData = await Promise.all(cityPromises)



  return (cityData)
}
