const Card = ({ name, avgRating, cloudinaryImageId }) => {
  return (
    <div className="p-4 m-4 bg-red-500 w-[250px] rounded-xl shadow-xl">
      
      <div className="card-image">
        <img className="rounded-lg" src={cloudinaryImageId} />
      </div>
      <div className="card-rating">
        <h6>Rating ::{avgRating}</h6>
      </div>
      <div className="font-extrabold p-2 text-lg">{name}</div>
      <div className="card-caption">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, rem!
        </p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (Card) => {
  return ({name, avgRating , cloudinaryImageId}) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-2 rounded-lg">Promoted</label>
        <Card name={name} avgRating={avgRating} cloudinaryImageId={cloudinaryImageId}/>
      </div>
    );
  };
};

export default Card;
