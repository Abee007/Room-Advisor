import React from 'react'
import './CardsContainer.css'
import SuiteCard from './ViewReviews/SuiteCard'

function CardsContainer () {
  return (
    <div className='suitecards-container'>
      <div><SuiteCard/></div>
      <div><SuiteCard/></div>
      <div><SuiteCard/></div>
      <div><SuiteCard/></div>
      <div><SuiteCard/></div>
      <div><SuiteCard/></div>
      <div><SuiteCard/></div>
      <div><SuiteCard/></div>
      <div><SuiteCard/></div>
      <div><SuiteCard/></div>
    </div>
  );
}

export default CardsContainer;