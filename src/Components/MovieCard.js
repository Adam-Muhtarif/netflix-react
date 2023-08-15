import { useState } from "react";

export default function MovieCard(props) {
  const imageNotFound = "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg";
  
  return (
    <div className="movie-card">
      <div className="movie-image">
        <img
          src={
            props.show.image
              ? props.show.image.medium
              : imageNotFound
          }
          style={{ width: 177.9, height: 200 }}
          alt="movie_image"
        ></img>
      </div>
      <h3 className="movie-heading">{props.show.name}</h3>
      <div className="details">
        <div className="rating">
          <img
            src="https://pngimg.com/d/star_PNG41474.png"
            height="15"
            alt="rating_star"
          ></img>
          <h3>{props.show.rating.average || 0}</h3>
        </div>
        <p>{props.show.genres.join(" | ")}</p>
      </div>
      <a
        className="button"
        href={props.show.officialSite || "google.com"}
        target="_blank"
        rel="noreferrer"
      >
        Website
      </a>
    </div>
  );
}
