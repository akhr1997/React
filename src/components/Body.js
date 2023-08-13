import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState(resList);

  // {
  //   data: {
  //     name: "KFC",
  //     cuisines: "Burger",
  //     avgRating: 4,
  //     costForTwo: 500,
  //     deliveryTime: 36,
  //   },
  // },
  // {
  //   data: {
  //     name: "KFC",
  //     cuisines: "Burger",
  //     avgRating: 4,
  //     costForTwo: 500,
  //     deliveryTime: 36,
  //   },
  // },

  // useEffect(() => {
  //   fetchData();
  // }, [])

  // fetchData = () =>{
  //   const data = fetch("");
  //   const json = data.json();
  //   setListOfRestraunt(json.data.data......)
  // }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
