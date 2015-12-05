import { GeolocationPoints } from "./geolocation.js";

if (!("geolocation" in navigator)) {
	alert(`${ navigator.userAgent } is not compatible with Geolocation API`);
} else {
	let geoPointsObject = new GeolocationPoints();
	let geoPoints = geoPointsObject.getPoints();
	let mainString = `Get weather forecast at ${ geoPoints.lat } | ${ geoPoints.lon }.`;

	$(function () {
		$(".greetings").typed({
			strings: [mainString],
			typeSpeed: 1
		});
	});
}