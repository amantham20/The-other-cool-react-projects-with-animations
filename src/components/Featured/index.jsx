import React from 'react'

import './style.scss'

import photos from '../../data'


const Featured = () => {
  const [firstUrl, SecondUrl] = photos;
  return (
    <section className='featured__section'>
      <div className='featured-row-layout'>
        <h6>green</h6>
        <img src={firstUrl} />
        {/* <p>{firstUrl}</p> */}
      </div>
      <div className='featured-column-layout'>
        <h6>Lilly</h6>
        <img src={SecondUrl} />

      </div>
    </section>
  )
}

export default Featured