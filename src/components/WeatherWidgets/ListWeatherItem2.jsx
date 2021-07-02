import React from "react"
import { List, Image } from "semantic-ui-react"

const WeatherItem2 = (props) => {
    return (
    <List.Item>
        <Image avatar src={props.icon}/>
        <List.Content>
        <List.Header>{props.value}</List.Header>
          {props.title}
        </List.Content>
   </List.Item>
  )
}

export default WeatherItem2