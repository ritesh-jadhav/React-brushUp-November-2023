import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "name",
        phone: "phone",
        email: "email",
      },
    };
  }

  componentDidUpdate() {
 //   console.log("component is updating");
  }
  async componentDidMount() {
    const respose = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await respose.json();
    //console.log(data);
    this.setState({
      userInfo: data[0],
    });
  }

  componentWillUnmount() {
   // console.log("unmounting");
  }
  render() {
    const { name, phone, email } = this.state.userInfo;
    return (
      <div className="user-card">
        <h4>Name : {name}</h4>
        <h5>contact : {phone}</h5>
        <h5>email : {email}</h5>
      </div>
    );
  }
}
export default UserClass;
