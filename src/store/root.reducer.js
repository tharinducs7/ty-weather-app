import { combineReducers } from 'redux'
import weather from './weather/weather.reducers'

const reducers = {
    weather: weather,
}

const rootReducer = combineReducers(
    reducers
)

export default rootReducer