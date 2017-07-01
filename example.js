function rescale(bound,mapID, elementId, elementposition) {
    var mapwidth = document.getElementById(mapID).offsetWidth,
        elementwidth = document.getElementById(elementId).offsetWidth,
        mapheight = document.getElementById(mapID).offsetHeight,
        elementheight = document.getElementById(elementId).offsetHeight,
        ratio = elementwidth / mapwidth,
        ratio2 = elementheight / mapheight; //Not used for left-right;

    //Checking if your element is taking more of width, or height of the map
    
        if(elementposition=="right"){
            bound.b.f = bound.b.b + (Math.abs(Math.abs(bound.b.f) - bound.b.b) / (1 - ratio))
        }
        if(elementposition=="left"){
            bound.b.b = bound.b.f - (Math.abs(Math.abs(bound.b.f) - bound.b.b) / (1 - ratio))
        }
 

    return bound
}



//Example use:
googleservice.directionsDisplay.setDirections(response);
googleservice.map.fitBounds(rescale(response.routes[0].bounds))