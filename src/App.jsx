import NavBar from "./components/NavBar";
import "./App.css";
import Search from "./components/Search";
import WeatherData from "./components/WeatherData";
function App() {
  return (
    <div id="App">
      <NavBar />
      <div id="app-content">
        <WeatherData />
        <Search />
      </div>
    </div>
  );
}

export default App;
