import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { roomSizes } from './data.ts';

const animatedComponents = makeAnimated();

export default function Dropdown_Multiselect() {
  return (
    <Select
    className="basic-multi-select"
    closeMenuOnSelect={false}
    components={animatedComponents}
    defaultValue={[roomSizes[4], roomSizes[5]]}
    isMulti
    options={roomSizes}
    />
  );
}
