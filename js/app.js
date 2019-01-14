function initMap() {
  	const center = new google.maps.LatLng(50.059090, 21.408660);
  	const zoom = 16;
  	const mapContainer = document.getElementById("map");
  	const mapOptions = {
			center,
			zoom,
			panControl: false
		};
	const map = new google.maps.Map(mapContainer, mapOptions);
	const marker = new google.maps.Marker({position: center, map});
	const content = `<div>
	Przytulisko
	<img class="dog-img" src="img/fonts/dog.svg" alt="Dog" />
	</div>`;
	const infowindow = new google.maps.InfoWindow({ content });
	marker.addListener('click', function() {
		infowindow.open(map, marker);
	});
	map.addListener('click', function() {
		infowindow.close();
	})
}