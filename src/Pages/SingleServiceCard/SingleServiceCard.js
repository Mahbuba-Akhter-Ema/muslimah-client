import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaDollarSign, FaGrinStars } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import ShowReview from '../ShowReview/ShowReview';

const SingleServiceCard = () => {
    const {user} = useContext(AuthContext);
    const product = useLoaderData();
    const {_id ,img, title, price, rating, description } = product;

    const navigate = useNavigate();

    // Riviews.........send post
  function ReviewHandler(event) {
    event.preventDefault();
    if (!user) {
      toast.error("Please Login");
      navigate("/login");
      return;
    }
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const massage = form.massage.value;
    const review = {
      serviceID: _id,
      photo: user.photoURL,
      name,
      email,
      massage: massage,
    };
    //  post data
    fetch("https://muslimah-server.vercel.app/review", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.acknowledged){
          toast.success("Successfully toasted!");
        }
        form.reset();
      })
      .catch((err) => {
        toast.error(err.massage);
      });
    // ...........
  }

  // get data .......

  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch(`https://muslimah-server.vercel.app/review?serviceID=${_id}`)
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, [_id]);
    
    return (
        <div className='grid grid-cols-1 gap-6 mt-10 lg:grid-cols-2 md:grid-cols-2'>
            <div className="flex flex-col transition duration-300 bg-zinc-900 text-white rounded mt-10">
                <div className="relative w-full h-48">
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} alt="" />
                        </PhotoView>
                    </PhotoProvider>
                </div>
                <div className="flex flex-col justify-between flex-grow p-4 border border-t-0 rounded-b">
                    <div className='mt-56'>
                        <div className="text-lg font-bold">{title}</div>
                        {
                            <p className="text-sm text-white">
                                {description}
                            </p>
                        }
                        <div className="flex justify-items-center justify-around p-2 mt-5 mb-4 font-bold sm:text-3xl">
                            <div className='flex items-center'>
                                <span className='text-2xl'><FaDollarSign /></span> {price}
                            </div>
                            <div className='flex items-center'>
                                <span className='text-2xl mr-2'><FaGrinStars /></span> {rating}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mt-8 bg-zinc-900 rounded">
        <form onSubmit={ReviewHandler} className="sendReview">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            defaultValue={user?.displayName}
            className="input input-bordered input-md w-11/12 m-4"
            required
          />
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            placeholder="Your Email"
            className="input input-bordered input-md w-11/12 m-4"
            required
          />
          <input
            type="text"
            name="massage"
            placeholder="Your Massage "
            className="input input-bordered input-md w-11/12 m-4"
            required
          />
          <div className="flex justify-center mt-3">
            <button className="btn btn-primary w-4/5">Submit</button>
          </div>
        </form>

        <div className="view">
          <div className="">
            {review.map((rv) => <ShowReview key={rv._id} rv={rv}></ShowReview>)}
          </div>
        </div>
      </div>
        </div>
    );
};

export default SingleServiceCard;