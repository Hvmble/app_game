import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../components/Spinner";


export const Detalles = () => {
	const { id } = useParams()
	const [game, setGame] = useState([]);
	const [spinner, setSpinner] = useState(false);


	useEffect(() => {
		const fetchData = () => {
			setSpinner(true);
			fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, {
				headers: {
					'X-RapidAPI-Key': 'c7a63a70fbmsh3383e931ba48d18p103542jsncd71051baeb8',
					'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
					"accept-encoding": "gzip, deflate",
					"access-control-allow-credentials": "true",
					"access-control-allow-methods": "GET, POST",
					"access-control-allow-origin": "*",
					"cache-control": "max-age=900",
					"content-security-policy": "upgrade-insecure-requests;, default-src 'self' 'unsafe-inline' *.googlesyndication.com *.doubleclick.net https://www.google.com https://www.google-analytics.com; script-src * 'unsafe-inline' 'unsafe-eval'; style-src * 'unsafe-inline'; img-src * data:; font-src * data:; object-src 'self' 'unsafe-inline' *.googlesyndication.com *.doubleclick.net https://www.google.com https://www.google-analytics.com",
					"content-type": "application/json",
					"date": "Wed, 24 Aug 2022 03:29:34 GMT",
					"referer-policy": "origin",
					"server": "RapidAPI-1.2.8",
					"strict-transport-security": "max-age=16070400; includeSubDomains",
					"vary": "Accept-Encoding,User-Agent",
					"x-content-type-options": "nosniff, nosniff",
					"x-download-options": "noopen",
					"x-frame-options": "SAMEORIGIN, sameorigin",
					"x-permitted-cross-domain-policies": "master-only",
					"x-rapidapi-region": "AWS - us-east-1",
					"x-rapidapi-version": "1.2.8",
					"x-sucuri-cache": "EXPIRED",
					"x-sucuri-id": "14015",
					"x-ua-compatible": "IE=edge,chrome=1",
					"x-xss-protection": "1; mode=block, 1; mode=block"
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
