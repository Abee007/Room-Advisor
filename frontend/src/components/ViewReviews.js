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
    this.state = {
      loading: false,
      building: codeToCollege(this.props.user.meta.college),
      roomSizes: [1, 2],
    };
  }

  handleBuildingChange = (e) => {
    const building = e.value;
    // update value
    this.setState({
      building,
    });
  };

  handleRoomSizeChange = (e) => {
    var roomSizes = [];
    for (const size of e) {
      roomSizes.push(size.value);
    }
    // update value
    this.setState({
      roomSizes,
    });
  };

  render() {
    return (
      <div>
        <Nav
          user={this.props.user}
          mode={"VERBOSE"}
          handleBuildingChange={this.handleBuildingChange}
          handleRoomSizeChange={this.handleRoomSizeChange}
        />
        <p>{this.state.building}</p>
        {this.state.roomSizes.map((size) => (
          <p>{size}</p>
        ))}
      </div>
    );
  }
}
