// import React from 'react'
import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';




const ReviewForm = ({ data }) => {

    const [input, setInput] = useState({
        name: "",
        description: "",
        rate: "",
    });


    const handleReviewData = (identifier, e) => {
        setInput((prev) => {
            return {
                ...prev,
                [identifier]: e.target.value,
            };
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        data(input);

        //   console.log("data", input);
        setInput({ name: "", description: "", rate: "" });


    };


    return (
        <>
            <Container className='border mt-5 p-5 w-25 bg-secondary'>
                <h1 className='border-bottom text-center mb-5 pb-2 fw-bold text-white'>Review Project</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Label className='border-bottom text-white'>Your name</Form.Label>
                        <Form.Control type="name" placeholder="Enter your name" className='w-100' onChange={(e) => handleReviewData("name", e)} value={input.name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className='border-bottom text-white'>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} className='w-100' onChange={(e) => handleReviewData("description", e)} value={input.description} />
                    </Form.Group>
                    <Form.Select
                        aria-label="Default select example"
                        onChange={(e) => handleReviewData("rate", e)}
                        className="w-100 mb-3"  value={input.rate}
                    >
                        <option>Select Rating</option>
                        <option value="⭐">1</option>
                        <option value="⭐⭐">2</option>
                        <option value="⭐⭐⭐">3</option>
                        <option value="⭐⭐⭐⭐">4</option>
                        <option value="5⭐⭐⭐⭐⭐">5</option>
                    </Form.Select>
                    <Button variant="success" type="submit">Submit</Button>
                </Form>
            </Container>
        </>
    )
};

export default ReviewForm;