const contentDiv = document.querySelector('#content')

function elementFactory(type,id,text) {
    const el = document.createElement(type)
    el.innerText = text
    el.id = id
    return el
}

function HomeTab () {
    contentDiv.innerHTML = ''
    const restaurantNameDiv = elementFactory('div','restaurant-name','NOME DO RESTAURANTE')

    const restaurantText = elementFactory('div','restaurant-text','RESTAURANTE MUITO BOM!')

    const restaurantHour = elementFactory('div','restaurant-hour','12H - 18H')

    const restaurantLocal = elementFactory('div','restaurant-local','RUA DOS RESTAURANTE 123')

    contentDiv.append(
                restaurantNameDiv,
                restaurantText,
                restaurantHour,
                restaurantLocal)
}

function MenuTab () {
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

function AboutTab() {
    contentDiv.innerHTML = ''

    const aboutTab = elementFactory('div','restaurant-about','ABOUT')

    const contact = elementFactory('div','restaurant-contact','CHEF CONTACT')

    const contactName = elementFactory('p','restaurant-contact-name','CONTACT NAME: COOL NAME')

    const contactNum = elementFactory('p','restaurant-contact-num','CONTACT NUMBER: 99 99999999')

    const contactEmail = elementFactory('p','restaurant-contact-EMAIL','CONTACT EMAIL: TESTE-EMAIL@EMAIL.COM')

    contact.append(contactName,contactNum,contactEmail)

    contentDiv.append(aboutTab,contact)
}
// LINKAR AS FUNÇÕES COM CADA DIV NAV

const homeButton = document.querySelector('#home')
homeButton.addEventListener('click',HomeTab)

const menuButton = document.querySelector('#menu')
menuButton.addEventListener('click',MenuTab)

const aboutButton = document.querySelector('#about')
aboutButton.addEventListener('click',AboutTab)

import './styles.css';