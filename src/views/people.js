import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const People = props => {
	const { store, actions } = useContext(Context);

	return (
		<section>
			<div className="container">
				<div className="row mt-1">
					{!!store.people &&
						store.people.results.map((char, index) => (
							<div className="col-md-3 mt-5 text-light" key={index}>
								<div className="card bg-dark card-people">
									<img
										className="card-img-top people-img"
										src={`./img/people/${char.name.split(" ").join("_")}.jpg`}
										alt="Card image cap"
									/>
									<div className="card-body">
										<h5 className="card-title">{char.name}</h5>
										<p className="card-text">
											<spam className="card-text-title">Gender: </spam>
											{char.gender}
										</p>
										<p className="card-text">
											<spam className="card-text-title">Hair color: </spam>
											{char.hair_color}
										</p>
										<p className="card-text">
											<spam className="card-text-title">Eye color: </spam>
											{char.eye_color}
										</p>
									</div>
									<div className="d-flex justify-content-between card-footer buttonicon">
										<Link
											className="btn btn-primary mt-3"
											onClick={() => actions.currentPeopleId(index + 1)}
											to={`/iPeopleCard/${index + 1}`}>
											Learn more
										</Link>
										<i
											className="fas fa-star mt-3 pt-4"
											onClick={() => actions.setPeopleToFavorite(index)}
											style={
												actions.peopleFindInFavorites(index)
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

// People.propTypes = {
//   match: PropTypes.object,
// };
