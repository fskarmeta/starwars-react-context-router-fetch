import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Favorites = () => {
	const { store, actions } = useContext(Context);
	return (
		<li className="nav-item dropdown">
			<a
				className="nav-link"
				href="#"
				id="navbarDropdown"
				role="button"
				data-toggle="dropdown"
				aria-haspopup="true"
				aria-expanded="false">
				Favorites
				<span className="fav-num"> {` ${store.favorites.length} `}</span>
			</a>
			<div className="dropdown-menu" aria-labelledby="navbarDropdown">
				<p className="dropdown-item" style={store.favorites.length > 0 ? { display: "none" } : null}>
					No items yet
				</p>
				{!!store.favorites &&
					store.favorites.map((item, index) => {
						let currentID = parseInt(actions.findPeopleIndexOfFavorites(index)) + 1;

						function ifVehicle(id) {
							let newId = 0;
							if (parseInt(id) === 1) {
								newId = 4;
							} else if (parseInt(id) === 2) {
								newId = 6;
							} else if (parseInt(id) === 3) {
								newId = 7;
							} else if (parseInt(id) === 4) {
								newId = 8;
							} else if (parseInt(id) === 5) {
								newId = 14;
							} else if (parseInt(id) === 6) {
								newId = 16;
							} else if (parseInt(id) === 7) {
								newId = 18;
							} else if (parseInt(id) === 8) {
								newId = 19;
							} else if (parseInt(id) === 9) {
								newId = 20;
							} else if (parseInt(id) === 10) {
								newId = 24;
							}
							return newId;
						}
						let vehicleID = ifVehicle(currentID);
						console.log(vehicleID);

						return (
							<div className="d-flex justify-content-between" key={index}>
								<Link
									className="dropdown-item"
									to={
										item.to === "/iCardVehicle/"
											? `${item.to}${vehicleID}`
											: `${item.to}${currentID}`
									}>
									{item.label}
								</Link>
								<i
									className="fas fa-trash mt-2 mr-1"
									onClick={() => actions.deleteItemFromFav(item.label)}
								/>
							</div>
						);
					})}
			</div>
		</li>
	);
};
