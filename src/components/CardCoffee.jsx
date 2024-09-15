import { data } from 'autoprefixer';
import React from 'react';
import Swal from 'sweetalert2';

const CardCoffee = ({ coffee }) => {

    const { _id, name, quantity, supplier, category, taste, details, photo } = coffee;

    const handleDelete = _id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Movie" />
            </figure>
            <div className="flex justify-between w-full">
                <div className='ps-4 pt-4'>
                    <h2 className="card-title">{name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{category}</p>
                    <p>{taste}</p>
                    <p>{details}</p>
                </div>

                <div className="card-actions justify-end">
                    <div className="join join-vertical pr-4 space-y-4 pt-3">
                        <button className="btn join-item ">View</button>
                        <button className="btn join-item">Edit</button>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardCoffee;