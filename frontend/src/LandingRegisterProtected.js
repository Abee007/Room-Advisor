import React from 'react'
import LandingPage from './pages/LandingPage'
import AboutPage from './pages/About'
import RegisterandProtectedPages from './pages/ProtectedPages'
import Nav from './components/Nav'
import NavHome from './components/ViewReviews/NavHome'
import { BrowserRouter as Router } from 'react-router-dom'

function LandingRegisterProtected ({ user }) {
  return (
    <Router>
      <div className='App'>

        {!user
        // if not logged in
          ? (<Nav user={user} />)

        // if logged in
          : (<NavHome user={user} />)}

        <div>
          {(user === undefined) ? (<LandingPage />) : (<RegisterandProtectedPages user={user} />)}
        </div>

      </div>
    </Router>
  )
}

export default LandingRegisterProtected
