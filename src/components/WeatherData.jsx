import PropTypes from "prop-types";

function WeatherData({ weatherData }) {
  if (!weatherData) {
    return (
      <div id="weather-container">
        <img src="https://openweathermap.org/img/wn/03d@2x.png" alt="" />
        <div id="weather-details">
          <h1>--</h1>
          <h2>-- °c</h2>
          <h3 className="description">---</h3>
        </div>
      </div>
    );
  }

  return (
    <div id="weather-container">
      <img
        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
        alt={weatherData.weather[0].description}
      />
      <div id="weather-details">
        <h1>{weatherData.name}</h1>
        <h2>{Math.round(weatherData.main.temp)} °c</h2>
        <h3 className="description">{weatherData.weather[0].description}</h3>
      </div>
    </div>
  );
}

WeatherData.propTypes = {
  weatherData: PropTypes.object,
};

export default WeatherData;
