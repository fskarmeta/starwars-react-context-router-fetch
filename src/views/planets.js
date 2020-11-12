import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	return (
		<section>
			<div className="container">
				<div className="row mt-1">
					{!!store.planets &&
						store.planets.results.map((planet, index) => (
							<div className="col-md-4 mt-5 text-light" key={index}>
								<div className="card bg-dark planet-card">
									<img
										className="card-img-top planet-img"
										src={`./img/planets/${planet.name.split(" ").join("_")}.jpg`}
										alt="Card image cap"
									/>
									<div className="card-body">
										<h5 className="card-title">{planet.name}</h5>
										<p className="card-text">
											<spam className="card-text-title">Rotation Period: </spam>{" "}
											{planet.ratation_period}
										</p>
										<p className="card-text">
											<spam className="card-text-title">Orbital Period: </spam>
											{planet.orbital_period}
										</p>
										<p className="card-text">
											<spam className="card-text-title">Diameter: </spam>
											{planet.diameter}
										</p>
										<p className="card-text">
											<spam className="card-text-title">Climate: </spam>
											{planet.climate}
										</p>
										<p className="card-text">
											<spam className="card-text-title">Terrain: </spam>
											{planet.terrain}
										</p>
										<p className="card-text">
											<spam className="card-text-title">Surface Water: </spam>
											{planet.surface_water}
										</p>
										<p className="card-text">
											<spam className="card-text-title">Population: </spam>
											{planet.population}
										</p>
									</div>
									<div className="d-flex justify-content-between card-footer buttonicon">
										<Link
											className="btn btn-primary mt-3"
											onClick={() => actions.currentPlanetId(index + 1)}
											to={`/iPlanetCard/${index + 1}`}>
											Learn more
										</Link>
										<i
											className="fas fa-star mt-3 pt-4"
											onClick={() => actions.setPlanetToFavorite(index)}
											style={
												actions.planetFindInFavorites(index)
													? { color: "yellow" }
													: { color: "white" }
											}
										/>
									</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};
