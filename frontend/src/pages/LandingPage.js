import './LandingPage.css'
import React from 'react';
import LoginComponent from '../components/Login'
import browse from '../static/browse.svg'
import filter from '../static/filter.svg'
import read from '../static/read.svg'

function LandingPage() {
    return(
        <section className='landing-page-container'>
            <div className='hero'>
                <h2 className='hero'> Choosing a room just got easier</h2>
                <p className='paragraph'> Room Advisor is a website where Yale students can candidly rate and review residential
                    college rooms. We seek to improve the Yale housing experiences by empowering Yale students with information
                    to help them find living spaces they love.
                </p>
                <LoginComponent/>
            </div>

            <div className='landing'>
                <h2 className='hero-secondary'> How it works? </h2>

                <div className='row'>
                    <div className='column'>
                        <img className='column-image' src={browse} alt="Browse rooms"/>
                        <h2 className='column-title'> Browse photos and info about suites & rooms.</h2>
                    </div>
                    <div className='column' style={{'backgroundColor':'#fff'}}>
                        <img className='column-image' src={filter} alt="Filter rooms"/>
                        <h2 className='column-title'>Search and filter rooms based on preferences.</h2>
                    </div>
                    <div className='column' style={{'backgroundColor':'#fff'}}>
                        <img className='column-image' src={read} alt="Read reviews"/>
                        <h2 className='column-title'>Read from thousands of student evaluations.</h2>
                    </div>
                </div>

            </div>
            
        </section>
    );
}

export default LandingPage;
