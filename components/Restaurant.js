import { useEffect, useState } from "react";
import { CLOUDINARY_URL } from "./Config";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "./utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";
const { useParams } = require("react-router-dom");

const Restaurant = () => {
  const { id } = useParams();

  const { restaurantMenu, currentRestaurant } = useRestaurantMenu(id);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  // console.log(restaurantMenu);

  return restaurantMenu?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="container flex gap-8 flex-col justify-center">
      <div className="flex flex-wrap gap-5 justify-center items-center">
      <div><img
        src={`${CLOUDINARY_URL}${currentRestaurant?.cloudinaryImageId}`}
        className="h-64 rounded-md"
      /></div>
        <div className="">
          <h1 className="text-3xl font-bold">{currentRestaurant.name}</h1>
          <p className="text-xs text-gray-500 my-2">
            <strong>Cuisines : </strong>
            {currentRestaurant.cuisines.join(", ")}{" "}
          </p>
          <div className="relative w-52">
            <div className="rating text-sm mb-3">
              <div className="flex gap-2 bg-white">
                <span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrl1EcDgj34QIiZCDLZhQNTSLKMM2pZK9ew&s"
                    className="h-5"
                  />
                </span>{" "}
                {currentRestaurant.avgRatingString}
              </div>
              <div>{currentRestaurant.totalRatingsString}</div>
            </div>

            <p className="text-sm mt-2">{currentRestaurant?.labels[1].message}</p>
          </div>
        </div>
       
      </div>

      

      <div className="">
        <ul className="flex flex-wrap justify-between">
          {restaurantMenu?.length !== 0 ? (
            restaurantMenu?.map((item, i) => (
              <li
                className="flex items-start gap-2 justify-between md:w-3/12 border-b border-gray-200 m-8"
                key={item.card.info.id}>
                  <div className="flex flex-col gap-2 align-top h-full justify-between">
                  <p>{item.card.info.name}</p>
                  {/* <p>{ "₹" +item.card.info.price/100}</p> */}
                <button className="button-82-pushable" role="button" onClick={() => handleAddItem(item.card.info)}>
                  <span className="button-82-shadow"></span>
                  <span className="button-82-edge"></span>
                  <span className="button-82-front text">
                    { "₹" +item.card.info.price/100}
                  </span>
                </button>
                
                  </div>
                
                <div className="flex flex-wrap gap-2 relative">
                <img src={`${CLOUDINARY_URL}${item.card.info.imageId}`} className=" Menuimage" />
               
                </div>
                
              </li>
            ))
          ) : (
            <h2>Menu is not available currently</h2>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Restaurant;
