import React, { useEffect, useState } from 'react'
import CardsContainer from './CardsContainer'
import Results from './Results'


function ViewReviews () {
  useEffect(() => {
    fetchItems()
  }, [])

  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const data = await fetch('/viewreviews')
    const items = await data.json()
    setItems(items)
  }

  return (
    <section>

      <div>
        <Results />
        <CardsContainer/>
      </div>

      {
        items.map(item => (
          <div key={item.name}>
            <p>{item.name}</p>
            <p>{item.msg}</p>
          </div>
        ))
      }
    </section>
  )
}

export default ViewReviews
