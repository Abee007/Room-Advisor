import React from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated'
import { roomSizes } from './data.ts'

const animatedComponents = makeAnimated()

// a dropdown menu component with the ability to choose multiple options for filtering for room sizes
export default function DropdownMultiselect () {
  return (

    <Select className='basic-multi-select' closeMenuOnSelect={false} components={animatedComponents} defaultValue={[roomSizes[4], roomSizes[5]]} isMulti options={roomSizes} />

  )
}
