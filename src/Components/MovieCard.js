import { useState } from "react";

export default function MovieCard(props) {
  const [imageNotFound, setImageNotFound] = useState(
    "https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg"
  );

  return (
    <div className="movie-card">
      <div className="movie-image">
        <img
          src={
            props.movie.show.image
              ? props.movie.show.image.medium
              : imageNotFound
          }
          style={{ width: 177.9, height: 200 }}
          alt=""
        ></img>
      </div>
      <h3 className="movie-heading">{props.movie.show.name}</h3>
      <div className="details">
        <div className="rating">
          <img
            src="https://pngimg.com/d/star_PNG41474.png"
            height="15"
            alt="show_image"
          ></img>
          <h3>{props.movie.show.rating.average || 0}</h3>
        </div>
        <p>{props.movie.show.genres.join(" | ")}</p>
      </div>
      <a
        className="button"
        href={props.movie.show.officialSite || "google.com"}
        target="_blank"
        rel="noreferrer"
      >
        Website
      </a>
    </div>
  );
}
