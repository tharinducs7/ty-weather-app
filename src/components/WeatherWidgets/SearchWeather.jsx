import React, { useState } from "react"
import { Icon, Input } from "semantic-ui-react"
import { connect } from "react-redux"
import { getCurrentWeatherStart } from "../../store/weather/weather.actions"
import qs from "qs"

const SearchWeather = ({ getCurrentWeather }) => {
    const [city, setCity] = useState()

    const handleInput = async ({ target: { name }, target: { value } }) => {
        setCity(value)
    }

    const handleSubmit = async () => {
        const params = {
          key: process.env.REACT_APP_API_KEY,
          q: city,
          days: 3,
          aqi: "yes",
        };
        await getCurrentWeather(qs.stringify(params))
    }

  return (
    <Input
      icon={
        <Icon name="search" inverted circular link onClick={handleSubmit} />
      }
      placeholder="Enter City Name.."
      name="q"
      onChange={handleInput}
    />
  )
}


const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  getCurrentWeather: (queryParams) =>
    dispatch(getCurrentWeatherStart(queryParams)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchWeather)