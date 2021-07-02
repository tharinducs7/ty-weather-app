import React from "react"
import { List, Image } from "semantic-ui-react"

const WeatherItem = (props) => {
  return (
    <List.Item>
        <List.Content floated="right">
            {props.value}
        </List.Content>
        <Image avatar src={props.icon} />
        <List.Content>
            {props.title}
        </List.Content>
    </List.Item>
  )
}

export default WeatherItem
