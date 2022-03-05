import React from 'react';
import LandingPage from './pages/LandingPage';
import RegisterandProtectedPages from './pages/ProtectedPages';
import Nav from './components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';


function LandingRegisterProtected({ user }) {
    return(
        <Router>
            <div className="App">
                <Nav user={user}/>  
                <div>
                    {(user === undefined) ? (<LandingPage/>) : (<RegisterandProtectedPages user={user}/>)}
                </div>
            </div>
        </Router>
    );
}

export default LandingRegisterProtected;