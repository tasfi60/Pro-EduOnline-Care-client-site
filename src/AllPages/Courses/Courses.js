import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Courses.css';
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


const Courses = () => {

    const[course, setCourse]=useState([]);
    const navigate = useNavigate();

    useEffect( () =>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourse(data))
    }, [])



    function handleNavigate() {
      navigate(`/Courses/${course.id}`);
  }

    return (
        <div className='course-container'>
      <Row>
        <Col sm={4}>{
            course.map(cname => 
            <div className='lefttopicbar'> 
                <div className='topicName'>
                  <h4>{cname.name}</h4>
                </div > 
            </div > 
                )

        }
             
        </Col>
        
        <Col sm={8}>
            <div className='topics-area'>


            {
            course.map(cname => 
            <div className='grid-tepmplate' key={cname.id}>
            <img src={cname.image} alt="" />
            <h5>{cname.name}</h5>
            <small>{cname.description}</small>
            <p>Price: {cname.Price}</p>
            <button  className='w-50 btn' onClick={handleNavigate}>
                Purchase
            </button>
            
            </div>
            )

        }


            </div>
        </Col>
      </Row>
    </div>
    );
};

export default Courses;