/* 
MENU TAB
    menu
    categoria do prato (bebidas - entrada - principal)
    prato
        H- nome
        P- descricao
        P- valor

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
    contentDiv.appendChild(el)
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

}
HomeTab()