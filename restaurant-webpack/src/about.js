import elementFactory from "./elementFactory";

function AboutTab(contentDiv) {
    contentDiv.innerHTML = ''

    const aboutTab = elementFactory('div','restaurant-about','ABOUT')

    const contact = elementFactory('div','restaurant-contact','CHEF CONTACT')

    const contactName = elementFactory('p','restaurant-contact-name','CONTACT NAME: COOL NAME')

    const contactNum = elementFactory('p','restaurant-contact-num','CONTACT NUMBER: 99 99999999')

    const contactEmail = elementFactory('p','restaurant-contact-EMAIL','CONTACT EMAIL: TESTE-EMAIL@EMAIL.COM')

    contact.append(contactName,contactNum,contactEmail)

    contentDiv.append(aboutTab,contact)
}

export default AboutTab;