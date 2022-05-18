import React from 'react';
import './Home.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { Link } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Home = () => {

    const [user] = useAuthState(auth);

    return (
        <div className='custom-container text-center home'>
            <h1>Organize your<br />work and life, finally.</h1>
            <p>Become focused, organized, and calm with Todoist<br />The world’s #unknown task manager and to-do list app.</p>
            {
                user ? <Link className='text-decoration-none' as={Link} to="/myList"><button className='custom-button'>My To Do List</button></Link> : <Link className='text-decoration-none' as={Link} to="/login"><button className='custom-button'>Start for free</button></Link>
            }
            <PageTitle title="Home"></PageTitle>
        </div>
    );
};

export default Home;