import React from 'react'
import Card from 'react-bootstrap/Card';
import Zoom from 'react-reveal/Zoom';


function DigitalCard({ input }) {
    return <>
        <Zoom><div className='card-digital'>
            <Card style={{ margin: "10px", padding: "10px", backgroundColor: 'black', color: "wheat" }} >
                <div className='d-flex justify-content-center p-3'>
                    <Card.Img variant="top" style={{ width: "4rem" }} src={input.img} />
                </div>
                <Card.Body className='text-start'>
                    <Card.Title>{input.name}</Card.Title>
                    <Card.Text>
                        {input.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </Zoom>
    </>
}

export default DigitalCard