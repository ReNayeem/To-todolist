import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='custom-container not-found'>
            <h1 className='h1-text text-center'>404!</h1>
            <h2 className='p-text text-center'>The page you are looking for is not found</h2>
            <PageTitle title="Page Not Found"></PageTitle>
        </div>
    );
};

export default NotFound;