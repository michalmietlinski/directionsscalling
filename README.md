# directionsscalling
### Scalling map on directions result so markers are not covered by controll window ###


## Why? ##
When you display directions and have controls over significant part of the map, google will probably display one of the markers under control div. 

## What does this code do? ##
It get's element to whole map ratio and scale response bound so they fit in remaining space

## What to remember? ##
In direction renderer set as option:
```javascript
preserveViewport: true
```

Then on directions display set new map bounds using result of this code as an argument
```javascript
Your directionfunction.setDirections(response)
Your MAP.fitBounds(rescale(response.routes[0].bounds))

```

##Arguments ##
bound-pass bound from response of direction service
element- pass id of your control div hovering over map
elementposition- pass left or right (or just add top/bottom option)