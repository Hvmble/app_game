import React, { useState } from "react";
import { Spinner } from "../components/Spinner";
import { games } from "../data";


export const Detalles = () => {
	const [spinner, setSpinner] = useState(true);
	
	setTimeout(() => {
		setSpinner(false);
	}, 50)
	return (
		<>
			{spinner ? <Spinner></Spinner> : games.map((game) => (
				<header className="container-details dark" key={game.id}>
					<div className="text skew-text-tr">
						<h1 className="headline">{game.title}</h1>
						<h2 className="subhead">{game.short_description}</h2>
						<div className="article-meta">

							<div className="info-flex">


								<p className="byline">Genre:  {game.genre}</p>
								<p className="dateline"> Date: {game.release_date} </p>
								<p>Plataform: {game.platform}</p>
								<a  href={game.game_url}><button type="button" className="tag">Play</button></a>
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
			))}
		</>
	)
}
