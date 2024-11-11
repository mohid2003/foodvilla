import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { CLOUDINARY_URL } from "./Config";

const Collection = () => {
  const [foodType, setFoodType] = useState({});
  const { food, collectionId } = useParams();

  // console.log(food,collectionId);

  const getFood = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&collection=${collectionId}&tags=layout_CCS_${food}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
    );
    const response = await data.json();
    setFoodType(response.data);
  };

  // console.log(foodType.cards[0])
  useEffect(() => {
    getFood();
  }, []);

  if (!foodType.cards) {
    return (
      <div>
        <Shimmer />
      </div>
    ); // Show a loading state until the data is available
  }
  return (
    <div className="row">
      <div className="container">
        <h1 className="text-4xl mt-10 mb-5">{foodType?.cards[0].card.card.title}</h1>
        <p className="text-gray-600 mb-3">{foodType?.cards[0].card.card.description}</p>
        <hr></hr>
        <p className="text-2xl font-medium mt-12 mb-10">{foodType?.cards[2].card?.card?.gridElements?.infoWithStyle?.text}</p>
        <div className="flex justify-evenly flex-wrap gap-5">
          {foodType.cards
            ?.filter((resto) => resto?.card?.card?.info)
            .map((resto2) => {
              let resto = resto2?.card?.card?.info;
              return (
                <Link key={resto.id} to={`/restaurants/${resto.id}`} className="flex">
                  <div
                    className="card"
                    >
                    {console.log(resto2?.card?.card?.info.name)}
                    <img src={`${CLOUDINARY_URL}${resto.cloudinaryImageId}`} />
                    <div>
                      <h4>{resto.name}</h4>
                      <p style={{ color: "gray", fontSize: "12px" }}>
                        <strong>Cuisines : </strong>
                        {/* {resto.cuisines.join(", ")}{" "} */}
                      </p>
                      <div className="rating">
                        <div>Ratings {resto.avgRatingString}</div>
                        <div>{resto.totalRatingsString}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}

          {/* <div className="card">
            <img src={`${CLOUDINARY_URL}${resto.cloudinaryImageId}`} />
            <div>
              <h4>{resto.name}</h4>
              <p style={{ color: "gray", fontSize: "12px" }}>
                <strong>Cuisines : </strong>
                {resto.cuisines.join(", ")}{" "}
              </p>
              <div className="rating">
                <div>Ratings {resto.avgRatingString}</div>
                <div>{resto.totalRatingsString}</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Collection;
