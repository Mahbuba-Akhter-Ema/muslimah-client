import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hook/UseTitle';

const MyReviewCard = ({ review, deleteHandle }) => {
    useTitle('MyReview');
    const {loading} = useContext(AuthContext);

    if(!loading) {
        return <div>
            Loading.....
        </div>
    }
    // console.log(review)
    return (
        <div className="card w-4/5 mx-auto my-4 lg:my-10 bg-gray-300 text-black ">
            <div className="card-body items-center">
                <div className='flex justify-between'>
                    <h3 className='text-2xl font-bold  '>{review?.serviceName}</h3>
                    <img className='h-15 w-10 rounded-full' alt='' src={review?.image} />
                </div>
                <p>{review?.message}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => deleteHandle(review)} className="btn bg-red-600 border-0 rounded-xl">Delete</button>
                    <Link to={`/update/${review?._id}`}><button className="btn bg-yellow-500 border-0 rounded-xl text-black">Edit</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyReviewCard;