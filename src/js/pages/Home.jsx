import React, { useState, useEffect } from "react";
import { Search } from "../components/Search";
import { Banner } from "../containers/Home/Banner";
import { Cards } from "../containers/Home/Cards";

export const Home = () => {
    const [data, setData] = useState([]);
    const [ search, setSearch ] = useState('');
 
     //función de búsqueda
    const searcher = (e) => {
        setSearch(e.target.value);
    }
     //metodo de filtrado 1 
      let results = [];
     if(!search)
     {
         results = data;
     }else{
          results = data.filter( (dato) =>
           dato.name.toLowerCase().includes(search.toLowerCase())
        )
     } 
     console.log("ol",results);
  
     
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
            <div className="container">
                <Search></Search>
                <div className="searchbox">
                    <input value={search} onChange={searcher}
                        type="text"
                        className="searchbox__input"
                        placeholder="Search..."
                    />
                    <svg
                        className="searchbox__icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 56.966 56.966"
                    >
                        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                </div>
            </div>
            <Cards games={results} />

        </>
    );
};
