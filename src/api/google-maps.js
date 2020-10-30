export const getUserLocation = () => {
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject);
	});
}

export async function searchForLocation(queryString) {
	const currentLocation = await getUserLocation();
	const { coords: { latitude, longitude } } = currentLocation;
	console.log(latitude, longitude);

	const container = document.getElementById('map');
	const service = new window.google.maps.places.PlacesService(container);

	return new Promise((resolve, reject) => {
		service.textSearch({ query: queryString, fields: ['name'] }, (results, status) => {
			if (status === window.google.maps.places.PlacesServiceStatus.OK) {
				console.log('results: ', results);
				resolve(results);
			} else {
				console.error('bad request: ', results);
				reject(results);
			}
		});
	});
}
