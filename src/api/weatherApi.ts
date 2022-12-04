import IWeatherCity from '../types/weather/IWeatherCity'
const apiWether = 'c22653e187556d1189e5da8412d50805'

const getWeather = (sendData: IWeatherCity) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${sendData.lat}&lon=${sendData.lng}&exclude={part}&appid=${apiWether}&lang=ru&units=imperial`
  )
}

// `https://api.openweathermap.org/data/2.5/onecall?lat=${route.query.lat}&lon=${route.query.lng}&exclude={part}&appid=7efa332cf48aeb9d2d391a51027f1a71&units=imperial`

export default {
  getWeather,
}
