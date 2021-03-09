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

export {addMap, deliveryRender}