import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + " constructor");
  }

  componentDidMount() {
    // console.log(this.props.name + " component-did-mount");
  }
  render() {
    // console.log(this.props.name + " render");
    return (
      <div>
        <h1>About page</h1>


        <UserContext.Consumer>
          {(data) => <h1>{data.loggedinUser}</h1> }
        </UserContext.Consumer>
        {/* <UserClass
          name={"first"}
          company={"Expleo"}
          location={"Mumbai"}
        /> */}
      </div>
    );
  }
}
export default About;
