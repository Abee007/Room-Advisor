import React, { Component, Fragment } from 'react'
import './Sortby_component.css'
import Select from 'react-select'
import { sortOptions } from './Sort_data.ts'

export default class SingleSelect extends Component {
  render () {
    return (
      <Select
        className='basic-single'
        classNamePrefix='select'
        defaultValue={sortOptions[0]}
        name='color'
        options={sortOptions}
      />
    )
  }
}
