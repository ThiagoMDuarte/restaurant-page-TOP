import elementFactory from './elementFactory'

function HomeTab (contentDiv) {
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

export default HomeTab;