import React from 'react';
import logo from '../../images/bg.jpg';
import Card from 'react-bootstrap/Card';
import Projects from './Projects/Projects';
import Banner from './Banner/Banner';
import OFFER from './offer/OFFER';
import './Home.css';

const Home = () => {
    return (
        <div >
             {/* <Card className="home-container text-dark fw-bolder">
                    <Card.Img className='bg-img' src={logo} alt="" />
                    <Card.ImgOverlay>
                     <Card.Text className='text-container'>
                     <Card.Title className='fs-4 fw-bold'>Welcome to Pro EduOnline Care</Card.Title>
                     Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.
                     
                     </Card.Text>
                    </Card.ImgOverlay>
                   </Card> */}
                    <Banner></Banner>
                   <div>
                    <Projects></Projects>
                   </div>
                   <div>
                      <OFFER></OFFER>
                   </div>
        </div>
    );
};

export default Home;