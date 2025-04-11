import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

function Search({ onSearch }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    try {
      const API_KEY ="";
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      onSearch(response.data);
      setError("");
    } catch (err) {
      setError("City not found. Please try again.");
      console.error("Error fetching weather data:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        id="city-data"
        placeholder="Search city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Search</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
