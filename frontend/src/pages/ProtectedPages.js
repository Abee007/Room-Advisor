import React from 'react';
import LandingPage from './LandingPage';
import ViewReviews from '../components/ViewReviews';
import { Routes, Route, Navigate } from 'react-router-dom';


function ProtectedPages({ user }) {
    return(
        <Routes>
            <Route path="/" exact element={<LandingPage/>} />
            {/* If no user exists, navigate back to the landing page */}
            <Route path="/viewreviews" element={user ? <ViewReviews/> : <Navigate to='/' />} />
            {/* Performs a soft logout so we don't actually log users out of cas */}
            <Route path="/logout" element={<Navigate to='/' />} />
        </Routes>
    );
}

export default ProtectedPages;