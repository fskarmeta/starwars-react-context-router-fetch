const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			nav: [
				{
					label: "People",
					to: "../people"
				},
				{
					label: "Planets",
					to: "../planets"
				},
				{
					label: "Vehicles",
					to: "../vehicles"
				}
			],
			favorites: [],
			currentChar: null,
			currentCharId: null,
			currentPlanet: null,
			currentPlanetId: null,
			currentVehicle: null,
			currentVehicleId: null
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			//DeleteItemFromFav
			deleteItemFromFav: item => {
				const store = getStore();
				const fav = store.favorites;
				for (let j in fav) {
					if (fav[j].label === item) {
						fav.splice(j, 1);
						setStore({
							favorites: fav
						});
					}
				}
			},
			// Find If Item From Category is present in Favorites
			//For People
			peopleFindInFavorites: i => {
				const store = getStore();
				const fav = store.favorites;
				return fav.find(o => o.label == store.people.results[i].name) ? true : false;
			},
			//For Planets
			planetFindInFavorites: i => {
				const store = getStore();
				const fav = store.favorites;
				return fav.find(o => o.label == store.planets.results[i].name) ? true : false;
			},
			//For Vehicles
			vehicleFindInFavorites: i => {
				const store = getStore();
				const fav = store.favorites;
				return fav.find(o => o.label == store.vehicles.results[i].name) ? true : false;
			},
			//Fin the original index of item in a cateogry from the Favorites Array
			//For People
			findPeopleIndexOfFavorites: i => {
				const store = getStore();
				const fav = store.favorites;
				const people = store.people.results;
				const vehicles = store.vehicles.results;
				const planets = store.planets.results;
				for (let j in people) {
					if (people[j].name === fav[i].label) {
						return j;
					}
					for (let k in vehicles) {
						if (vehicles[k].name === fav[i].label) {
							return k;
						}
						for (let h in planets) {
							if (planets[h].name === fav[i].label) {
								return h;
							}
						}
					}
				}
			},
			// Set Item of Cateogry to the Favorite Array
			// For People
			setPeopleToFavorite: index => {
				const store = getStore();
				const fav = store.favorites;
				const people = store.people.results;
				if (getActions().peopleFindInFavorites(index)) {
					for (let j in fav) {
						if (fav[j].label === people[index].name) {
							fav.splice(j, 1);
							setStore({
								favorites: fav
							});
						}
					}
				} else {
					setStore({
						favorites: [
							...store.favorites,
							{
								label: store.people.results[index].name,
								to: "/iPeopleCard/"
							}
						]
					});
				}
			},
			// For Planets
			setPlanetToFavorite: index => {
				const store = getStore();
				const fav = store.favorites;
				const planets = store.planets.results;
				if (getActions().planetFindInFavorites(index)) {
					for (let j in fav) {
						if (fav[j].label === planets[index].name) {
							fav.splice(j, 1);
							setStore({
								favorites: fav
							});
						}
					}
				} else {
					setStore({
						favorites: [
							...store.favorites,
							{
								label: store.planets.results[index].name,
								to: "/iPlanetCard/"
							}
						]
					});
				}
			},
			// For Vehicles
			setVehicleToFavorite: index => {
				const store = getStore();
				const fav = store.favorites;
				const vehicles = store.vehicles.results;
				if (getActions().vehicleFindInFavorites(index)) {
					for (let j in fav) {
						if (fav[j].label === vehicles[index].name) {
							fav.splice(j, 1);
							setStore({
								favorites: fav
							});
						}
					}
				} else {
					setStore({
						favorites: [
							...store.favorites,
							{
								label: store.vehicles.results[index].name,
								to: "/iVehicleCard/"
							}
						]
					});
				}
			},
			// Set current ID for the selected Item in cateogry
			//For People
			currentPeopleId: id => {
				setStore({
					currentCharId: id
				});
			},
			//For Planet
			currentPlanetId: id => {
				setStore({
					currentPlanetId: id
				});
			},
			// For Vehicle
			currentVehicleId: id => {
				setStore({
					currentVehicleId: id
				});
			},
			//Individual ID Fetches
			//For People
			individualPeopleIdFetch: (type, id) => {
				fetch(`https://swapi.dev/api/${type}/${id}/`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						setStore({ currentChar: data });
						setStore({ currentImg: data.name.split(" ").join("_") });
					})
					.catch(error => {
						console.log(error.message);
					});
			},
			//For Planets
			individualPlanetIdFetch: (type, id) => {
				fetch(`https://swapi.dev/api/${type}/${id}/`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						setStore({ currentPlanet: data });
						setStore({ currentImg: data.name.split(" ").join("_") });
					})
					.catch(error => {
						console.log(error.message);
					});
			},
			//For Vehicles
			individualVehicleIdFetch: (type, id) => {
				fetch(`https://swapi.dev/api/${type}/${id}/`, {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						setStore({ currentVehicle: data });
						setStore({
							currentImg: data.name
								.replace("/", "+")
								.split(" ")
								.join("_")
						});
					})
					.catch(error => {
						console.log(error.message);
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			//Fetching the full Object for Each Category
			fetchPeople: () => {
				fetch("https://swapi.dev/api/people/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						setStore({ people: data });
					})
					.catch(error => {
						console.log(error.message);
					});
			},
			fetchPlanets: () => {
				fetch("https://swapi.dev/api/planets/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						setStore({ planets: data });
					})
					.catch(error => {
						console.log(error.message);
					});
			},
			fetchVehicles: () => {
				fetch("https://swapi.dev/api/vehicles/", {
					method: "GET",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						setStore({ vehicles: data });
					})
					.catch(error => {
						console.log(error.message);
					});
			}
		}
	};
};

export default getState;
