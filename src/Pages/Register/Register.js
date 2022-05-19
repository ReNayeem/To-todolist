import React from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import PageTitle from '../Shared/PageTitle/PageTitle';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating] = useUpdateProfile(auth);

    const navigate = useNavigate();

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/home');
    }

    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    }

    return (
        <div>
            <div className='custom-container login'>
                <Form onSubmit={handleRegister} className='d-flex form-container flex-column'>
                    <div className='d-flex form-title align-items-center justify-content-between'>
                        <h5 className='h5-text ms-0 mb-3'>register</h5>
                    </div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="name" className='form-input' type="text" placeholder="username" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name="email" className='form-input' type="email" placeholder="email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control name="password" type="password" className='form-input' placeholder="password" required />
                    </Form.Group>
                    <hr />
                    {errorElement}
                    <button className='custom-button' type="submit">Sign Up</button>
                    <p className='text-center my-1'><small>or</small></p>
                    <SocialLogin></SocialLogin>
                </Form>
                <p className='mt-4 text-center'><small>Already registered<br />please <Link className='text-decoration-none nav-title' as={Link} to="/login">login</Link></small></p>
            </div>
            <PageTitle title="Register"></PageTitle>
        </div>
    );
};

export default Register;