import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        items: [],
    },
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload)
            
        },
        clearCart:(state,action)=>{
            state.items = []
        },

        removeItem:(state,action)=>{
            state.items = state.items.filter(item => item.id !== action.payload)
        }
    }
})

export const {addItem, clearCart, removeItem} = cartSlice.actions
export default cartSlice.reducer



// Assume data is passing like this
// cartSlice = {
//     actions:{
//         addItem,
//         clearCart,
//         removeItem
//     },

//     reducer:reducers
// }