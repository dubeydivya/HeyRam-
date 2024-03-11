import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import './css/Enquiry.css'
import { motion } from 'framer-motion';

function ContactCard() {
    return <>
        <motion.div className='container-fluid' initial={{width:0}} animate={{width:"100%"}} exit={{x:window.innerWidth,transition:{duration:0.1}}}>
            <div className='row form-row'>
                <div className='col-md-12 text-center  form-ele'>
                    <div className='form-comp'>
                        <div className=' form-title p-4 display-6'>
                            LET US DIRECT YOUR ENQUIRY
                        </div>
                        <div className='form-section w-75 text-start'>
                            <Form>
                                <Form.Group className="mb-3" >
                                    <Form.Label>YOUR NAME</Form.Label>
                                    <Form.Control type="text"  placeholder="Your Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>PHONE NUMBER</Form.Label>
                                    <Form.Control type="text" placeholder="Your Phone" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>E-MAIL</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" >
                                    <Form.Label>SUBJECT</Form.Label>
                                    <Form.Control type="text" placeholder="Subject" />
                                </Form.Group>


                                <Form.Group className="mb-3" >
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    SUBMIT
                                </Button> &nbsp;&nbsp;
                                <Link to='/digital-service'><Button variant="warning" type="submit">
                                    BACK
                                </Button></Link>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </>
}

export default ContactCard