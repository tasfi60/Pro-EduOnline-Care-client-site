import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Courses.css';
import {  useNavigate ,Link,useLoaderData } from 'react-router-dom';
import Coursedetails from '../Coursedetails/Coursedetails';


const Courses = () => {


  const courses = useLoaderData();

   
    return (
        <div className='course-container'>
        <h5 className='mt-4 ms-1 fs-3 fw-bold ps-5 shadow'>Explore All Courses</h5>
      <Row>
        <Col sm={3} className='sideBar'>
       {
            courses.map(t => 
            
          <div className='lefttopicbar'> 
              <div className='topicName'>
                <h5><Link to={`/courses/${t.id}`} className='topicbtn'>{t.name}</Link></h5> 
              </div> 
          </div> 
            )    

        }
             
        </Col>
        
        <Col sm={9} >
            <div className='topics-area mx-4 my-5'>
 
            
            {

            
            courses.map(cname => <Coursedetails key={cname.id} cname ={cname} ></Coursedetails>)

          }


            </div>
        </Col>
      </Row>
    </div>
    );
};

export default Courses;