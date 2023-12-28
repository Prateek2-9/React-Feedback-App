import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className='about'>
            <h1>about page</h1>
            <p>React app for leaving feedback</p>
        </div>
        <p>
            <Link to='/'>back to home</Link>
        </p>
    </Card>
  )
}

export default AboutPage