import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className='flex gap-24 mb-32 mx-auto'>
            <div>
                <img src={person}  className='w-[470px] relative rounded-xl'/>
                <img src={parts} className="w-[320px] border-[10px] border-white h-[300px] absolute left-80 top-[975px] rounded-xl" />
            </div>
            <div>
                <p className='font-bold text-[#FF3811]'>About us</p>
                <h1 className='w-[365px] font-bold text-4xl mt-5'>We are qualified & of experience in this field</h1>
                <p className='w-[400px] text-[#737373] my-7'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p> 
                <p className='w-[400px] text-[#737373] '>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className="btn btn-secondary mt-7 bg-[#FF3811] text-white border-none">Get More Info</button>
            </div>
        </div>
    );
};

export default About;