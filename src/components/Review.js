import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';



function Review({reviewData}) {
    const [open, setOpen] = useState(false);
  return (
    <>

        <Button className='mt-3'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        See Reviews
      </Button>
      <div style={{ minHeight: '150px' }}>
        <Collapse in={open} dimension="width">
          <div id="example-collapse-text">
            {
                reviewData.map(data=>(

            <Card body style={{ width: '400px' }} className='mt-2'>
                <h6>{data.name} {data.data}</h6>
                <h6>{data.rating}</h6>
                <h6>{data.comments}</h6>
            </Card>

                ))
            }
          </div>
        </Collapse>
      </div>

    </>
  )
}

export default Review