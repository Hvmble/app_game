import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";
import { hearder_key } from "../data";

export const Detalles = () => {
	const { id } = useParams()
	const [game, setGame] = useState([]);
	const [spinner, setSpinner] = useState(false);


	useEffect(() => {
		const fetchData = () => {
			setSpinner(true);
			fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
				headers: {
					"X-RapidAPI-Key":
						hearder_key,
					"X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
				},
			})
				.then((response) => response.json())
				.then((json) => {
					setTimeout(() => {
						setGame(json)
						setSpinner(false);
					}, 100)
				})
				.catch((error) => console.log(error));


		};
		fetchData();
	}, []);
	return (
		<>
			{spinner ? <Spinner></Spinner> :
				<header className="container-details dark">
					<div className="text skew-text-tr">
						<h1 className="headline">{game.title}</h1>
						<h2 className="subhead">{game.short_description}</h2>
						<div className="article-meta">

							<div className="info-flex">


								<p className="byline">Genre:  {game.genre}</p>
								<p className="dateline"> Date: {game.release_date} </p>
								<p>Plataform: {game.platform}</p>

							</div>
						</div>
					</div>
					<div className="image">
						<div>
							<figure className="picture skew-tl"><img src={game.thumbnail} alt="ImageGame" />
							</figure>
						</div>
					</div>
				</header>
				}
		</>
	)
}
