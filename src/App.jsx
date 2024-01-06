import { useEffect, useRef, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import getRandomNumber from "./utils/getRandomNumber";
import { LocationCard } from "./components/locationCard";
import ResidentsCard from "./components/ResidentsCard";

function App() {
  const locationId = getRandomNumber(126);
  const [inputValue, setInputValue] = useState(locationId);
  const url = `https://rickandmortyapi.com/api/location/${inputValue}`;
  const [location, getLocation, hasError] = useFetch(url);

  useEffect(() => {
    getLocation();
  }, [inputValue]);

  const inputLocation = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputLocation.current.value);
  };

  return (
    <div>
      <h1>Rick and Morty</h1>
      <form onSubmit={handleSubmit}>
        <input ref={inputLocation} type="text" name="" id="" />
        <button>Search</button>
      </form>
      {hasError ? (
        <h2> ❌ Hey you must provide an id from 1 to 126 🤔</h2>
      ) : (
        <>
          <LocationCard location={location} />
          <div className="resident__container">
            {location?.residents.map((url) => (
              <ResidentsCard key={url} url={url} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
