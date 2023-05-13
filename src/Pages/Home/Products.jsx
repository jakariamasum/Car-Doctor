import {AiFillStar} from 'react-icons/ai'
import logo1 from '../../assets/images/products/1.png'
import logo2 from '../../assets/images/products/2.png'
import logo3 from '../../assets/images/products/3.png'
import logo4 from '../../assets/images/products/4.png'
import logo5 from '../../assets/images/products/5.png'
import logo6 from '../../assets/images/products/6.png'
const Products = () => {
    return (
        <div className=' my-24'>
            <div className="text-center">
                <p className="text-[#FF3811] font-bold">Popular Products</p>
                <h1 className="my-5 font-bold text-[#151515] text-5xl">Browse Our Product</h1>
                <p className="text-[#737373] mb-14">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-3 gap-3'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={logo6} alt="" className="rounded-xl bg-[#F3F3F3] p-2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex text-yellow-400'>
                            <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                        </div>
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className="text-bold text-[#FF3811]">$20.00</p>
                        
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={logo3} alt="" className="rounded-xl bg-[#F3F3F3] p-2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex text-yellow-400'>
                            <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                        </div>
                        <h2 className="card-title">Car Air Filter</h2>
                        <p className="text-bold text-[#FF3811]">$20.00</p>
                        
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={logo1} alt="" className="rounded-xl bg-[#F3F3F3] p-2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex text-yellow-400'>
                            <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                        </div>
                        <h2 className="card-title">Cools Led Light</h2>
                        <p className="text-bold text-[#FF3811]">$20.00</p>
                        
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={logo2} alt="" className="rounded-xl bg-[#F3F3F3] p-2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex text-yellow-400'>
                            <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                        </div>
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className="text-bold text-[#FF3811]">$20.00</p>
                        
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={logo4} alt="" className="rounded-xl bg-[#F3F3F3] p-2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex text-yellow-400'>
                            <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                        </div>
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className="text-bold text-[#FF3811]">$20.00</p>
                        
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={logo5} alt="" className="rounded-xl bg-[#F3F3F3] p-2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <div className='flex text-yellow-400'>
                            <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                        </div>
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p className="text-bold text-[#FF3811]">$20.00</p>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Products;