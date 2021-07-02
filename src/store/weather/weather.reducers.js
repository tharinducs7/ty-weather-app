import {
    GET_CURRENT_WEATHER_START,
    GET_CURRENT_WEATHER_SUCCESS,
    GET_CURRENT_WEATHER_FAILURE,
} from './weather.constants'

const INITIAL_STATE = {
    isLoading: false,
    getCurrentWeatherData: {},
    getCurrentWeatherError: '',
}

export default function weather(state = INITIAL_STATE, { type, payload }) {
    switch (type) {
        case GET_CURRENT_WEATHER_START:
            return setGetCurrentWeatherStart(state)

        case GET_CURRENT_WEATHER_SUCCESS:
            return setGetCurrentWeatherSuccess(state, payload)

        case GET_CURRENT_WEATHER_FAILURE:
            return setGetCurrentWeatherError(state, payload)

        default:
            return state
    }
}

/**
 ************** GET Weather **************
 */
const setGetCurrentWeatherStart = (state) => ({
    ...state,
    getCurrentWeatherData: {},
    isLoading: true,
    getCurrentWeatherError: null,
})

const setGetCurrentWeatherSuccess = (state, payload) => ({
    ...state,
    isLoading: false,
    getCurrentWeatherData: payload,
    getCurrentWeatherError: null,
})

const setGetCurrentWeatherError = (state, payload) => ({
    ...state,
    isLoading: false,
    getCurrentWeatherData: {},
    getCurrentWeatherError: payload,
})
