import "./NavDropdownComponent.css";
import React, { Component } from "react";
import Select from "react-select";
import { buildings, codeToCollege } from "../../utils/colleges";

const styles = {
  control: (base) => ({
    ...base,
    fontSize: "1rem",
  }),
  menu: (base) => ({
    ...base,
    fontSize: "1rem",
  }),
};

export default class NavDropdownComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currSelected: buildings[this.findCollegeIndex()],
    };
  }

  findCollegeIndex = () => {
    var idx = 0;
    for (const building of buildings) {
      if (codeToCollege(this.props.defaultCollege) === building.value)
        return idx;
      idx++;
    }
  };

  handleChange = (e) => {
    const currSelected = e;
    this.setState({
      currSelected,
    });
    this.props.handleChange(e);
  };

  render() {
    return (
      <Select
        className="basic-single college-select"
        classNamePrefix="select"
        value={this.state.currSelected}
        name="color"
        options={buildings}
        onChange={this.handleChange}
        styles={styles}
        isSearchable={false}
      />
    );
  }
}
