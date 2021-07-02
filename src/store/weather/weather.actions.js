import {
    GET_CURRENT_WEATHER_START,
    GET_CURRENT_WEATHER_SUCCESS,
    GET_CURRENT_WEATHER_FAILURE
} from './weather.constants'

/************************** GET_CURRENT_WEATHER **************************/
export const getCurrentWeatherStart = (payload) => ({
    type: GET_CURRENT_WEATHER_START,
    payload
})

export const getCurrentWeatherSuccess = (payload) => ({
    type: GET_CURRENT_WEATHER_SUCCESS,
    payload,
})

export const getCurrentWeatherError = (payload) => ({
    type: GET_CURRENT_WEATHER_FAILURE,
    payload,
})
