import person1 from '../../assets/images/team/1.jpg'
import person2 from '../../assets/images/team/2.jpg'
import person3 from '../../assets/images/team/3.jpg'
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedinIn } from 'react-icons/fa'
const Team = () => {
    return (
        <div>
            <div className="text-center">
                <p className="text-[#FF3811] font-bold">Team</p>
                <h1 className="my-5 font-bold text-[#151515] text-5xl">Meet Our Team</h1>
                <p className="text-[#737373] mb-14">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={person1} alt="" className="rounded-xl bg-[#F3F3F3] p-2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Mark Adams</h2>
                        <p className="text-bold text-[#FF3811]">Engine Expert</p>
                        <div className='flex gap-2'>
                            <FaFacebook className='text-[#395185]' /><FaInstagram className='text-[#8a4646]' /><FaLinkedinIn className='text-[#0A66C2]' /><FaTwitter className='text-[ #55ACEE]' />
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={person2} alt="" className="rounded-xl bg-[#F3F3F3] p-2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Mark Adams</h2>
                        <p className="text-bold text-[#FF3811]">Engine Expert</p>
                        <div className='flex gap-2'>
                            <FaFacebook className='text-[#395185]' /><FaInstagram className='text-[#8a4646]' /><FaLinkedinIn className='text-[#0A66C2]' /><FaTwitter className='text-[ #55ACEE]' />
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={person3} alt="" className="rounded-xl bg-[#F3F3F3] p-2" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Mark Adams</h2>
                        <p className="text-bold text-[#FF3811]">Engine Expert</p>
                        <div className='flex gap-2'>
                            <FaFacebook className='text-[#395185]' /><FaInstagram className='text-[#8a4646]' /><FaLinkedinIn className='text-[#0A66C2]' /><FaTwitter className='text-[ #55ACEE]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;