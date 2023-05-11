
const Checkout = () => {
    return (
        <form className=" p-24 bg-[#F3F3F3] my-24">
            <div className="grid grid-cols-2 gap-7">
                <div className="form-control">
                    <input type="text" placeholder="First Name" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Last Name" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <input type="number" placeholder="Your Phone" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <input type="email" placeholder="Your Email" className="input input-bordered"  required/>
                </div>
            </div>
            <div>
                <textarea name="message" placeholder="Your message" cols="140" rows="10" className="mt-4 input input-bordered"></textarea>
            </div>
            <div className="form-control mt-6">
                <input type="submit" value="Confirm Order" className="btn btn-primary bg-[#FF3811] border-none"/>
            </div>
        </form>
    );
};

export default Checkout;