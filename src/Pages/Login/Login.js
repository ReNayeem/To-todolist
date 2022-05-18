import React, { useRef } from 'react';
import './Login.css'
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { async } from '@firebase/util';
import { sendPasswordResetEmail } from 'firebase/auth';
import toast from 'react-hot-toast';

const Login = () => {

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const emailRef = useRef('');

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let errorElement;

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        errorElement = <p className='text-center'><small className='text-danger'>Error: {error?.message} {gError?.message}</small></p>
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast.success('Reset password email sent');
        }
        else {
            toast.error('Please enter your email address');
        }
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='custom-container login'>
            <Form onSubmit={handleSubmit} className='d-flex form-container flex-column'>
                <div className='d-flex form-title align-items-center justify-content-between'>
                    <h5 className='h5-text mb-3'>login</h5>
                    <button onClick={resetPassword} className='p-text mb-3'>Reset password?</button>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} name='email' className='form-input' type="email" placeholder="email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control name='password' type="password" className='form-input' placeholder="password" />
                </Form.Group>
                <hr />
                {errorElement}
                <button className='custom-button' type="submit">Sign In</button>
                <p className='text-center my-1'><small>or</small></p>
                <button onClick={() => signInWithGoogle()} className='custom-button' type="submit">Google Sign In</button>
            </Form>
            <p className='mt-4 text-center'><small>New to To-TodoList<br />please <Link className='text-decoration-none nav-title' as={Link} to="/register">register</Link></small></p>
        </div>
    );
};

export default Login;