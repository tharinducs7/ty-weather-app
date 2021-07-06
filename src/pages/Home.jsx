import React, { useState, useEffect } from "react"
import {
  Card,
  Image,
  Flag,
  List,
  Grid,
  Segment,
} from "semantic-ui-react";
import { connect } from "react-redux"
import { getCurrentWeatherStart } from "../store/weather/weather.actions"
import {
  selectGetCurrentWeatherData,
  selectIsLoading,
  selectWeatherState,
  selectGetCurrentWeatherError,
  selectGetCurrentLocationData,
  selectGetForecastData,
} from "../store/weather/weather.selectors";
import qs from "qs"
import setIcon from "../assets/svg/weather";
import WeatherItem from "../components/WeatherWidgets/ListWeatherItem"
import WeatherItem2 from "../components/WeatherWidgets/ListWeatherItem2"
import WeatherMap from "../components/WeatherWidgets/WeatherMap"
import AQI from "../components/WeatherWidgets/AQI";

const Home = ({
  currentWeatherErrors,
  currentWeather,
  isLoading,
  selectWeatherState,
  forecastWeather,
  currentLocation,
  getCurrentWeather
}) => {
  const [weatherNow, setWeatherNow] = useState()
  const [locationNow, setLocationNow] = useState()

  useEffect(() => {
    initAuctions()
  }, [])

  const initAuctions = async () => {
    const params = {
      key: process.env.REACT_APP_API_KEY,
      q: "kandy",
      days: 3,
      aqi: "yes",
    };
    await getCurrentWeather(qs.stringify(params))
    setWeatherNow(currentWeather)
    setLocationNow(currentLocation)

  }

  return (
    <Grid columns={3} divided>
      <Grid.Row stretched>
        <Grid.Column>
          {/* <Segment basic> */}
          {currentWeather && (
            <Card raised fluid>
              <Card.Content>
                <Image
                  floated="right"
                  size="small"
                  src={setIcon(
                    `${currentWeather.condition.text}_${currentWeather.is_day}`
                  )}
                />
                <Card.Header>{currentWeather.condition.text}</Card.Header>
                <Card.Meta>
                  {" "}
                  <Flag name={currentLocation.country.toLowerCase()} />
                  {currentLocation.name}, {currentLocation.region},{" "}
                  {currentLocation.country}{" "}
                </Card.Meta>
                <Card.Description>
                  <List divided verticalAlign="middle">
                    <WeatherItem
                      icon={setIcon("celsius")}
                      value={currentWeather.temp_c}
                      title="Temperature"
                    />
                    <WeatherItem
                      icon={setIcon("thermometer celsius")}
                      value={currentWeather.feelslike_c}
                      title="Feels Like"
                    />
                    <WeatherItem
                      icon={setIcon("thermometer celsius")}
                      value={currentWeather.uv}
                      title="UV Index"
                    />
                    <WeatherItem
                      icon={setIcon("humidity")}
                      value={`${currentWeather.humidity}%`}
                      title="Humidity"
                    />
                    <WeatherItem
                      icon={setIcon("wind")}
                      value={`${currentWeather.wind_dir} ${currentWeather.wind_kph} Km/h`}
                      title="Wind"
                    />
                    <WeatherItem
                      icon={
                        currentWeather.pressure_mb > 1030
                          ? setIcon("pressure_high")
                          : setIcon("pressure_low")
                      }
                      value={`${currentWeather.pressure_mb} mbar`}
                      title="Pressure"
                    />
                    <WeatherItem
                      icon={setIcon("cloudy")}
                      value={`${currentWeather.cloud}%`}
                      title="Cloud"
                    />
                  </List>
                </Card.Description>
              </Card.Content>
              {/* <Card.Content extra>
                <div className="ui two buttons"></div>
              </Card.Content> */}
            </Card>
          )}
          {/* </Segment> */}
        </Grid.Column>

        <Grid.Column>
          {currentLocation && (
            <Segment>
              <WeatherMap
                lat={currentLocation.lat}
                long={currentLocation.lon}
              />
            </Segment>
          )}
          <Segment textAlign='center'> 
            {currentWeather && (
              <AQI value={currentWeather.air_quality["gb-defra-index"]} />
            )}
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment basic>
            {forecastWeather &&
              forecastWeather.forecastday.map((forecast) => (
                <Card fluid>
                  <Card.Content>
                    <Image
                      floated="right"
                      size="mini"
                      src={forecast.day.condition.icon}
                    />
                    <Card.Header>
                      {forecast.date} - {forecast.day.condition.text}
                    </Card.Header>
                    <Card.Meta>{forecast.day.condition.text}</Card.Meta>
                    <Card.Description>
                      <Grid columns={3} divided>
                        <Grid.Row>
                          <Grid.Column></Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <List horizontal size="mini">
                      <WeatherItem2
                        icon={setIcon("sunrise")}
                        value={forecast.astro.sunrise}
                        title="Sunrise"
                      />

                      <WeatherItem2
                        icon={setIcon("sunset")}
                        value={forecast.astro.sunset}
                        title="Sunset"
                      />

                      <WeatherItem2
                        icon={setIcon("moonrise")}
                        value={forecast.astro.moonrise}
                        title="Moonrise"
                      />

                      <WeatherItem2
                        icon={setIcon("moonset")}
                        value={forecast.astro.moonset}
                        title="Moonset"
                      />
                    </List>
                  </Card.Content>
                </Card>
              ))}
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

const mapStateToProps = (state) => ({
  currentWeather: selectGetCurrentWeatherData(state),
  currentLocation: selectGetCurrentLocationData(state),
  isLoading: selectIsLoading(state),
  selectWeatherState: selectWeatherState(state),
  currentWeatherErrors: selectGetCurrentWeatherError(state),
  forecastWeather: selectGetForecastData(state),
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentWeather: (queryParams) =>
    dispatch(getCurrentWeatherStart(queryParams)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
