import React, { useContext } from 'react';
import { Container,Row,Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import toast from 'react-hot-toast';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import Logo from '../../images/login.png';
import {MDBIcon} from 'mdb-react-ui-kit';
import './Login.css';
import { AuthContext } from '../../Context/AuthProvider/Authprovider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';

const Login = () => {

    const {providerLogin,signIn,setLoading,setUser} = useContext(AuthContext);
    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [error , setError] = useState('');
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';



    const handleGithubSignIn = () =>{

      providerLogin(githubProvider)
      .then(result =>{
          const user = result.user;
          console.log(user);
          setUser(user);
          navigate(from, {replace:true});

      })
      .catch(error => console.error(error))

  }


    

    const handleGoogleSignIn = () =>{

        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setUser(user);
            navigate(from, {replace:true});

        })
        .catch(error => console.error(error))

    }


    // const handleLogin = event =>
    // {
    //    event.preventDefault();
    //    const form = event.target;
    //    const email = form.email.value;
    //    const password = form.password.value;
    //    console.log(email,password);


    //    signIn(email,password)
    //     .then(result =>{
    //         const user = result.user;
    //         console.log(user);
    //         form.reset();
    //         setError('');
    //         navigate(from, {replace:true});

    //     })
    //     .catch(error => {
    //       console.error(error);
    //       setError(error.message);
    //     })

    // }
    const handleSubmit = event => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;

      signIn(email, password)
          .then(result => {
              const user = result.user;
              setUser(user);
              console.log(user);
              form.reset();
              setError('');
              
               navigate(from, {replace: true});
              
              })
          .catch(error => {
              console.error(error)
              setError(error.message);
          })
          .finally(() => {
              setLoading(false);
          })
  }

    return (
        <Container fluid className="p-2 my-5 font-family">

            <Row>
  
              <Col col='10' md='6'>
                <img className='login-img'
                 alt="logo"
                 src={Logo}
                 />
              </Col>

             <Col col='4' md='6'>

      <div className='login-form'>
        <form onSubmit={handleSubmit} md='10' lg='6' className=' order-2 order-lg-1 d-flex flex-column align-items-center'>

          <div className="d-flex flex-row align-items-center mb-4 mt-5">
            <MDBIcon fas icon="envelope me-3" size='lg'/>
            <input type="email"className="form-control"  name='email'placeholder="Enter email" required/>
          </div>

          <div className="d-flex flex-row align-items-center mb-4">
            <MDBIcon fas icon="lock me-3" size='lg'/>
            <input type="password" className="form-control" name='password' placeholder="Enter password" required/>
          </div>

          <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0 me-3">Don't have an account?</p>
               <Link to='/Register'><Button variant="info">Create Now</Button></Link>
            </div>
  
            {/* <Button className="mb-4 w-50" size="lg">Sign in</Button> */}
            <button className='mb-4 w-50 btn btn-primary' size='lg'>Log in</button>
            <p className='text-danger'>{error}</p>
        </form>



        <div className="divider d-flex align-items-center my-4">
              <p className="text-center fw-bold mx-5 px-5 mb-0">OR</p>
            </div>
  
  
            <Button className="mb-4 btncontainer"  onClick={handleGithubSignIn} size="lg">
              <MDBIcon fab icon="github" className="mx-1"/>
              Continue with Github
            </Button>
            <Button className="mb-4 btncontainer" onClick={handleGoogleSignIn} size="lg" >
              <MDBIcon fab icon="google" className="mx-1"/>
              Continue with Google
             </Button> 
        </div>
           
         </Col>
  
       </Row>
  
          

</Container>
        
        
    );
};

export default Login;


