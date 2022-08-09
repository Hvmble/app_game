import React from 'react';

export const Card = ({ game }) => {
    return (
        <>
                <div className="container-card card">
                    <div className="wrapper" style={{ backgroundImage:`url(${game.thumbnail})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center" }} >
                        <div className="header">
                            <div className="date">
                                <span className="day">{game.release_date}</span>  
                            </div>
                            <ul className="menu-content">
                                <li>
                                    <span>Genero {game.genre}</span>
                                </li>
                                
                            </ul>
                        </div>
                        <div className="data">
                            <div className="content">
                                <h1 className="title"><a href={game.game_url}>{game.title}</a></h1>
                                <p className="text">{game.short_description}</p>
                                <a target="_blank" rel="noreferrer" href={game.game_url} className="button">Leer Más</a>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};
