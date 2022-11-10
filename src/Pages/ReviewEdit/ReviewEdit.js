import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hook/UseTitle';

const ReviewEdit = () => {
    useTitle('Review');
    const editData = useLoaderData()
    const [newData, setNewData] = useState([])

    const handleSubmit = event => {
        event.preventDefault()
        console.log(newData)


        fetch(`https://muslimah-server.vercel.app/myReview/${editData?._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Review Edit SuccessFully')
                    event.target.reset()
                }

            })
            .catch(error => {
                console.error(error)
            })
    }


    const changeData = event => {
        const value = event.target.value;
        const name = event.target.name;
        const newUser = { ...newData }
        newUser[name] = value
        setNewData(newUser)
    }
    return (
        <div className="card w-4/5 mx-auto mt-4 bg-base-100 shadow-xl">
            <form onSubmit={handleSubmit} className="card-body items-center">
                <h2 className="card-title">{editData?.name}</h2>
                <input onChange={changeData} type="text" name='message' defaultValue={editData?.message} placeholder="Type here" className="input input-bordered input-info w-full " />
                <div className="card-actions flex justify-center items-center">
                    <button className="btn rounded-xl bg-yellow-400 border-0 text-black hover:bg-yellow-500 font-bold">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ReviewEdit;