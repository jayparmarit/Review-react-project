import React, { useState } from 'react'
import ReviewForm from './ReviewForm'
import ReviewList from './ReviewList'

export const ReviewData = () => {
    const [review, setReview] = useState([]);

    const getFormData = (data) => {
        setReview((prev)=>[...prev,data])
    }
  return (
        <>
            <ReviewForm data={getFormData}/> 
            <ReviewList listData={review}/>

        </>
  )
}

export default ReviewData