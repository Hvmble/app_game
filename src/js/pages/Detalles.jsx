import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Detalles = () => {
	const { id } = useParams()
	const [game, setGame] = useState([]);

	useEffect(() => {
		const fetchData = () => {
			fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
				headers: {
					"X-RapidAPI-Key":
						"c7a63a70fbmsh3383e931ba48d18p103542jsncd71051baeb8",
					"X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
				},
			})
				.then((response) => response.json())
				.then((json) => setGame(json))
				.catch((error) => console.log(error));
		};
		fetchData();
	}, []);
	console.log(game);
	const screens = game.screenshots;
	console.log(screens)
	return (

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
	)
}
