import { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import React from "react";
import { useParams } from "react-router-dom";

export const IndividualPeopleCard = props => {
	const { store, actions } = useContext(Context);
	const { id } = useParams();

	useEffect(
		() => {
			actions.individualPeopleIdFetch("people", id);
		},
		[id]
	);

	return (
		<div className="container">
			<div className="row pt-3 pb-3" style={{ borderBottom: "3px solid rgb(204, 178, 27)" }}>
				<div className="col-md-6">
					<img
						className="iimage"
						src={`http://localhost:3000/img/people/${!!store.currentImg && store.currentImg}.jpg`}
						alt="Card image cap"
					/>
				</div>
				<div className="col-md-6 d-flex justify-content-center flex-column text-light">
					<h1>{!!store.currentChar && store.currentChar.name}</h1>
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
				<div className="col-md-12 d-flex justify-content-between">
					<div className="d-flex flex-column m-2 box col-md-2">
						<span className="box-title"> / Birth Year</span>
						<span className="box-text">/ {!!store.currentChar && store.currentChar.birth_year}</span>
					</div>
					<div className="d-flex flex-column m-2 box col-md-2">
						<span className="box-title">/ Gender</span>
						<span className="box-text">/ {!!store.currentChar && store.currentChar.gender}</span>
					</div>
					<div className="d-flex flex-column m-2 box col-md-2">
						<span className="box-title">/ Height</span>
						<span className="box-text">/ {!!store.currentChar && store.currentChar.height}</span>
					</div>
					<div className="d-flex flex-column m-2 box col-md-2">
						<span className="box-title">/ Skin Color</span>
						<span className="box-text">/ {!!store.currentChar && store.currentChar.skin_color}</span>
					</div>
					<div className="d-flex flex-column m-2 box col-md-2">
						<span className="box-title">/ Eye Color</span>
						<span className="box-text">/ {!!store.currentChar && store.currentChar.eye_color}</span>
					</div>
				</div>
			</div>
		</div>
	);
};
