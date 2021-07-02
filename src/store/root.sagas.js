import { all } from 'redux-saga/effects'
import weatherSaga from './weather/weather.saga'

export default function* rootSaga() {
    yield all([
        weatherSaga()
    ])
}