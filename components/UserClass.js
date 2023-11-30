import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, company, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count : {count} </h1>
        <button
          onClick={() => {
            console.log("clicked");
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase count
        </button>
        <h4>Name : {name}</h4>
        <h5>Works at : {company}</h5>
        <h5>Location : {location}</h5>
      </div>
    );
  }
}
export default UserClass;
