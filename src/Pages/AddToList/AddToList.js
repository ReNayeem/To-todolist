import React from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './AddToList.css'

const AddToList = () => {
    const [user] = useAuthState(auth);
    const handleAddTask = (event) => {
        event.preventDefault();
        const data = {
            email: event.target.email.value,
            name: event.target.name.value,
            description: event.target.description.value,
        }
        const url = 'https://to-todolist-server.onrender.com/tasks';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                event.target.reset()
                alert('Task successfully added.')
            });
    }

    return (
        <div className='custom-container d-flex align-items-center justify-content-center flex-column px-2'>
            <p className='p-text text-center'>Add to</p>
            <h1 className='h1-text text-center mb-4'>Your List</h1>
            <PageTitle title="Add to List"></PageTitle>


            <Form onSubmit={handleAddTask} className='d-flex form-container mx-auto flex-column'>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control name='email' className='form-input' type="email" value={user?.email} placeholder="email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control name='name' type="text" className='form-input' placeholder="task name" required />
                </Form.Group>

                <textarea name='description' required className='mt-3 textarea-input' placeholder='description' />
                <hr />

                <button className='custom-button mx-auto' type="submit">Add to List</button>
            </Form>
        </div>
    );
};

export default AddToList;