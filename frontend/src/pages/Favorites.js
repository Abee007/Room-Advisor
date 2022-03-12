import React, { useEffect, useState } from 'react'
import CardsContainer from '../components/ViewReviews/CardsContainer'

function Favorites () {
  useEffect(() => {
    fetchItems()
  }, [])

  const [items, setItems] = useState([])

  const fetchItems = async () => {
    const data = await fetch('/favorites')
    const items = await data.json()
    setItems(items)
  }

  return (
    <section>

      <div>
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

export default Favorites
