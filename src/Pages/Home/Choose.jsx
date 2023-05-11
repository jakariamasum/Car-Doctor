import delivery from '../../assets/icons/deliveryt.svg'
import check from '../../assets/icons/check.svg'
import person from '../../assets/icons/person.svg'
import Wrench from '../../assets/icons/Wrench.svg'
import group from '../../assets/icons/group.svg'
const Choose = () => {
    return (
        <div className='mb-32'>
            <div className="text-center">
                <p className="text-[#FF3811] font-bold">Core Features</p>
                <h1 className="my-5 font-bold text-[#151515] text-5xl">Why Choose Us</h1>
                <p className="text-[#737373] mb-14">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-5 gap-3'>
                <div className='w-[200px] py-[30px]'>
                    <img src={delivery} className="mx-auto" />
                    <p className='text-center font-bold mt-4'>Timely Delivery</p>
                </div>
                <div className='w-[200px] py-[30px] bg-[#FF3811] text-center'>
                    <img src={person} className="mx-auto" />
                    <p className='text-center mt-4 text-white font-bold'>24/7 support</p>
                </div>
                <div className='w-[200px] py-[30px]'>
                    <img src={check} className="mx-auto" />
                    <p className='text-center mt-4 font-bold'>100% gauranty</p>
                </div>
                <div className='w-[200px] py-[30px]'>
                    <img src={Wrench} className="mx-auto" />
                    <p className='text-center mt-4 font-bold'>Best Equipment</p>
                </div>
                <div className='w-[200px] py-[30px]'>
                    <img src={group} className="mx-auto" />
                    <p className='text-center mt-4 font-bold'>Expert Team</p>
                </div>
            </div>
        </div>
    );
};

export default Choose;