import React, { Component } from 'react';
import Select from 'react-select';
import { colleges } from './data.ts';
import './Dropdown_component.css'

const styles = {
    control: base => ({
      ...base,
      fontSize: "1rem"
    }),
    menu: base => ({
      ...base,
      fontSize: "1rem"
    })
  };

export default class Dropdown_component extends Component<> {

  render() {

    return (
        <Select
          className="basic-single college-select"
          classNamePrefix="select"
          defaultValue={colleges[0]}
          name="color"
          options={colleges}
          styles={styles} 
        />
    );
  }
}