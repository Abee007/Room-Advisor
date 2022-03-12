import React from 'react';
import LandingPage from './LandingPage';
import ViewReviews from './ViewReviews';
import CheckUserExists from '../components/CheckUserExists'
import { Routes, Route, Navigate } from 'react-router-dom';
import AboutPage from './About';
import Favorites from './Favorites';

function RegisterandProtectedPages({ user }) {
    console.log(user);
    return(
        <Routes>
            {/* If the user isn't logged in navigate to Landing page. Else navigate to review page */}
            <Route path="/" element={(!user || user === undefined) ? <Navigate to='/logout' /> : <Navigate to='/checkuser' />} />

            {/* send user to about page */}
            <Route path="/about" element={<AboutPage/>} />

            {/* Important! We always have to check that the user has been registered before routing them anywhere else */}
            <Route path="/checkuser" element={user ? <CheckUserExists user={user}/> : <Navigate to='/' />} />

            TODO:
            {/* REGISTER USER */}
            <Route path="/register" element={<Navigate to='/logout' />} />


            {/* send user to favorites page */}
            <Route path="/favorites" element={<Favorites/>} />}

            {/* If no user exists, navigate back to the landing page */}
            <Route path="/viewreviews" element={user ? <ViewReviews/> : <Navigate to='/' />} />
            
            {/* Performs a soft logout so we don't actually log users out of cas */}
            <Route path="/logout" element={<LandingPage/>} />

        </Routes>
    );
}

export default RegisterandProtectedPages