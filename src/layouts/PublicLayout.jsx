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
                src={setIcon("fallingStars")}
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
          style={{ overflow: "auto", minHeight: "43em", marginTop: "2em" }}
        >
          <Segment basic padded="very">
            {children}
          </Segment>
        </Container>

        <Segment
          inverted
          vertical
          style={{ bottom: "0px", fixed: "bottom", width: "100%" }}
          fluid
        >
          <Container textAlign="center">
            <Image centered size="small" src="" />
            <List horizontal inverted divided link size="small">
              <List.Item as="a" href="#">
                Site Map
              </List.Item>
              <List.Item as="a" href="#">
                Contact Us
              </List.Item>
              <List.Item as="a" href="#">
                Terms and Conditions
              </List.Item>
              <List.Item as="a" href="#">
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
}

export default PublicLayout