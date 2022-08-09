import React from "react";
import image from "../../img/logo.png";
export const Search = () => {
  return (
    <>
        <video width="auto" loop={true} autoPlay="autoplay" muted>
          <source
            src="https://www.leagueoflegends.com/static/hero-0632cbf2872c5cc0dffa93d2ae8a29e8.webm"
            type="video/mp4"
          />
        </video>
        <div>
          <img width="120px" src={image} alt="" />
        </div>
        <div>
          <h1 className="main-title">Free Games</h1>
        </div>
    </>
  );
};
