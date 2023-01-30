import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Operatingtime from './Operatingtime';
import Review from './Review';


function ViewRest() {

  const params = useParams()

  const [allrestaurent, setallrestaurent] = useState([])
  // function to api for datas inside json file
  const restuarentdata = async () => {
    await fetch('/restaurants.json').then(data => data.json()).then(result => {
      setallrestaurent(result.restaurants)

    })
  }
  // console.log(allrestaurent);

  const restData=allrestaurent.find(item=>item.id==params.id)
  // console.log(restData);

  useEffect(() => {
    restuarentdata()
  }, [])


  return (
    <>
     {restData?(
     <Row>
      <Col>
      <Image className='p-5' src={restData.photograph} fluid style={{height:650}}/>
      </Col>
      <Col className='mt-5'>
      <h1>{restData.name}</h1>
      <h3>{restData.neighborhood}</h3>
      <h4>Cuisine Type : {restData.cuisine_type}</h4>
      <h4>Address : {restData.address}</h4>
      
      <Operatingtime timedata={restData.operating_hours}/><br></br>
      <Review reviewData={restData.reviews}/>
      

      </Col>
     </Row>
    
    ):'null'}
    </>
  )
}


export default ViewRest