const homeRender = function(data) {
    let section = document.createElement('div')
    section.classList.add('content-main')

    let homeContainer = document.createElement('section')
    homeContainer.classList.add('home-container')

    let sectionHeader = document.createElement('h1')
    sectionHeader.classList.add('home-container__header')
    sectionHeader.textContent = data.home.header

    let sectionP = document.createElement('p')
    sectionP.classList.add('home-container__p')
    for(let value of data.home.description)
        sectionP.textContent = value.p

    homeContainer.append(sectionHeader)
    homeContainer.append(sectionP)
    section.append(homeContainer)

    return section
} 

export default homeRender