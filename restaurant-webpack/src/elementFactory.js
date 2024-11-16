function elementFactory(type, id, text) {
    const el = document.createElement(type);
    el.innerText = text;
    el.id = id;
    return el;
}

export default elementFactory;
