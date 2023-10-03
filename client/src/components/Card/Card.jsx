import { Link } from "react-router-dom";
const Card = (props) => {
  const carouselId = `carousel-${props.id}`;

  return (
    <div>
      <div className="card" style={{ width: "21.5rem" }}>
        <div id={carouselId} className="carousel slide">
          <div className="carousel-indicators">
            {props.image.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target={`#${carouselId}`}
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {props.image.map((image, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={image}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="card-body">
          <Link to={`/detail/${props.id}`}>
            <h5 className="card-title">{props.name}</h5>
          </Link>
          <p className="card-text">ID: {props.id}</p>
          <p className="card-text">Direccion: {props.direction}</p>
          <p className="card-text">${props.price} USD</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
