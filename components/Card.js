const Card = ({ name, avgRating, cloudinaryImageId }) => {
  return (
    <div className="card">
      <div className="card-title">{name}</div>
      <div className="card-image">
        <img src={cloudinaryImageId} />
      </div>
      <div className="card-rating">
        <h6>{avgRating}</h6>
      </div>
      <div className="card-caption">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, rem!
        </p>
      </div>
    </div>
  );
};

export default Card;
