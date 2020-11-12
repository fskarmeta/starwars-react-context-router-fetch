import { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import React from "react";
import { useParams } from "react-router-dom";

export const IndividualVehicleCard = props => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

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

	useEffect(
		() => {
			actions.individualVehicleIdFetch("vehicles", newId);
		},
		[id]
	);

	return (
		<div className="container">
			<div className="row pt-3 pb-3" style={{ borderBottom: "3px solid rgb(204, 178, 27)" }}>
				<div className="col-md-6">
					<img
						className="card-img-top"
						src={`http://localhost:3000/img/vehicles/${!!store.currentImg && store.currentImg}.jpg`}
						alt="Card image cap"
					/>
				</div>
				<div className="col-md-6 d-flex justify-content-center flex-column text-light">
					<h1>{!!store.currentVehicle && store.currentVehicle.name}</h1>
					<p>
						Donec imperdiet libero non faucibus ultrices. Cras convallis sit amet orci eu sodales. Donec
						viverra tortor et malesuada vulputate. Quisque ornare pharetra egestas. Praesent eros diam,
						rutrum at ultricies quis, laoreet ut tellus. Aenean aliquet venenatis felis sit amet fermentum.
						In eget elit non orci fermentum convallis. Nulla tincidunt faucibus elit vel pretium. Maecenas
						ac lacinia dolor.
					</p>
				</div>
			</div>
			<div className="row text-light mt-3">
				<div className="col-md-12 ">
					<div className="row d-flex justify-content-center">
						<div className="d-flex flex-column m-2 box col-md-3">
							<span className="box-title">Model</span>
							<span className="box-text">{!!store.currentVehicle && store.currentVehicle.model}</span>
						</div>
						<div className="d-flex flex-column m-2 box col-md-3">
							<span className="box-title">Manufacturer</span>
							<span className="box-text">
								{!!store.currentVehicle && store.currentVehicle.manufacturer}
							</span>
						</div>
						<div className="d-flex flex-column m-2 box col-md-3">
							<span className="box-title">Cost in Credits</span>
							<span className="box-text">
								{!!store.currentVehicle && store.currentVehicle.cost_in_credits}
							</span>
						</div>
						<div className="d-flex flex-column m-2 box col-md-3">
							<span className="box-title">Length</span>
							<span className="box-text">{!!store.currentVehicle && store.currentVehicle.length}</span>
						</div>
						<div className="d-flex flex-column m-2 box col-md-3">
							<span className="box-title">Max Atmosphering Speed</span>
							<span className="box-text">
								{!!store.currentVehicle && store.currentVehicle.max_atmosphering_speed}
							</span>
						</div>
						<div className="d-flex flex-column m-2 box col-md-3">
							<span className="box-title">Crew</span>
							<span className="box-text">{!!store.currentVehicle && store.currentVehicle.crew}</span>
						</div>
						<div className="d-flex flex-column m-2 box col-md-3">
							<span className="box-title">Passengers</span>
							<span className="box-text">
								{!!store.currentVehicle && store.currentVehicle.passengers}
							</span>
						</div>
						<div className="d-flex flex-column m-2 box col-md-3">
							<span className="box-title">Cargo Capacity</span>
							<span className="box-text">
								{!!store.currentVehicle && store.currentVehicle.cargo_capacity}
							</span>
						</div>
						<div className="d-flex flex-column m-2 box col-md-3">
							<span className="box-title">Consumables</span>
							<span className="box-text">
								{!!store.currentVehicle && store.currentVehicle.consumables}
							</span>
						</div>
						<div className="d-flex flex-column m-2 box col-md-3">
							<span className="box-title">Class</span>
							<span className="box-text">
								{!!store.currentVehicle && store.currentVehicle.vehicle_class}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
