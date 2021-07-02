import React from "react"
import { Map, Marker } from "pigeon-maps"

const WeatherMap = (props) => {
  return (
    <Map height={200} defaultCenter={[props.lat, props.long]} defaultZoom={11}>
      {/* <Marker width={50} anchor={[50.879, 4.6997]} /> */}
    </Map>
  );
}

export default WeatherMap