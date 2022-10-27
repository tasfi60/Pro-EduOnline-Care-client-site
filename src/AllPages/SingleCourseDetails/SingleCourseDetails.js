import { faHourglass2 } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {MDBIcon} from 'mdb-react-ui-kit';
import Pdf from "react-to-pdf";
import './SingleCourseDetails.css';

const ref = React.createRef();


const SingleCourseDetails = () => {

    
    const singlecourse = useLoaderData(); 

    return (
        <div>
             {
                
                    singlecourse.map(details =>   
                        <div className='card-container container my-5'>
             
                        <h3><b>{details.title}  </b>
                        <Pdf targetRef={ref} filename={details.name}>
                        {({ toPdf }) =>  <MDBIcon fas icon="download ms-2" onClick={toPdf} className ='pdfbtn' size='sm'/>}
                        </Pdf>
                       </h3>  
                       
                  <Card ref={ref}>
                      <Card.Img variant="top"  className='card-img' src={details.image} />
                   <Card.Body>
                  <Card.Title><b>{details.name}</b></Card.Title>
                  <Card.Text>
                      {details.description}
                  </Card.Text>
           
                  <Card.Title><b>{details.title1}</b></Card.Title>
                  <Card.Text>
                      {details.description1}
                  </Card.Text>
                 
                  <Card.Title><b>Duration: {details.duration}</b></Card.Title>
                  <Card.Title><b>Price: {details.price}</b></Card.Title>
                  <Button className='access-btn'>Access Now </Button>
                  <Button className='access-btn1'><Link to={`/checkout/${details.category_id}`} className='navigate-link'>Get Premium Access</Link></Button>
                </Card.Body>
                   </Card>
           
               </div> 
                        
                        
                        
                        
                        )
                   
                        
                   
             }       

        </div>
    );
};

export default SingleCourseDetails;




