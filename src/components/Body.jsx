import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockedData";

import { useState } from "react";

const Body = () => {
  const [data, setData] = useState(resData);

  return (
    <div className="body">
      <div className="filter">
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
        {data.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
