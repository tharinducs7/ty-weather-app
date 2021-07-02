import { call, put, takeEvery } from 'redux-saga/effects'
import WeatherService from './weather.service'
import {
    getCurrentWeatherSuccess,
    getCurrentWeatherError
} from './weather.actions'

import {
    GET_CURRENT_WEATHER_START
} from './weather.constants'


function* getCurrentWeatherStart({type, payload}) {
    try {

        const response = yield WeatherService.getCurrentWeather(payload)
        yield put(getCurrentWeatherSuccess(response.data))
        console.log(response.data)
    } catch (err) {
        yield put(getCurrentWeatherError(err))
    }
}

function* weatherSaga() {
    yield takeEvery(GET_CURRENT_WEATHER_START, getCurrentWeatherStart)
}

export default weatherSaga