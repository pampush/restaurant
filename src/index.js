import "normalize.css"
import "./style.sass";
import headerRender from './header'
import contentRender from './content'
import homeRender from './home'
import footerRender from './footer'
import eventEmitter from './eventEmitter'
import data from './data'
import {addMap, deliveryRender} from "./delivery";

let container = document.querySelector('.container')

let header = headerRender(data)
let content = contentRender(data)
let home = homeRender(data)
let footer = footerRender(data)
let delivery = deliveryRender()

header.addEventListener('click', (e) => {
    if(e.target.tagName == 'BUTTON') {
        container.querySelector('.content-main').remove()  
        
        if(e.target.value == 'Home') 
            container.insertBefore(home, footer)

        if(e.target.value == "Menu")
            container.insertBefore(content, footer)
        
        if(e.target.value == 'Delivery') {
            container.insertBefore(delivery, footer);
            addMap()
        }
    }
})
        

container.append(header)
container.append(home)
container.append(footer)


