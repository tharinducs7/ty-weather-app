import HttpClient from '../../library/http.library'
import { HTTP_METHODS } from '../../constants/common.constants'
import * as Endpoints from '../../constants/endpoints.constants'

class WeatherService {
    static getCurrentWeather = (queryParams) => HttpClient.setMethod(HTTP_METHODS.GET).setUrl(`${Endpoints.GET_WEATHER}?${queryParams}`).request()
}

export default WeatherService