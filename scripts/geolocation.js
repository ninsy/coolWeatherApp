class GeolocationPoints {
	constructor() {
		this.lat = null;
		this.lon = null;
		navigator.geolocation.getCurrentPosition(success, error);	
		function success(position) {
			this.lat = position.coords.latitude;
			this.lon = position.coords.longitude;
		}
		function error(position) {
			alert(`Error occured during fetching your position.`);
		}
	}
	getPoints() {
		return  {
			lat: this.lat,
			lon: this.lon
		}
	}
}

export {GeolocationPoints};