import React from 'react';
import logo from '../../images/bg.jpg';
import Card from 'react-bootstrap/Card';
import './Home.css';

const Home = () => {
    return (
        <div >
             <Card className="bg-light text-dark fw-bolder">
                    <Card.Img className='bg-img' src={logo} alt="" />
                    <Card.ImgOverlay>
                     <Card.Text className='text-container'>
                     <Card.Title className='fs-4 fw-bold'>Welcome to Pro EduOnline Care</Card.Title>
                       Quiz-Ace is a web-based Audience Engagement Cloud Platform for hosting interactive trivia quizzes at in-person, virtual, and hybrid events. No app install is required.
                     
                     </Card.Text>
                    </Card.ImgOverlay>
                   </Card>
        </div>
    );
};

export default Home;