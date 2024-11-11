// import {CLOUDINARY_URL} from "/Config"

import { CLOUDINARY_URL } from "./Config";

const CartItems =(itemInfo)=>{

    let resto = itemInfo;
    console.log("Resto"+resto)
    return(
        <div className="card">
            <img src={`${CLOUDINARY_URL}${resto.cloudinaryImageId}`} />
            <div>
            <h4>{resto.name}</h4>
            <p>{resto.itemAttribute.vegClassifier}</p>
            <p>{"Price - "+resto.price/100 }</p>

            </div>
            
          </div>
    
)}

export default CartItems;