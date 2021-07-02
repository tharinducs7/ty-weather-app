import { createSelector } from 'reselect'

const selectWeatherState = (state) => state.weather

const selectGetCurrentWeatherData = createSelector(
    selectWeatherState,
    (currentState) => currentState.getCurrentWeatherData.current,
)

const selectGetCurrentLocationData = createSelector(
    selectWeatherState,
    (currentState) => currentState.getCurrentWeatherData.location,
)

const selectGetForecastData = createSelector(
    selectWeatherState,
    (currentState) => currentState.getCurrentWeatherData.forecast,
)

const selectIsLoading = createSelector(
    selectWeatherState,
    (currentState) => currentState.isLoading,
)

const selectGetCurrentWeatherError = createSelector(
    selectWeatherState,
    (currentState) => currentState.getCurrentWeatherError,
)

export {
    selectGetCurrentWeatherData,
    selectIsLoading,
    selectGetCurrentWeatherError,
    selectGetCurrentLocationData,
    selectGetForecastData,
    selectWeatherState
}