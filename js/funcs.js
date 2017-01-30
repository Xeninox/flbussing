function initMap() {
	var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 6,
		center: {lat: 5.759928, lng: -0.219804}
	});
	directionsDisplay.setMap(map);

	document.getElementById('submit').addEventListener('click', function() {
		calculateAndDisplayRoute(directionsService, directionsDisplay);
	});
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	var startLocation = document.getElementById('start').value;
	/* Ashesi Routes */
	if (startLocation == "Ashesi"){
		var waypts = [];
		var first = new google.maps.LatLng(5.759928, -0.219804);
		var second = new google.maps.LatLng(5.6959660, -0.2484250);
		var third = new google.maps.LatLng(5.656149, -0.166920);
		
		waypts.push({
			location: first,
			stopover: true
		});

		waypts.push({
			location: second,
			stopover: true
		});

		waypts.push({
			location: third,
			stopover: true
		});

		drawRoute(first, third, waypts,directionsService, directionsDisplay);
	} else {
		alert("None");
	}
	
}

function drawRoute (start, end, waypts,directionsService, directionsDisplay ){
	directionsService.route({
		origin: start,
		destination: end,
		waypoints: waypts,
		optimizeWaypoints: true,
		travelMode: 'DRIVING'
	}, function(response, status) {
		if (status === 'OK') {
			directionsDisplay.setDirections(response);
			var route = response.routes[0];

		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}
