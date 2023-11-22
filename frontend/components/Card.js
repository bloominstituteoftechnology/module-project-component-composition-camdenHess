import React from 'react'
import Figure from './Figure'

export default function Card({ title, imageURL, date, text }) {
    return (
    <div className='card'>
      <Figure imageURL={imageURL} date={date} />
      <h2>{title}</h2>
      <p>{text}</p>
  </div>)
  }