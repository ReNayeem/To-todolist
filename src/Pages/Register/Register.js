import React from 'react';
import { Form } from 'react-bootstrap';

const Register = () => {
    return (
        <div>
            <div className='custom-container login'>
                <Form className='d-flex form-container flex-column'>
                    <div className='d-flex form-title align-items-center justify-content-between'>
                        <h5 className='h5-text mb-3'>register</h5>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='form-input' type="text" placeholder="username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='form-input' type="email" placeholder="email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" className='form-input' placeholder="password" />
                    </Form.Group>
                    <hr />
                    <button className='custom-button' type="submit">Sign Up</button>
                </Form>
            </div>
        </div>
    );
};

export default Register;