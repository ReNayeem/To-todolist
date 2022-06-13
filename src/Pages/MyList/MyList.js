import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './MyList.css'

const MyList = () => {
    const [user] = useAuthState(auth);
    const [getUser, setGetUser] = useState([]);
    useEffect(() => {
        if (user) {
            fetch(`https://to-todolist.herokuapp.com/task?email=${user.email}`)
                .then(res => res.json())
                .then(data => setGetUser(data))
        }
    }
        , [user])


    const handleDelete = id => {
        const proceed = window.confirm("Please select 'OK' for delete.");
        if (proceed) {
            const url = `https://to-todolist.herokuapp.com/tasks/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = getUser.filter(task => task._id !== id);
                    setGetUser(remaining);
                })
        }
    }
    return (
        <div className='my-5'>
            {
                getUser.length === 0 ? <p className='p-text do-not-have text-center'>You don't have any task</p> : <div>
                    <p className='p-text text-center'>Your</p>
                    <h1 className='h1-text text-center mb-4'>To Do List</h1>
                    <PageTitle title="My List"></PageTitle>


                    <table className='manage-task-table custom-table-container mx-auto'>
                        <tr>
                            <th className='w-25'>Name</th>
                            <th className='w-50'>Description</th>
                            <th className='w-25 text-center'>Remove</th>
                        </tr>
                    </table>

                    {
                        getUser.length === 0 ? (<Loading></Loading>) : ''
                    }

                    {
                        getUser?.map(usersTask =>
                            <table className='manage-task-table custom-table-container mx-auto'>
                                <tr>
                                    <td className='w-25'><h5>{usersTask.name}</h5></td>
                                    <td className='w-50'><h5>{usersTask.description}</h5></td>
                                    <td className='w-25 text-center'><button className='remove-button' onClick={() => handleDelete(usersTask._id)}>X</button></td>
                                </tr>
                            </table>)
                    }
                </div>
            }

        </div>
    );
};

export default MyList;