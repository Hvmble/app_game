import React, { useState } from "react";
import { Spinner } from "../components/Spinner";
import { Cards } from "../containers/Home/Cards";
import { games } from "../data";


export const Home = () => {
    const [spinner, setSpinner] = useState(false);
    setTimeout(() => {
		setSpinner(false);
	}, 100)
    return (
        <>
        {spinner ? <Spinner/> : <Cards games={games} /> }
        </>
    );
};
