const User = ({ name, company, location }) => {
  return (
    <div className="user-card">
      <h4>Name : {name}</h4>
      <h5>Works at : {company}</h5>
      <h5>Location : {location}</h5>
    </div>
  );
};
export default User;
