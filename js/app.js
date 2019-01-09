function initMap() {
  const center = new google.maps.LatLng(50.059090, 21.408660);
  const zoom = 16;
  const mapContainer = document.getElementById("map");
  const mapOptions = {
		center,
		zoom,
		panControl: false
	};
  const map = new google.maps.Map(mapContainer, mapOptions)
}