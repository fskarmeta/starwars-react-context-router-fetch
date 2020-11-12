import { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import React from "react";
import { useParams } from "react-router-dom";

export const IndividualPlanetCard = props => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	useEffect(
		() => {
			actions.individualPlanetIdFetch("planets", id);
		},
		[id]
	);

	return (
		<div className="container">
			<div className="row pt-3 pb-3" style={{ borderBottom: "3px solid rgb(204, 178, 27)" }}>
				<div className="col-md-6">
					<img
						className="card-img-top"
						src={`http://localhost:3000/img/planets/${!!store.currentImg && store.currentImg}.jpg`}
						alt="Card image cap"
					/>
				</div>
				<div className="col-md-6 d-flex justify-content-center flex-column text-light">
					<h1>{!!store.currentPlanet && store.currentPlanet.name}</h1>
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
				<div className="col-md-12 d-flex justify-content-center">
					<div className="row d-flex justify-content-center">
						<div className="d-flex flex-column m-2 box col-md-3">
							<span className="box-title">Rotation Period</span>
							<span className="box-text">
								{!!store.currentPlanet && store.currentPlanet.rotation_period}
							</span>
						</div>
						<div className="d-flex flex-column m-2 box col-md-3">
							<span className="box-title">Orbital Period</span>
							<span className="box-text">
								{!!store.currentPlanet && store.currentPlanet.orbital_period}
							</span>
						</div>
						<div className="d-flex flex-column m-2 box col-md-3">
							<span className="box-title">Diameter</span>
							<span className="box-text">{!!store.currentPlanet && store.currentPlanet.diameter}</span>
						</div>
						<div className="d-flex flex-column m-2 box col-md-3">
							<span className="box-title">Climate</span>
							<span className="box-text">{!!store.currentPlanet && store.currentPlanet.climate}</span>
						</div>
						<div className="d-flex flex-column m-2 box col-md-3">
							<span className="box-title">Gravity</span>
							<span className="box-text">{!!store.currentPlanet && store.currentPlanet.gravity}</span>
						</div>
						<div className="d-flex flex-column m-2 box col-md-3">
							<span className="box-title">Surface Water</span>
							<span className="box-text">
								{!!store.currentPlanet && store.currentPlanet.surface_water}
							</span>
						</div>
						<div className="d-flex flex-column m-2 box col-md-3">
							<span className="box-title">Population</span>
							<span className="box-text">{!!store.currentPlanet && store.currentPlanet.population}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
