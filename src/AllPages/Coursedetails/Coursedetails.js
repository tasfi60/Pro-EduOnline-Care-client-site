import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';


const Coursedetails = ({cname}) => {
    // const courses = useLoaderData();
    const {id,image,name,description,Price}= cname;

    const navigate = useNavigate();

    function handleNavigate() {
        navigate(`/courses/${id}`);
    }

    return (

        <div>
            <div className='grid-tepmplate'>
             <img src={image} alt="" />
             <h5><b>{name}</b></h5>
             <small>{description}</small>
             <p>Price: {Price}</p>
             <button  className='w-50 btn'onClick={handleNavigate}>
                Purchase
             </button>
            
             </div>
            
        </div>
    );
};

export default Coursedetails;