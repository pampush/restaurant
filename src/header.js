const headerRender = function(data) {
    let header = document.createElement('div')
    header.classList.add('header-main')
    let headerMainTop = createElem('div', 'header-main-top')
    let headerMainBottom = createElem('nav', 'header-main__bottom')
    header.append(headerMainTop, headerMainBottom)

    for(let value of data['header']) {
        let button = createElem('button', 'header-main__bottom-button')
        button.setAttribute('type', 'button')
        button.setAttribute('value', value)
        button.textContent = value
        headerMainBottom.append(button)
    }

    return header
}

function createElem(elem, classlist) {
    let e = document.createElement(elem)
    e.classList.add(classlist)
    return e
}

export default headerRender