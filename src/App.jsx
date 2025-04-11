import { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css";
import Search from "./components/Search";
import WeatherData from "./components/WeatherData";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = (data) => {
    setWeatherData(data);
  };

  return (
    <div id="App">
      <NavBar />
      <div id="app-content">
        <WeatherData weatherData={weatherData} />
        <Search onSearch={handleSearch} />
      </div>
    </div>
  );
}

export default App;
