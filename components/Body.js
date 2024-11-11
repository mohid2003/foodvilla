import restaurntList from "./Config";
import Card from "./Card";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "./utils/helper";
import useRestaurant from "./utils/useRestaurant";
import useOnline from "./utils/useOnline";
import UserContext from "./utils/UserContext";
import HeroSection from "./HeroSection";
import Example from "./NavbarDefault";

let Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const { restaurants, filteredrestaurants, setFilteredrestaurants } = useRestaurant();

  const { user, setUser } = useContext(UserContext);

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>Offline</h1>;
  }

  return (
    <div className="main">
      
      {/* <Example /> */}
      <HeroSection />
      <div className="Search pt-8" id="search">
        <input
          type="text"
          
          placeholder="Search for a restaurant"
          className="border border-gray-300 p-3 rounded-xl"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />

        <button className="button-82-pushable" role="button" onClick={() => {
            let data = filterData(searchTxt, restaurants);
            setFilteredrestaurants(data);
          }}>
                  <span className="button-82-shadow"></span>
                  <span className="button-82-edge"></span>
                  <span className="button-82-front text">
                  Search
                  </span>
                </button>
      </div>
      <div id="restaurants">
      {restaurants?.length == 0 ? (
        <Shimmer filterdResto={filteredrestaurants.length} />
      ) : (
        <div className="restaurantsList">
          {filteredrestaurants?.length == 0 ? (
            <h1>Hotel not found</h1>
          ) : (
            filteredrestaurants?.map((restaurant) => (
              <Link
                to={`/restaurants/${restaurant.info.id}`}
                key={restaurant.info.id}>
                <Card prop={restaurant} />
              </Link>
            ))
          )}
        </div>
      )}
      </div>
    </div>
  );
};

export default Body;
