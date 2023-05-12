import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Checkout = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    console.log(service)
    const handleOrder = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img=service.img
        const title=service.title;
        const phone = form.phone.value;
        const email=user.email; 
        const price=service.price;
        const date = form.date.value;
        console.log(name, user?.email, user?.price, phone)

        const order={
            email,
            title,
            price,
            img,
            date
            
        }

        fetch('http://localhost:5000/orders',{
            method: 'POST', 
            headers:{
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(order)
        })
        .then(res=>{
            Swal.fire({
                position: 'text-center',
                icon: 'success',
                title: 'Order Successful',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch(error=>console.log(error.message))

    }
    return (
        <div>
            <form onSubmit={handleOrder} className=" p-24 bg-[#F3F3F3] my-24">
                <div className="grid grid-cols-2 gap-7">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="number" name="phone" placeholder="Phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" defaultValue={user?.email} readOnly placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" defaultValue={`${'$ '+service.price}`} readOnly placeholder="Price" className="input input-bordered" required />
                    </div>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea name="message" placeholder="Your message" cols="140" rows="10" className="mt-4 input input-bordered"></textarea>
                </div>
                <div className="form-control mt-6">
                    <input type="submit" value="Confirm Order" className="btn btn-primary bg-[#FF3811] border-none" />
                </div>
            </form>
        </div>
    );
};

export default Checkout;