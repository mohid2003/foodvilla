// import {CLOUDINARY_URL} from "/Config"

import { CLOUDINARY_URL } from "./Config";

let Card =(prop)=>{
  //  console.log(CLOUDINARY_URL)
  // console.log(CLOUDINARY_URL)
    let resto = prop.prop.info;
    return(
        <div className="card">
            <img src={`${CLOUDINARY_URL}${resto.cloudinaryImageId}`} />
            <div>
            <h4>{resto.name}</h4>
            <p className="text-xs text-gray-500 my-2" ><strong>Cuisines : </strong>{resto.cuisines.join(", ")} </p>
            <div className="rating">
              <div>Ratings {resto.avgRatingString}</div>
              <div>{resto.totalRatingsString}</div>
            </div>
            </div>
            
          </div>
    
)}

export default Card;