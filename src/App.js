import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import './index.css'
import data from './data'

export default function App() {
    const cardData = data.map(item => <Card
        key={item.id}
        item={item}
    />
    )
    return (
        <div>
            <Navbar />
            <Hero />
            <section className='cards-list'>
                {cardData}
            </section>
        </div>
    )
}