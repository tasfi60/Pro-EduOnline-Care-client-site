import React, { useContext, useState } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';
// import useTitle from '../../hooks/useTitle';
import { FaGoogle, FaGithub, FaEnvelope, FaLock, FaUser, FaCameraRetro } from "react-icons/fa";

import './Register';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
    // useTitle('Register')


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Please verify your email address.')
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        // <Form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center my-3 mx-5 px-3 py-5 border rounded-3 form">
        //     <Form.Group className="mb-3" controlId="formBasicEmail">
        //         < Form.Label > Your Name</Form.Label >
        //         <Form.Control name="name" type="text" placeholder="Your Name" />
        //     </Form.Group >
        //     <Form.Group className="mb-3" controlId="formBasicEmail">
        //         <Form.Label>Photo URL</Form.Label>
        //         <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="formBasicEmail">
        //         <Form.Label>Email address</Form.Label>
        //         <Form.Control name="email" type="email" placeholder="Enter email" required />
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="formBasicPassword">
        //         <Form.Label>Password</Form.Label>
        //         <Form.Control name="password" type="password" placeholder="Password" required />
        //     </Form.Group>
        //     <Form.Group className="mb-3" controlId="formBasicCheckbox">
        //         <Form.Check
        //             type="checkbox"
        //             onClick={handleAccepted}
        //             label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />
        //     </Form.Group>
        //     <Button variant="primary" type="submit" disabled={!accepted}>
        //         Register
        //     </Button>
        //     <Form.Text className="text-danger">
        //         {error}
        //     </Form.Text>
        // </Form >

        <div className="container-fluid vh-100">
            <div className="">
                <div className="rounded d-flex justify-content-center">
                    <div className="form col-md-4 col-sm-12 shadow-lg p-5 rounded  mb-5 " >
                        <div className="text-center">
                            <h3 className="text-white fw-bold fs-2">Welcome to Register Page!!</h3>
                        </div>
                        <Form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center align-items-center my-3 px-3 py-5 mx-5 border shadow-lg rounded-3 bg-light ">
                            <div className="p-4">
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"><FaUser></FaUser> </span>
                                    <input type="text" className="form-control" name="name" placeholder="Full Name" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"><FaCameraRetro></FaCameraRetro> </span>
                                    <input type="text" className="form-control" name="photoURL" placeholder="Photo URL" />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"> <FaEnvelope></FaEnvelope></span>
                                    <input type="email" className="form-control" name="email" placeholder="Email" required />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light"><FaLock></FaLock></span>
                                    <input type="password" className="form-control" name="password" placeholder="Password" required />
                                </div>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check
                                        type="checkbox"
                                        onClick={handleAccepted}
                                        label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />
                                </Form.Group>

                                <Button variant="primary" className="btn-xl fw-bold" type="submit" disabled={!accepted}> Register</Button>
                                <Form.Text className="text-danger">
                                    {error}
                                </Form.Text>
                                <hr />

                                <p className='mt-3'>Already an User? <Link to="/login"> <span className='fw-bold'>Login</span></Link></p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;



























// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// import {MDBIcon,MDBCheckbox}from 'mdb-react-ui-kit';
// import { Container, Form } from 'react-bootstrap';
// import { useContext } from 'react';
// import { AuthContext } from '../../Context/AuthProvider/Authprovider';



// const Register = () => {

//     const {createUser} = useContext(AuthContext);
//     const [error , setError] = useState('');

//     const handleRegister = event =>
//     {
//        event.preventDefault();
//        const form = event.target;
//        const name = form.name.value;
//        const photo = form.photo.value;
//        const email = form.email.value;
//        const password = form.password.value;
//        console.log(name,email,password,photo);


//        createUser(email,password)
//         .then(result =>{
//             const user = result.user;
//             console.log(user);
//             setError('');
//             // form.reset();
//             // ReactDOM.findDOMNode(this.messageForm).reset();
            

//         })
//         .catch(error => {
//           console.error(error);
//           setError(error.message);
//         })

//     }

    


//     return (
//     <Container className='my-5'>

      
//             <Form   onSubmit={handleRegister} md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

//               <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

//               <Form.Group className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="user me-3" size='lg'/>
//                 <Form.Control type="text" name="name" placeholder="Your Name" required/>
//               </Form.Group>
            
              
//               <Form.Group className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="camera me-3" size='lg'/>
//                 <Form.Control type="text" name="photo" placeholder="Photo URL" required/>
//               </Form.Group>
            

//               <Form.Group className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="envelope me-3" size='lg'/>
//                 <Form.Control type="email" name="email" placeholder="Enter email" required/>
//               </Form.Group>

//               <Form.Group className="d-flex flex-row align-items-center mb-4">
//                 <MDBIcon fas icon="lock me-3" size='lg'/>
//                 <Form.Control type="password" name="password" placeholder="Enter password" required/>
//               </Form.Group>


//               <button className='mb-4 btn btn-primary' size='lg'>Register</button>
//               <p className='text-danger'>{error}</p>

//             </Form>

      


//     </Container>
//     );
// };

// export default Register;