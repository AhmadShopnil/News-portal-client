import React from 'react';
import { Link } from 'react-router-dom';

const TremsConditions = () => {
    return (
        <div>
            <h2>Trems and Conditions</h2>
            <p>I will give you my all property!! </p>
            <p>Go back to: <Link to='/signup'>sign up </Link></p>
        </div>
    );
};

export default TremsConditions;