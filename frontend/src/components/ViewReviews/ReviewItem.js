import React from 'react'
import './ReviewItem.css'
import Badge from 'react-bootstrap/Badge'

class ReviewItem extends React.Component {

  render () {
    const { item , year , classStanding} = this.props
    return (

      <div className='review-container' style={{ padding: '6px' }} id={item}>

        {/* Title description showing the class year and review date of the review */}
        <h4 className='subtext'> Lived as a <Badge className='small-badge' bg='secondary'> {classStanding} </Badge> in <Badge className='small-badge' bg='info'> {year} </Badge>  </h4>

        {/* sample review text */}
        <p> {item} </p>

      </div>
    )
  }
}

export default ReviewItem
