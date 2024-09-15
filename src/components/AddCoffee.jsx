import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const category = form.category.value
        const taste = form.taste.value
        const details = form.details.value
        const photo = form.photo.value

        const newCoffee = { name, quantity, supplier, category, taste, details, photo };
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div className='p-20 bg-slate-200'>
            <h3 className='text-6xl text-center text-orange-300 mb-8'>Add Coffee</h3>
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className='md:flex gap-4'>
                    <div className='form-control w-1/2'>
                        <label className='label-text'>Coffee Name</label><br />
                        <input className='mb-4 border border-collapse w-full p-2 rounded' type="text" name='name' placeholder='coffee name' />
                    </div>
                    <div className='form-control w-1/2'>
                        <label className='label-text'>Quantity</label><br />
                        <input className='mb-4 border border-collapse w-full p-2 rounded' type="text" name='quantity' placeholder='quantity' />
                    </div>
                </div>
                {/* form supplier and taste  row */}
                <div className='md:flex gap-4'>
                    <div className='form-control w-1/2'>
                        <label className='label-text'>Supplier</label><br />
                        <input className='mb-4 border border-collapse w-full p-2 rounded' type="text" name='supplier' placeholder='supplier name' />
                    </div>
                    <div className='form-control w-1/2'>
                        <label className='label-text'>Taste</label><br />
                        <input className='mb-4 border border-collapse w-full p-2 rounded' type="text" name='taste' placeholder='taste' />
                    </div>
                </div>
                {/* form category and details row */}
                <div className='md:flex gap-4'>
                    <div className='form-control w-1/2'>
                        <label className='label-text'>Category</label><br />
                        <input className='mb-4 border border-collapse w-full p-2 rounded' type="text" name='category' placeholder='category name' />
                    </div>
                    <div className='form-control w-1/2'>
                        <label className='label-text'>Details</label><br />
                        <input className='mb-4 border border-collapse w-full p-2 rounded' type="text" name='details' placeholder='details' />
                    </div>
                </div>
                {/* form photo row */}
                <div className=''>
                    <div className='form-control'>
                        <label className='label-text'>Photo url</label><br />
                        <input className='mb-4 border border-collapse w-full p-2 rounded' type="text" name='photo' placeholder='photo url' />
                    </div>
                </div>
                <input className='btn btn-block bg-orange-300' type="submit" value="Add coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;