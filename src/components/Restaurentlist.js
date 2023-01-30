import React from 'react'
import { useState,useEffect } from 'react'
import RestCard from './RestCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Restaurentlist() {
    const [allrestaurent,setallrestaurent]=useState([])

      // function to api for datas inside json file
      const restuarentdata=async()=>{
        await fetch('/restaurants.json').then(data=> {data.json().then(result=>{
            setallrestaurent(result.restaurants)
        })    
        })
      }
      // console.log(allrestaurent);
      useEffect(()=>{
        restuarentdata()
      },[])
      
  return (
    <Row  sm={1} md={2} lg={3} xl={5}>
      {
        allrestaurent.map(item=>(
          <RestCard data={item}/>
        ))
      }
    
    </Row>
  )
}

export default Restaurentlist