import {RiArrowRightLine} from 'react-icons/ri'
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="round-xl"><img src={img} alt={title} className="h-[300px] p-4 rounded-xl"/></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <p className="text-[#FF3811] font-bold">Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <Link><div><RiArrowRightLine className='text-[#FF3811]'/> </div></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;