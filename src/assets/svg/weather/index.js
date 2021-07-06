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
import uv_index_1 from './all/uv-index-1.svg'
import uv_index_2 from './all/uv-index-2.svg'
import uv_index_3 from './all/uv-index-3.svg'
import uv_index_4 from './all/uv-index-4.svg'
import uv_index_5 from './all/uv-index-5.svg'
import uv_index_6 from './all/uv-index-6.svg'
import uv_index_7 from './all/uv-index-7.svg'
import uv_index_8 from './all/uv-index-8.svg'
import uv_index_9 from './all/uv-index-9.svg'
import uv_index_10 from './all/uv-index-10.svg'
import uv_index_11 from './all/uv-index-11.svg'
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
import min_temp from './all/thermometer-colder.svg'
import rain from './all/rain.svg'
import umbrella from './all/umbrella.svg'
import thunderstorms_rain from './all/thunderstorms-rain.svg'

const setIcon = (phase) => {
    const key = phase.replace(/\s/g, "_").toLowerCase();
    switch (key) {
        case "waning_crescent":
            return waning_crescent;
        case "partly_cloudy":
        case "partly_cloudy_1":
            return partly_cloudy_day;
        case "partly_cloudy_0":
            return partly_cloudy_night;
        case "light_rain":
        case "light_rain_1":
            return partly_cloudy_day_rain;
        case "light_rain_0":
            return partly_cloudy_night_rain;
        case "overcast":
        case "overcast_1":
        case "overcast_0":
            return overcast;
        case "mist":
        case "mist_1":
        case "mist_0":
            return mist;
        case "sunny":
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
        case "logo":
            return fallingStars;
        case "uv_index_1":
            return uv_index_1;
        case "uv_index_2":
            return uv_index_2;
        case "uv_index_3":
            return uv_index_3;
        case "uv_index_4":
            return uv_index_4;
        case "uv_index_5":
            return uv_index_5;
        case "uv_index_6":
            return uv_index_6;
        case "uv_index_7":
            return uv_index_7;
        case "uv_index_8":
            return uv_index_8;
        case "uv_index_9":
            return uv_index_9;
        case "uv_index_10":
            return uv_index_10;
        case "uv_index_11":
            return uv_index_11;
        case "min_temp":
            return min_temp;
        case "moderate_rain":
        case "patchy_rain_possible":
            return rain;
        case "umbrella":
            return umbrella;
        case "heavy_rain":
            return thunderstorms_rain;
        default:
            break;
    }
}

export default setIcon