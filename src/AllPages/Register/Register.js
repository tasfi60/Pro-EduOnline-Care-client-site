import React from 'react';
import {MDBIcon,MDBCheckbox}from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = event =>
    {
       event.preventDefault();
       const form = event.target;
       const name = form.name.value;
       const email = form.email.value;
       const password = form.password.value;
       console.log(name,email,password);


       createUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();

        })
        .catch(error => console.error(error))

    }

    


    return (
    <Container className='my-5'>

      
            <form onSubmit={handleRegister} md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <input type='text' className="form-control" name='name' placeholder="Your Name" required/>
                
              </div>
            

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <input type="email"className="form-control"  name='email'placeholder="Enter email" required/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <input type="password" className="form-control" name='password' placeholder="Enter password" required/>
              </div>

              {/* <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4' type='password'/>
              </div> */}

              <div className='mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <button className='mb-4 btn btn-primary' size='lg'>Register</button>

            </form>

            {/* <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol> */}


    </Container>
    );
};

export default Register;