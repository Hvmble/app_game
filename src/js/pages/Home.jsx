import React, { useState, useEffect } from "react";
import { Cards } from "../containers/Home/Cards";

export const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
                headers: {
                    "X-RapidAPI-Key":
                        "c7a63a70fbmsh3383e931ba48d18p103542jsncd71051baeb8",
                    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
                },
            })
                .then((response) => response.json())
                .then((json) => setData(json))
                .catch((error) => console.log(error));
        };
        fetchData();
    }, []);
    console.log(data);
    return (
        <>
            <Cards games={data} />

        </>
    );
};
