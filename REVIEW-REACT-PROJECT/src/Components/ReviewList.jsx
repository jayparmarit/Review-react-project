import React from 'react'
import Container from 'react-bootstrap/Container';


const ReviewList = ({ listData }) => {
  return (
    <>
      <Container className='border mt-5 p-5 w-50 bg-secondary'>
        {listData.length === 0 ? (
          <p>Review is Empty</p>
        ):(
          listData.map((item)=>{
            return (
              <>
                <div className=''>
                  <h4 className='fw-bold'>Name: {item.name}</h4>
                  <p className='fw-bold'>Description: {item.description}</p>
                  <p className='fw-bold'>Rating: {item.rate}</p>
                </div>
              </>
            )
          })
        )}
      </Container>
    </>
  )
}

export default ReviewList;