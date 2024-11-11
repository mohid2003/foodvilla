import { useEffect, useState } from "react";

const useRestaurant =()=>{

    const [restaurants, setRestaurants] = useState([]);
    const [filteredrestaurants, setFilteredrestaurants] = useState([]);

    async function swiggyData() {
        let data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let json = await data.json();
        let fetchedData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurants(fetchedData);
        setFilteredrestaurants(fetchedData);
      }
    
      useEffect(() => {
        swiggyData();
      }, []);
      return {restaurants,filteredrestaurants, setFilteredrestaurants}
}


export default useRestaurant;