import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Coursedetails = () => {
    const courses = useLoaderData();
    return (
        <div>
            {
                courses.map(cdetails => <h2>{cdetails.name}</h2>)
            }
            
        </div>
    );
};

export default Coursedetails;