import React, { Component } from 'react'
import './SortbyComponent.css'
import Select from 'react-select'
import { sortOptions } from './SortData.ts'

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
