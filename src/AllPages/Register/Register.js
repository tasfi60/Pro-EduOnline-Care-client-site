import React from 'react';
import {MDBIcon,MDBCheckbox}from 'mdb-react-ui-kit';
import { Container, Form } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';
import { useState } from 'react';

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const [error , setError] = useState('');

    const handleRegister = event =>
    {
       event.preventDefault();
       const form = event.target;
       const name = form.name.value;
       const photo = form.photo.value;
       const email = form.email.value;
       const password = form.password.value;
       console.log(name,email,password,photo);


       createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
            Form.reset();

            

        })
        .catch(error => {
          console.error(error);
          setError(error.message);
        })

    }

    


    return (
    <Container className='my-5'>

      
            <Form onSubmit={handleRegister} md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <Form.Group className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <Form.Control type="text" name="name" placeholder="Your Name" required/>
              </Form.Group>
            
              
              <Form.Group className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="camera me-3" size='lg'/>
                <Form.Control type="text" name="photo" placeholder="Photo URL" required/>
              </Form.Group>
            

              <Form.Group className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <Form.Control type="email" name="email" placeholder="Enter email" required/>
              </Form.Group>

              <Form.Group className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <Form.Control type="password" name="password" placeholder="Enter password" required/>
              </Form.Group>


              <button className='mb-4 btn btn-primary' size='lg'>Register</button>
              <p className='text-danger'>{error}</p>

            </Form>

      


    </Container>
    );
};

export default Register;