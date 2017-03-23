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
		var eiteen = new google.maps.LatLng(5.5358260, -0.3254710);
		var nineteen = new google.maps.LatLng(5.5206980, 0.3287230);
		var twenty = new google.maps.LatLng(5.5308480, -0.4009450);
		var twentyone = new google.maps.LatLng(5.5380770, -0.4009840);
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
			location: eiteen,
			stopover: true
		});
		waypts.push({
			location: nineteen,
			stopover: true
		});
		waypts.push({
			location: twenty,
			stopover: true
		});
		waypts.push({
			location: twentyone,
			stopover: true
		});

		waypts.push({
			location: last,
			stopover: true
		});

		drawRoute(first, last, waypts,directionsService, directionsDisplay);
	}

	//zone 2
else if (startLocation == "zone_two"){
		var waypts = [];
		var first = new google.maps.LatLng(5.6280630, -0.2609510);
		var second = new google.maps.LatLng(5.6208390, -0.2657080);
		var third = new google.maps.LatLng(5.6037330, -0.2558990);
		var fourth = new google.maps.LatLng(5.5096100, -0.5147150);
		var last = new google.maps.LatLng(5.6064750, -0.2489270);
		
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
			location: last,
			stopover: true
		});

		drawRoute(first, last, waypts,directionsService, directionsDisplay);
	}

	//zone 3
	else if (startLocation == "zone_three"){
		/* Zone 3 */
		var waypts = [];
		var first = new google.maps.LatLng(5.526800, -0.4808500);
		var second = new google.maps.LatLng(5.5213920, -0.4068540);
		var third = new google.maps.LatLng(5.5220210, -0.4750870);
		var fourth = new google.maps.LatLng(5.5096100, -0.5147150);
		var fifth = new google.maps.LatLng(5.5096100, -0.5147150);
		var sixth = new google.maps.LatLng(5.6504590, -0.1755210);
		var seventh = new google.maps.LatLng(5.6416530, -0.1621430);
		var eigth = new google.maps.LatLng(5.6481250, -0.1509390);
		var ninth = new google.maps.LatLng(5.6483250, -0.1394710);
		var tenth = new google.maps.LatLng(5.6612450, -0.1594160);
		var eleven = new google.maps.LatLng(5.6406460, -0.1784260);
		var twelve = new google.maps.LatLng(5.8078110, 0.0091410);
		var thirteen = new google.maps.LatLng( 5.6576640, -0.0132540);
		var fourteen = new google.maps.LatLng(5.6854030, -0.0314820);
		var fifteen = new google.maps.LatLng(5.6507100, -0.1861260);
		var sixteen = new google.maps.LatLng(5.6499930, -0.1853780);
		var seventeen = new google.maps.LatLng(5.6570260, -0.1813390);
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
			location: last,
			stopover: true
		});

		drawRoute(first, last, waypts,directionsService, directionsDisplay);
	}
	

	//zone 4
	else if (startLocation == "zone_four"){
		var waypts = [];
		var first = new google.maps.LatLng(5.5598730, -0.2427900);		
		var second = new google.maps.LatLng(5.9065020, -0.15520540);		

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
	}


	//zone 5
	else if (startLocation == "zone_five"){
		var waypts = [];
		var first = new google.maps.LatLng(5.5548640, -0.2050200);
		var second = new google.maps.LatLng(5.5610000, -0.2092200);
		
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
	}

	//zone 6
	else if (startLocation == "zone_six"){
		var waypts = [];
		var first = new google.maps.LatLng(5.6583100, -0.2742750);
		var second = new google.maps.LatLng(5.6503320, -0.253580);
		var third = new google.maps.LatLng(5.6581510, -0.2661730);
		var fourth = new google.maps.LatLng(5.6991980, -0.2924430);
		
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
			location: last,
			stopover: true
		});

		drawRoute(first, last, waypts,directionsService, directionsDisplay);
	}

	//zone 9
	else if (startLocation == "zone_nine"){
		var waypts = [];
		var first = new google.maps.LatLng(5.9055730, -0.1502700);
		var second = new google.maps.LatLng(5.804081, -0.125540);
		var third = new google.maps.LatLng(5.731148, -0.158741);
		var fourth = new google.maps.LatLng(5.731148, -0.158741);
		var fifth = new google.maps.LatLng(5.751414, -0.149261);
		var sixth = new google.maps.LatLng(5.744203, -0.152548);
		var seventh = new google.maps.LatLng(5.731148, -0.158741);
		var eigth = new google.maps.LatLng(5.706082, -0.170874);
		var ninth = new google.maps.LatLng(5.706082, -0.170874);
		var tenth = new google.maps.LatLng(5.731148, -0.158741);
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
			location: last,
			stopover: true
		});

		drawRoute(first, last, waypts,directionsService, directionsDisplay);
	}

	//zone 10
	else if (startLocation == "zone_ten"){
		/* Zone 9 */
		var waypts = [];
		var first = new google.maps.LatLng(5.7714630, 0.0819970);
		var second = new google.maps.LatLng(5.752230, 0.0461420);
		var third = new google.maps.LatLng(5.7658210, 0.0572500);
		var fourth = new google.maps.LatLng(5.7618350, 0.0528130);
		
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
