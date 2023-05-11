import { Link, useLoaderData } from "react-router-dom";
import Facility from "./facility";
import person from '../../assets/images/banner/2.jpg'
const ServiceDetails = () => {
    const service=useLoaderData();
    const {title,img,facility,price,_id}=service; 
    return (
        <div className="grid grid-cols-2 gap-6">
            <div>
                <img src={img} className="rounded-xl" />
                <h1 className="text-[#151515] text-4xl font-bold my-7">{title}</h1>
                <p className="text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                <div className="grid grid-cols-2 gap-3 mt-7">
                    {
                        facility.map(service=><Facility key={service._id} service={service}></Facility>)
                    }
                </div>
                <p className="my-7 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                <h1 className="text-5xl font-bold">3 Simple Steps to Process</h1>
                <p className="my-7 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                <div className="grid grid-cols-3 gap-1 mb-7">
                    <div className="w-[230px] text-center p-8 border border-[#E8E8E8] rounded-lg">
                        <p className="btn-circle bg-[#FF3811] mx-auto  flex justify-center items-center text-white">01</p>
                        <h1>STEP ONE</h1>
                        <p>It uses a dictionary of over 200 .</p>
                    </div>
                    <div className="w-[230px] text-center p-8 border border-[#E8E8E8] rounded-lg">
                        <p className="btn-circle bg-[#FF3811] mx-auto  flex justify-center items-center text-white">02</p>
                        <h1>STEP TWO</h1>
                        <p>It uses a dictionary of over 200 .</p>
                    </div>
                    <div className="w-[230px] text-center p-8 border border-[#E8E8E8] rounded-lg">
                        <p className="btn-circle bg-[#FF3811] mx-auto  flex justify-center items-center text-white">03</p>
                        <h1>STEP THREE</h1>
                        <p>It uses a dictionary of over 200 .</p>
                    </div>
                </div>
                <div className="my-7">
                    <img src={person} className="rounded-xl" />
                </div>
            </div>
            <div>
                <h1 className="font-bold">Download</h1>
                <p className="font-bold text-[#FF3811] my-7">Price : ${price}</p>
                <Link to={`/checkout/${_id}`}><button className="btn bg-[#FF3811] border-none text-white">Proceed Checkout</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetails;