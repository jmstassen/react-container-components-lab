// Code MovieReviews Here
import React from 'react'

export default function MovieReviews(props) {
  
  return(
    <div className="review-list">
      <ul>
        {props.reviews.map(review => {
          return (
            <li key={review.link.url} className="review"> 
              <h3>{review.headline} | Opens: {review.opening_date}</h3>
              <p>"{review.summary_short}"</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}