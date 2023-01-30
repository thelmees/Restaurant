import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


function RestCard({data}) {
  return (
    <>
    <Col>
    <Link style={{ textDecoration:'none' }} to={`view-restaurant/${data.id}`}>
      <Card className='mt-5 text-center w-100'>
      <Card.Img className='p-3' variant="top" src={data.photograph}/>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
        {data.neighborhood}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    </Col>
    </>
  )
}

export default RestCard