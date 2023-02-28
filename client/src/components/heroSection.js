import React from 'react'
import '../App.css'
import { Button } from './button';
import './heroSection.css';

function heroSection() {
    return (
        <div className='hero-container'>
            <video className='/public/videos/sofa-background.mp4' autoPlay loop muted></video>
            <h1>Find the perfect home today!</h1>
            <p>Your Journey starts here!</p>
            <div className='hero-btn'>
                <button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                    GET STARTED
                </button>
            </div>
        </div>
    )
}

export default heroSection
