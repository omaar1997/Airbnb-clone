import React from 'react'
import logo from '../pics/Group 77.png'

export default function Hero() {
    return (
        <div className="hero">
            <img src={logo} className="hero-img" />
            <h1 className="hero-title">Online Experiences</h1>
            <p className="hero-txt">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}