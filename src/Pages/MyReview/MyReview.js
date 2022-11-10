import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [myreview, setMyReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myReview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReview(data))
    }, [user.email])

    const deleteHandle = datas => {
        const agree = window.confirm(`are you sure to ${datas.name}`)
        if (agree) {
            fetch(`http://localhost:5000/delete/${datas._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        const remaining = myreview.filter(review => review._id !== datas._id)
                        setMyReview(remaining)

                    }
                    console.log(data)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    }
    return (
        <div>
            {
                myreview.length === 0 && <p className='text-center mt-28 md:mt-96 text-4xl text-green-600'>No reviews were added</p>
            }
            {
                myreview.map(review => <MyReviewCard
                    deleteHandle={deleteHandle}
                    key={review._id}
                    review={review}
                ></MyReviewCard>)
            }
        </div>
    );
};

export default MyReview;