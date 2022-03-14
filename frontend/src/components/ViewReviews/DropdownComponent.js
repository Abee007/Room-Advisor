import React, { Component } from 'react'
import Select from 'react-select'
import { colleges } from './data.ts'
import './DropdownComponent.css'

const styles = {
  control: base => ({
    ...base,
    fontSize: '1rem'
  }),
  menu: base => ({
    ...base,
    fontSize: '1rem'
  })
}

export default class DropdownComponent extends Component {
  render () {
    return (
      <Select
        className='basic-single college-select'
        classNamePrefix='select'
        defaultValue={colleges[0]}
        name='color'
        options={colleges}
        styles={styles}
      />
    )
  }
}
