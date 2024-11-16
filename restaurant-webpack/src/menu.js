import elementFactory from "./elementFactory";

function MenuTab (contentDiv) {
    contentDiv.innerHTML = ''

    const restaurantMenuDiv = elementFactory('div','restaurant-menu','MENU')

    const restaurantDrinksDiv = elementFactory('div','food-category-bebida','BEBIDAS')

    const drink1OptionTitle = elementFactory('h1','drink-title','DRINK TITLE')

    const drink1OptionDescript = elementFactory('p','drink-descript','DRINK DESCRIPTION BETTER DRINK!')

    const drink1OptionPrice = elementFactory('p','drink-price','$ 15.00')

    const restaurantFoodsDiv = elementFactory('div','food-category-entrada','ENTRADAS')

    const food1OptionTitle = elementFactory('h1','food-title','FOOD TITLE')

    const food1OptionDescript = elementFactory('p','food-descript','FOOD DESCRIPTION BETTER FOOD!')

    const food1OptionPrice = elementFactory('p','food-price','$ 35.00')

    restaurantFoodsDiv.append(
        food1OptionTitle,
        food1OptionDescript,
        food1OptionPrice)

    restaurantDrinksDiv.append(
            drink1OptionTitle,
            drink1OptionDescript,
            drink1OptionPrice)

    contentDiv.append(
            restaurantMenuDiv,
            restaurantDrinksDiv,
            restaurantFoodsDiv)
    
}

export default MenuTab;