function WeatherData() {
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

export default WeatherData;
