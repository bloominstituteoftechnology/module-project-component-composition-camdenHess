import React from 'react'

export default function Figure({imageURL, date}) {
    return (
      <figure>
        <img src={imageURL} alt='space image' />
        <figcaption>Picture taken on: {date}</figcaption>
      </figure>
    )
  }