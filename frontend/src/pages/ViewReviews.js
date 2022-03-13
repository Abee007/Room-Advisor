import React, { useEffect, useState } from 'react'
import CardsContainer from '../components/ViewReviews/CardsContainer'
import Results from '../components/ViewReviews/Results'

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
        {/* a header section to show a summary of results
        (eg # of suites found matching the search plus sort by component)
        after a user makes a search */}
        <Results />

        {/* a container holding all the suite cards */}
        <CardsContainer />

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
