import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='w-100 mt-4 d-flex justify-content-center align-items-center'>
            <Spinner animation="border" variant="warning" />
        </div>
    );
};

export default Loading;