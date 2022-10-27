import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/favicon.ico';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import {FaUser,FaIdCard,FaSignOutAlt} from 'react-icons/fa';
import './Header.css';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/Authprovider';


const Header = () => {
  
    const {user,logOut} = useContext(AuthContext);
    console.log(user)

    const handleLogOut = () =>{
      logOut()
       .then( () => {})
       .catch( error => console.error(error))
    }
   

    const [theme, setTheme] = useState('');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } 
    else  {
      setTheme('light');
    }
  };
  
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

    
    return (
     
      <div className={`Header ${theme}`}>
      <Navbar collapseOnSelect expand="lg" variant='light' className='pt-4 pb-4'>  
        <img className='image' src={logo} alt="" />
          <Navbar.Brand href="#home" className='ms-3 fs-3 mt-3 name'>Pro EduOnline Care</Navbar.Brand>  
          <Navbar.Toggle aria-controls="navbarScroll"  data-bs-target = "#navbarScroll" />  
          <Navbar.Collapse id="navbarScroll">  
          
            <Nav className='navstyle w-100'>  
                  <NavLink eventkey="1" className='ps-4' as={Link} to="/">Home</NavLink>
                  <NavLink eventkey="2" className='ps-4' as={Link} to="/courses" >Course</NavLink>
                  <NavLink eventkey="3" className='ps-4' as={Link} to="/Blog" >Blog</NavLink>
                  <NavLink eventkey="4" className='ps-4' as={Link} to="/FAQ" >FAQ</NavLink>
                  <Nav className='sidebar d-flex'>
          
                  {
                        user?.photoURL?
                        <Image data-toggle="tooltip" title={user?.displayName} style={{height:'30px', marginRight:'10px'}} 
                               roundedCircle
                              src={user?.photoURL}>
                        </Image> 
                        : <NavLink as={Link} to="/Login" ><FaUser ></FaUser></NavLink>
                      
                  }

                  {
                      user?.uid?
                      <>
                       <span>{user?.displayName}</span>
                       <NavLink onClick={handleLogOut} className='ms-3 logout-btn'>Log Out<FaSignOutAlt className=''></FaSignOutAlt></NavLink>
                       
                       </>
                      :

                      <>
                      <NavLink  className='' as={Link} to="/Login" >Log in</NavLink>
                      <NavLink eventkey="6"  as={Link} to="/Register">Register<FaIdCard className='ms-2'></FaIdCard></NavLink>   
                      </>
                     
                    }
                
                     
                <button onClick={toggleTheme} className='toggle-btn'>Toggle</button>
                       
                
                  </Nav>
                  
            </Nav>  
         

          </Navbar.Collapse>  
        {/* </Container>   */}
       
      </Navbar>  
      </div>
    );
};

export default Header;