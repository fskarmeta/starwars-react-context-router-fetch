import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);
	return (
		<section>
			<div className="container">
				<div className="row mt-1">
					{!!store.vehicles &&
						store.vehicles.results.map((vehicle, index) => (
							<div className="col-md-4 mt-5 text-light" key={index}>
								<div className="card bg-dark vehicle-card">
									<img
										className="card-img-top vehicle-img"
										src={`./img/vehicles/${vehicle.name
											.replace("/", "+")
											.split(" ")
											.join("_")}.jpg`}
										alt="Card image cap"
									/>
									<div className="card-body">
										<div>
											<h5 className="card-title">{vehicle.name}</h5>
											<p className="card-text">
												<span className="card-text-title">Model: </span>
												{vehicle.model}
											</p>
											<p className="card-text">
												<span className="card-text-title">Manufacturer: </span>
												{vehicle.manufacturer}
											</p>
											<p className="card-text">
												<span className="card-text-title">Length: </span> {vehicle.length}
											</p>
											<p className="card-text">
												<span className="card-text-title">Crew: </span>
												{vehicle.crew}
											</p>
											<p className="card-text">
												<span className="card-text-title">Passengers: </span>
												{vehicle.passengers}
											</p>
											<p className="card-text">
												<span className="card-text-title">Vehicle Class: </span>
												{vehicle.vehicle_class}
											</p>
										</div>
									</div>
									<div className="d-flex justify-content-between card-footer buttonicon">
										<Link
											className="btn btn-primary mt-3"
											onClick={() => actions.currentVehicleId(index + 1)}
											to={`/iVehicleCard/${index + 1}`}>
											Learn more
										</Link>
										<i
											className="fas fa-star mt-3 pt-4"
											onClick={() => actions.setVehicleToFavorite(index)}
											style={
												actions.vehicleFindInFavorites(index)
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
