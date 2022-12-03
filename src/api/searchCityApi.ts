const apiWether =
  'pk.eyJ1IjoidmxhZGlzbGF2LW9udmVzIiwiYSI6ImNsYjd4b3hoMzA2OXYzbm10ZnVkd3dsbWMifQ.x9ts2KCXcK_0J560EzZ18Q'

const getCity = (city: string) => {
  return fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${apiWether}`
  )
}

export default {
  getCity,
}
