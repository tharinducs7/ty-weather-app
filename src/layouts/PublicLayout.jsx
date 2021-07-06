import React from 'react'
import { useHistory } from 'react-router-dom'
import {
  Container,
  Image,
  List,
  Menu,
  Segment
} from "semantic-ui-react"
import SearchWeather from "../components/WeatherWidgets/SearchWeather"
import setIcon from "../assets/svg/weather"

const PublicLayout = ({ children }) => {
    const history = useHistory()

    return (
      <div>
        <Menu fixed="top" inverted color="blue">
          <Container fluid>
            <Menu.Item as="a" header>
              <Image
                size="mini"
                src={setIcon("logo")}
                style={{ marginRight: "1.5em" }}
                onClick={() => {
                  history.push("/");
                }}
              />
              TYWeather
            </Menu.Item>

            <Menu.Menu position="right">
              <Menu.Item>
                <SearchWeather />
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>

        <Container
          fluid
          style={{ overflow: "auto", minHeight: "43em", marginTop: "4em" }}
        >
          <Segment basic>{children}</Segment>
        </Container>

        <Segment
          inverted
          vertical
          style={{ fixed: "bottom", width: "100%" }}
          fluid
        >
          <Container textAlign="center">
            <Image centered size="small" src="" />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="https://www.weatherapi.com/">
                <img
                  src="//cdn.weatherapi.com/v4/images/weatherapi_logo.png"
                  alt="Weather data by WeatherAPI.com"
                  border="0"
                />
              </List.Item>
              <List.Item as="a" href="https://github.com/tharinducs7">
                Tharindu Chathuranga
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
}

export default PublicLayout