import fallingStars from './all/falling-stars.svg'
import partly_cloudy_day from './all/partly-cloudy-day.svg'
import partly_cloudy_night from './all/partly-cloudy-night.svg'
import partly_cloudy_day_rain from './all/partly-cloudy-day-rain.svg'
import partly_cloudy_night_rain from './all/partly-cloudy-night-rain.svg'
import overcast from './all/overcast.svg'
import clear_day from './all/clear-day.svg'
import clear_night from './all/clear-night.svg'
import mist from './all/mist.svg'
import thermometer_celsius from './all/thermometer-celsius.svg'
import uv_index_6 from './all/uv-index-6.svg'
import humidity from './all/humidity.svg'
import wind from './all/wind.svg'
import celsius from './all/celsius.svg'
import pressure_high from './all/pressure-high.svg'
import pressure_low from './all/pressure-low.svg'
import cloudy from './all/cloudy.svg'
import sunrise from './all/sunrise.svg'
import sunset from './all/sunset.svg'
import moonrise from './all/moonrise.svg'
import moonset from './all/moonset.svg'
import waning_crescent from './all/moon-waning-crescent.svg'
import max_temp from './all/thermometer-warmer.svg'

const setIcon = (phase) => {
    const key = phase.replace(/\s/g, "_").toLowerCase();
    switch (key) {
        case "waning_crescent":
            return waning_crescent;
        case "partly_cloudy_1":
            return partly_cloudy_day;
        case "partly_cloudy_0":
            return partly_cloudy_night;
        case "light_rain_1":
            return partly_cloudy_day_rain;
        case "light_rain_0":
            return partly_cloudy_night_rain;
        case "overcast_1":
        case "overcast_0":
            return overcast;
        case "mist_1":
        case "mist_0":
            return mist;
        case "sunny_1":
            return clear_day;
        case "night_0":
            return clear_night;
        case "thermometer_celsius":
            return thermometer_celsius;
        case "humidity":
            return humidity;
        case "wind":
            return wind;
        case "celsius":
            return celsius;
        case "pressure_high":
            return pressure_high;
        case "pressure_low":
            return pressure_low;
        case "cloudy":
            return cloudy;
        case "sunrise":
            return sunrise;
        case "sunset":
            return sunset;
        case "moonrise":
            return moonrise;
        case "moonset":
            return moonset;
        case "max_temp":
            return max_temp;
        default:
            break;
    }
}

export default setIcon