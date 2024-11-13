/* 


ABOUT TAB
    about
    contato
        nome
        numero
        email
*/
const contentDiv = document.querySelector('#content')

function elementFactory(type,id,text) {
    const el = document.createElement(type)
    el.innerText = text
    el.id = id
    return el
}

function HomeTab () {
    /* HOME TAB
    Nome do Restaurante
    Texto sobre o restaurante
    Horario de funcionamento
    Local */
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
    /* MENU TAB
    menu
    categoria do prato (bebidas - entrada - principal)
        H- nome
        P- descricao
        P- valor */
    const restaurantMenuDiv = elementFactory('div','restaurant-menu','MENU')

    const restaurantDrinksDiv = elementFactory('div','food-category-bebida','BEBIDAS')

    const drink1OptionTitle = elementFactory('h1','drink-title','DRINK TITLE')

    const drink1OptionDescript = elementFactory('p','drink-descript','DRINK DESCRIPTION BETTER DRINK!')

    const drink1OptionPrice = elementFactory('p','drink-price','$ 15.00')

    restaurantDrinksDiv.append(
            drink1OptionTitle,
            drink1OptionDescript,
            drink1OptionPrice)

    contentDiv.append(
            restaurantMenuDiv,
            restaurantDrinksDiv)
    
}

HomeTab()