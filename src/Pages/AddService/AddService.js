import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../Hook/UseTitle';
import addService from '../../images/add-to-cart.gif';

const AddService = () => {
    useTitle('Add Service');
    
    const submitHandle = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const img = form.image.value;
        const description = form.description.value;
        const product = { title, price, rating, img, description };
        // console.log(title, rating, photo, description, price);
        fetch("https://muslimah-server.vercel.app/service", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    toast.success("Add success");
                }
                // console.log(data);
            })
            .catch((err) => console.log(err));
    };
    return (
        <div className='grid grid-cols-1 bg-zinc-900 mt-10 lg:grid-cols-2 md:grid-cols-2 rounded-lg'>
            <div className='m-2'>
                <img alt='' src={addService}></img>
            </div>
            <div>
                <form onSubmit={submitHandle} className="">
                    <h1 className="text-teal-400 text-3xl my-3 font-semibold">
                        Add Product
                    </h1>
                    <input
                        type="text"
                        required
                        placeholder="Product title"
                        name="name"
                        className="input input-bordered input-md w-full"
                    />

                    <input
                        type="text"
                        required
                        placeholder="Price"
                        name="price"
                        className="input input-bordered block mt-2 input-md w-full"
                    />
                    <input
                        type="text"
                        placeholder="Rating"
                        name="rating"
                        className="input input-bordered block mt-2 input-md w-full"
                    />
                    <input
                        type="text"
                        required
                        placeholder="Photo URL"
                        name="image"
                        className="input input-bordered block mt-2 input-md w-full"
                    />
                    <textarea
                        placeholder="Description"
                        type="text"
                        required
                        className="mt-5 input input-bordered input-lg w-full h-36"
                        name="description"
                    ></textarea>
                    <div className="flex justify-center my-3">
                        <button className="block p-3 text-center rounded-lg text-gray-900 bg-teal-400 hover:bg-teal-600">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;