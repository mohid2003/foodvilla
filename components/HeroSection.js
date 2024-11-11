import React from "react";
import { foodType } from "./Config";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="bg-[rgb(255,82,0)] relative pb-10 overflow-hidden" style={{backgroundColor:"rgb(239 239 241)"}}>
      <div className="w-1/5 absolute top-0 left-0 toRight-animate ">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" />
      </div>
      <div className="w-1/5 absolute top-0 right-0 toLeft-animate flex justify-end">
        <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" />
      </div>
      <div className="container">
        <div className="flex items-center justify-center flex-col p-20 font-bold">
            <h2 className="text-center md:text-5xl sm:text-3xl">Craving something? Order food & groceries with Food Villa!</h2>
            <div className="Search">
          <a href="#restaurants" className="relative flex justify-end items-center">
            <input
              type="text"
              id="search"
              placeholder="Search for restaurant, item or more"
              className="border border-gray-600 p-3 w-80 border-none rounded-lg focus:border-red-600 outline-none f"
            />
            <span className="absolute mr-2"><img src="https://cdn-icons-png.flaticon.com/512/15953/15953176.png" className="w-6" /></span>
          </a>

        </div>
        </div>

        <div className="flex gap-5 flex-wrap justify-center">{foodType.map((food, index)=>{
            return (
                <Link key={food.id} to={`/collection/${food.id}/${food.collectionId}`} className="food-animate foodType" style={{ animationDelay: `${index * 0.2}s` }} >
                 <div>
                    <img src={food.imageUrl} className="w-52 md:w-48 sm:w-20"/>
                </div></Link>
               
            )
        })}</div>
        
      </div>
    </div>
  );
};

export default HeroSection;
