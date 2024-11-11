import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store from './utils/store';
import CartItems from './CartItems';
import { CLOUDINARY_URL } from "./Config";
import { removeItem } from './utils/cartSlice';




const Cart = () => {
    const cart = useSelector((store)=>store.cart.items)
    console.log(cart.length)

    const dispatch = useDispatch()

    const handleRemoveItem =(item)=>{
      dispatch(removeItem(item))
    }
  return (
    <div className='mt-5 container'>
      <p>Total Items - {cart.length}</p>
      <div className='flex justify-evenly mt-5 flex-wrap gap-5'>
      {cart.map((item)=>
            <div className="card relative" key={item.id}>
                {(item.imageId)?<img src={`${CLOUDINARY_URL}${item.imageId}`} />:<img src='https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png' />}
            
            <div>
            <h4>{item.name}</h4>
            <p>{item.itemAttribute.vegClassifier}</p>
            <p>{"Price - "+item.price/100 }</p>

            </div>
            <button onClick={()=>handleRemoveItem(item.id)} className='absolute top-0 right-0 bg-red-500 text-white p-3 px-6 rounded-bl-xl'> X</button>
            
          </div>
        )}
      </div>

    </div>
  )
}

export default Cart