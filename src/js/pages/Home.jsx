import React, { useState, useEffect } from "react";
import { Spinner } from "../components/Spinner";
import { Cards } from "../containers/Home/Cards";

export const Home = () => {
    const [data, setData] = useState([]);
    const [spinner, setSpinner] = useState(false);
    useEffect(() => {
        const fetchData = () => {
            setSpinner(true)
            fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
                headers: {
                    "X-RapidAPI-Key":
                        "c7a63a70fbmsh3383e931ba48d18p103542jsncd71051baeb8",
                    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    setTimeout(() => {
						setData(json)
						setSpinner(false);
					}, 100)
                })
                .catch((error) => console.log(error));
        };
        fetchData();
    }, []);
    return (
        <>
        {spinner ? <Spinner/> : <Cards games={data} /> }
        </>
    );
};
