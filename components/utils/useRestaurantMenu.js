import { useState, useEffect } from "react";

const useRestaurantMenu = (restaurantId) => {
    const [restaurantMenu, setRestaurantMenu] = useState([])
    const [currentRestaurant, setCurrentRestaurant] = useState([])

    async function getMenu(){
        let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${restaurantId}&catalog_qa=undefined&submitAction=ENTER`)
        let json = await data.json()

        let menu = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card.itemCards
        let resto = json?.data?.cards[2].card.card.info
        // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card.itemCards)
        setRestaurantMenu(menu)
        setCurrentRestaurant(resto)

    } 

    

    useEffect(()=>{
        getMenu()
    },[])

    return { restaurantMenu, currentRestaurant };
}
    
export default useRestaurantMenu;
