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
		var last = new google.maps.LatLng(5.656149, -0.166920);
		
		waypts.push({
			location: first,
			stopover: true
		});

		waypts.push({
			location: second,
			stopover: true
		});

		waypts.push({
			location: last,
			stopover: true
		});

		drawRoute(first, last, waypts,directionsService, directionsDisplay);
	} else if (startLocation == "Kasoa") {
		/* Kasoa Route */
		var waypts = [];
		var first = new google.maps.LatLng(5.535471666666666, -0.3251383333333333);
		var second = new google.maps.LatLng(5.5206983, -0.3287233);
		var third = new google.maps.LatLng(5.5687933, -0.2867133);
		var last = new google.maps.LatLng(5.656149, -0.166920);
		
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

		waypts.push({
			location: last,
			stopover: true
		});

		drawRoute(first, last, waypts,directionsService, directionsDisplay);
	} else if (startLocation == "dansoman"){
		/* Dansoman/Mataheko Route */
		var waypts = [];
		var first = new google.maps.LatLng(5.5290906, -0.2648153);
		var second = new google.maps.LatLng(5.5581954, -0.2643071);
		var third = new google.maps.LatLng(5.5667785, -0.2582663);
		var fourth = new google.maps.LatLng(5.5756826, -0.2664449);
		var fifth = new google.maps.LatLng(5.5799275, -0.2644772);
		var sixth = new google.maps.LatLng(5.5768614, -0.2553992);
		var seventh = new google.maps.LatLng(5.5740855, -0.2533752);
		var eigth = new google.maps.LatLng(5.5693107, -0.2419316);
		var ninth = new google.maps.LatLng(5.5643783, -0.2449333);
		var last = new google.maps.LatLng(5.656149, -0.166920);
		
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

		waypts.push({
			location: fourth,
			stopover: true
		});

		waypts.push({
			location: fifth,
			stopover: true
		});

		waypts.push({
			location: sixth,
			stopover: true
		});

		waypts.push({
			location: seventh,
			stopover: true
		});

		waypts.push({
			location: eigth,
			stopover: true
		});

		waypts.push({
			location: ninth,
			stopover: true
		});

		waypts.push({
			location: last,
			stopover: true
		});

		drawRoute(first, last, waypts,directionsService, directionsDisplay);
	} else if (startLocation == "zone_one"){
		/* Zone 1 */
		var waypts = [];
		var first = new google.maps.LatLng(5.535334979664371, -0.41843577291987233);
		var second = new google.maps.LatLng(5.535588786611796, -0.4119721865699972);
		var third = new google.maps.LatLng(5.5370099929919165, -0.4048015117866643);
		var fourth = new google.maps.LatLng(5.53791228363245, -0.40143478411076866);
		var fifth = new google.maps.LatLng(5.5474072, -0.3388907);
		var sixth = new google.maps.LatLng(5.5407413310737095, -0.39482077328009857);
		var seventh = new google.maps.LatLng(5.6599108, -0.163592);
		var eigth = new google.maps.LatLng(5.546288726737834, -0.38309058021908965);
		var ninth = new google.maps.LatLng(5.552155711525277, -0.3590551703380413);
		var tenth = new google.maps.LatLng(5.550785404518061, -0.3556334257422204);
		var eleven = new google.maps.LatLng(5.548055629142647, -0.3493691968630626);
		var twelve = new google.maps.LatLng(5.546016855969355, -0.3434886023622331);
		var thirteen = new google.maps.LatLng(5.5591739, -0.2968124);
		var fourteen = new google.maps.LatLng(5.55568176300134, -0.30391965843008467);
		var fifteen = new google.maps.LatLng(5.5528312, -0.3271016);
		var sixteen = new google.maps.LatLng(5.5564659, -0.3083599);
		var seventeen = new google.maps.LatLng(5.556844, -0.3083782);
		var last = new google.maps.LatLng(5.656149, -0.166920);
		
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

		waypts.push({
			location: fourth,
			stopover: true
		});

		waypts.push({
			location: fifth,
			stopover: true
		});

		waypts.push({
			location: sixth,
			stopover: true
		});

		waypts.push({
			location: seventh,
			stopover: true
		});

		waypts.push({
			location: eigth,
			stopover: true
		});

		waypts.push({
			location: ninth,
			stopover: true
		});

		waypts.push({
			location: tenth,
			stopover: true
		});

		waypts.push({
			location: eleven,
			stopover: true
		});

		waypts.push({
			location: twelve,
			stopover: true
		});

		waypts.push({
			location: thirteen,
			stopover: true
		});

		waypts.push({
			location: fourteen,
			stopover: true
		});

		waypts.push({
			location: fifteen,
			stopover: true
		});

		waypts.push({
			location: sixteen,
			stopover: true
		});

		waypts.push({
			location: seventeen,
			stopover: true
		});

		waypts.push({
			location: last,
			stopover: true
		});

		drawRoute(first, last, waypts,directionsService, directionsDisplay);
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
