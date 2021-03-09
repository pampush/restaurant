const contentRender = function(data) {
    let main = document.createElement('main')
    main.classList.add('content-main')
    for(let item of data['content']) {
        let mainItem = document.createElement('div')
        mainItem.classList.add('main-item')

        let mainItemCard = document.createElement('div')
        mainItemCard.classList.add('main-item__card') 

        let mainItemCardHeader = document.createElement('span')
        mainItemCardHeader.classList.add('main-item__card-header')
        mainItemCardHeader.textContent = item.name

        let mainItemCardPic = document.createElement('img')
        mainItemCardPic.classList.add('main-item__card-pic')
        mainItemCardPic.setAttribute('src', item.pic)

        let mainItemCardDesc = document.createElement('div')
        mainItemCardDesc.classList.add('main-item__card-desc')
        mainItemCardDesc.textContent = item.price

        mainItemCard.append(mainItemCardPic)
        mainItemCard.append(mainItemCardHeader)
        mainItemCard.append(mainItemCardDesc)
        mainItem.append(mainItemCard)
        main.append(mainItem)
    }
    return main
}

export default contentRender