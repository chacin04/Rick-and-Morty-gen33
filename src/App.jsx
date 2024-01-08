import { useEffect, useRef, useState } from "react";
import "./App.css";
import useFetch from "./hooks/useFetch";
import getRandomNumber from "./utils/getRandomNumber";
import { LocationCard } from "./components/LocationCard";
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
      <figure className="Banner">
        <img src="https://wallpapercrafter.com/desktop/105608-Rick-and-Morty-Run-the-Jewels-vector-graphics.png" alt="" />
        </figure>
      <form className="Search" onSubmit={handleSubmit}>
        <input className="Search__input" ref={inputLocation} type="text" name="" id="" />
        <button className="Search__button">Search</button>
      </form>
      {hasError ? (
        <>
           <h2> ❌ Hey you must provide an id from 1 to 126 🤔</h2>
           <img src="https://cdn.mos.cms.futurecdn.net/uHGV2hhSUvSD7Mvbh8hKsV.jpg" alt="" />
        </>        
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
