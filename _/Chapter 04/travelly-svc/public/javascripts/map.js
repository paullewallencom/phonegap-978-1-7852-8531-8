$(function() {
	var map = initialize();
	centerMap(map);
	getPictures(function(pictures) {
        console.log('Successfully retrieved ' + pictures.length + ' pictures');
        for (var i = 0; i < pictures.length; i++) {
            addMarker(pictures[i], map);
        }
	});
});

function initialize() {

    var mapOptions = {
        zoom: 20
    };
    return new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

function grabMyPosition(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(callback);
    } else {
        alert("The browser doesn't support navigator.geolocation");
    }
}

function centerMap(map) {

	grabMyPosition(function(position) {
	
	    var coords = new google.maps.LatLng(
	        position.coords.latitude,
	        position.coords.longitude
	    );

	    map.setCenter(coords);

	});
}

function addMarker(picture, map) {

    var self = this;

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(picture.lat, picture.lon),
        title: picture.title,
        icon: 'images/camera.png',
        picture: picture
    });


    google.maps.event.addListener(marker, 'click', function() {

    	var marker = this;
		var infoWindow = new google.maps.InfoWindow();
		var info = '<div class="map-marker no-scrollbar">' +
					    '<div><strong>' + marker.picture.title + '</strong></div>' +
					    '<div>' +
				            '<img src="uploads/' + marker.picture.fileName + '" title="' + marker.picture.title + '" />' +
					    '</div>' +
					'</div>';

        infoWindow.setContent(info);
        infoWindow.open(map, marker);

    });

}

function getPictures(callback) {
    $.ajax({
        type: 'GET',
        url: '/pictures?access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NGM1NWFhYzE0YjU4MTdlNGYwZWQzNDQiLCJleHAiOjE0MjI5MTczNTM0MjR9.3YmG3cVmArxA_DANwqJ2NqUjv2aeT6_qsMnFvgqTH58',
        success: function(resp) {
        	if (callback) callback(resp);
        },
        error: function(error) {
        	console.log(error);
        	if (callback) callback(error);
        }
    });
}