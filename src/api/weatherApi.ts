import IWeatherCity from '../types/weather/IWeatherCity'
const apiWether = 'c22653e187556d1189e5da8412d50805'

const getWeather = (sendData: IWeatherCity) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${sendData.lat}&lon=${sendData.lng}&appid=${apiWether}&lang=ru&units=imperial`
  )
}

export default {
  getWeather,
}
