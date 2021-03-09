/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 91:
/***/ (() => {


;// CONCATENATED MODULE: ./src/header.js
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

/* harmony default export */ const header = (headerRender);
;// CONCATENATED MODULE: ./src/content.js
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

/* harmony default export */ const content = (contentRender);
;// CONCATENATED MODULE: ./src/home.js
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

/* harmony default export */ const home = (homeRender);
;// CONCATENATED MODULE: ./src/footer.js
const footerRender = function(data) {
    let footer = document.createElement('footer')
    footer.classList.add('footer-container')
    return footer  
}

/* harmony default export */ const footer = (footerRender);
;// CONCATENATED MODULE: ./src/eventEmitter.js
const eventEmitter = (function event() {
    let events = {};
    let last = undefined;
  
    let on = function(evt, handler) {
      (events[evt] || (events[evt] = [])).push(handler);
    }
  
    let emit = function(evt, ...arg) {
      last = evt;
      for(let item of events[evt])
        item(...arg);
    }
  
    let removeLastEventHandler = function() {
      events[last].pop(); // delete event[last]
    }
    
    let getEvents = function() {
      return {...events};
    }
  
    return {
      on,
      emit,
      removeLastEventHandler,
      getEvents
    }
  })();

/* harmony default export */ const src_eventEmitter = ((/* unused pure expression or super */ null && (eventEmitter)));
;// CONCATENATED MODULE: ./src/data.json
const data_namespaceObject = JSON.parse('{"header":["Home","Menu","Delivery","Contact"],"content":[{"name":"cappuccino","price":"2$","pic":"./static/img/cappuccino.png"},{"name":"mocha","price":"2.5$","pic":"./static/img/mocha.png"},{"name":"marochino","price":"2$","pic":"./static/img/marochino.png"},{"name":"rafcoffe","price":"2$","pic":"./static/img/rafcoffe.png"},{"name":"lattemacchiato","price":"2$","pic":"./static/img/lattemacchiato.png"},{"name":"latte","price":"2$","pic":"./static/img/latte.png"},{"name":"flatwhite","price":"2$","pic":"./static/img/flatwhite.png"},{"name":"breve","price":"2$","pic":"./static/img/breve.png"}],"footer":[],"home":{"header":"About us","description":[{"p":"Black, single origin, turkish affogato, instant macchiato galão grinder aged. Milk sit cream, grinder aged eu roast grounds. Est robust robusta, aromatic percolator roast, mug, coffee steamed irish aroma crema. Cortado decaffeinated cup strong, ut foam carajillo saucer ut café au lait foam skinny. Extra  froth irish, id java flavour filter mocha macchiato aftertaste medium."},{"p":"Kopi-luwak, bar  java pumpkin spice medium crema bar  caramelization grinder extraction rich. So eu java crema barista id ristretto id pumpkin spice cinnamon variety crema. That, steamed sweet cortado, dark turkish strong spoon aromatic dark viennese cinnamon. Cinnamon, id beans frappuccino beans white barista roast variety affogato organic. Qui as crema mocha cultivar grounds irish doppio."}]}}');
;// CONCATENATED MODULE: ./src/delivery.js
const deliveryRender = function (data) {
    let contentMain = document.createElement('div');
    contentMain.classList.add('content-main')

    let mapContainer = document.createElement('div')
    mapContainer.classList.add('map-container')

    let mapElem = document.createElement('div') 
    mapElem.id = 'map'

    mapContainer.append(mapElem)
    contentMain.append(mapContainer)

    return contentMain
};

// dynamically add google maps api script tag
(function () {
    let newScript = document.createElement("script");
    newScript.setAttribute('async', 'true')
    newScript.setAttribute('defer', 'true')
    newScript.setAttribute('type', "text/javascript")
    newScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAWq1mhQXvRE5-skUkM7jFAgmmeJEGNzq4";
    document.body.appendChild(newScript)
})();

const addMap = function() {
    let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 54.8983, lng: 38.0790 },
        zoom: 16, 
    });

    let marker = new google.maps.Marker({
        position: {lat: 54.8983, lng: 38.0790},
        map: map
    })
}


;// CONCATENATED MODULE: ./src/index.js










let container = document.querySelector('.container')

let src_header = header(data_namespaceObject)
let src_content = content(data_namespaceObject)
let src_home = home(data_namespaceObject)
let src_footer = footer(data_namespaceObject)
let delivery = deliveryRender()

src_header.addEventListener('click', (e) => {
    if(e.target.tagName == 'BUTTON') {
        container.querySelector('.content-main').remove()  
        
        if(e.target.value == 'Home') 
            container.insertBefore(src_home, src_footer)

        if(e.target.value == "Menu")
            container.insertBefore(src_content, src_footer)
        
        if(e.target.value == 'Delivery') {
            container.insertBefore(delivery, src_footer);
            addMap()
        }
    }
})
        

container.append(src_header)
container.append(src_home)
container.append(src_footer)




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__[91]();
/******/ 	
/******/ })()
;