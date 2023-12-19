import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";
import restaurantData from "../utils/restaurantData";
import Shimmer from "./Shimmer";
const Body = () => {
  const [data, setData] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetchRestaurants();
    //const data = await fetch(url);
    // const resp = await data.json();
    setData(data);
    setFilteredRestaurant(data);
  };

  const fetchRestaurants = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(restaurantData);
      }, 2000);
    });
  };

  return filteredRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredList = data.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setData([data[0]]);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
