import React, { Component } from "react";
import Nav from "../components/Nav";
import { codeToCollege } from "../utils/colleges";

// function ViewReviews({ props }) {
//   const [isLoading, setLoading] = useState(false);

//   // useEffect(() => {
//   //   fetchItems();
//   // }, []);

//   // const [items, setItems] = useState([]);

//   // const fetchItems = async () => {
//   //   const data = await fetch(`${serverIp}/viewreviews`);
//   //   const items = await data.json();
//   //   setItems(items);
//   // };

//   if(isLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <Nav user={props.user} mode={"VERBOSE"} />
//       {/* <section>
//         {items.map((item) => (
//           <div key={item.name}>
//             <p>{item.name}</p>
//             <p>{item.msg}</p>
//           </div>
//         ))}
//       </section> */}
//     </div>
//   );
// }

// export default ViewReviews;

export default class ViewReviews extends Component {
  // initial setup
  constructor(props) {
    super(props);
    this.state = JSON.parse(
      window.localStorage.getItem("viewReviewsState")
    ) || {
      loading: false,
      building: {
        value: codeToCollege(this.props.user.meta.college),
        label: codeToCollege(this.props.user.meta.college),
      },
      roomSizes: [
        { value: 1, label: "Single" },
        { value: 2, label: "Double" },
      ],
    };
  }

  setState(state) {
    window.localStorage.setItem("viewReviewsState", JSON.stringify(state));
    super.setState(state);
  }

  handleBuildingChange = (e) => {
    const building = e;
    // update value
    return this.setState({ ...this.state, building });
  };

  handleRoomSizeChange = (e) => {
    var roomSizes = e;
    // update value
    return this.setState({ ...this.state, roomSizes });
  };

  render() {
    return (
      <div>
        <Nav
          user={this.props.user}
          mode={"VERBOSE"}
          currState={this.state}
          handleBuildingChange={this.handleBuildingChange}
          handleRoomSizeChange={this.handleRoomSizeChange}
        />
        <p>{this.state.building.value}</p>
        {this.state.roomSizes.map((size) => (
          <p>{size.value}</p>
        ))}
      </div>
    );
  }
}
