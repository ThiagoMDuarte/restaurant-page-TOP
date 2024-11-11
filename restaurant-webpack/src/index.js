/* 
HOME TAB
    Nome do Restaurante
    Texto sobre o restaurante
    Horario de funcionamento
    Local

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
    contentDiv.appendChild(el)git add .add
    return el
}
