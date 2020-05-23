var map;
var homeMap = {
    lat: 40.686676,
    lng: -73.992379
}
var bigMarker = '/images/mark.png';
var smallMarker = '/images/small.png';
var colorMarker = '/images/color.png';

var icons = {
    home: {
        icon: '/images/mark.png'
    },
    bike: {
        icon: '/images/small.png'
    }
}


function addMarker(props) {
    var marker = new google.maps.Marker({
        position: props.coords,
        map: map,
        icon: props.icon
    });

    google.maps.event.addListener(marker, 'mouseover', function () {
        marker.setIcon(colorMarker);
    });
    google.maps.event.addListener(marker, 'mouseout', function () {
        marker.setIcon(smallMarker);
    });
}

window.onload = function () {
    initMap();
};

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: homeMap,
        zoom: 16,
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#c9c9c9"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }
        ]
    });

    var homeMapMarker = new google.maps.Marker({
        position: homeMap,
        map: map,
        icon: bigMarker,
    })

    addMarker({
        coords: {
            lat: 40.688584,
            lng: -73.991102
        },
        icon: '/images/small.png'
    })

    addMarker({
        coords: {
            lat: 40.688625,
            lng: -73.993956
        },
        icon: '/images/small.png'
    })

    addMarker({
        coords: {
            lat: 40.682771,
            lng: -73.992692
        },
        icon: '/images/small.png'
    })

    addMarker({
        coords: {
            lat: 40.688133,
            lng: -73.989960
        },
        icon: '/images/small.png'
    })

    addMarker({
        coords: {
            lat: 40.682820,
            lng: -73.994843
        },
        icon: '/images/small.png'
    })

    addMarker({
        coords: {
            lat: 40.684642,
            lng: -73.991313
        },
        icon: '/images/small.png'
    })



}