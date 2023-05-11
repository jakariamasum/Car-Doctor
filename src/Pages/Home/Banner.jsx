import banner1 from '../../assets/images/banner/1.jpg'
import banner2 from '../../assets/images/banner/2.jpg'
import banner3 from '../../assets/images/banner/3.jpg'
import banner4 from '../../assets/images/banner/4.jpg'
import banner5 from '../../assets/images/banner/5.jpg'
import banner6 from '../../assets/images/banner/6.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] mb-32">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} className="w-full" />
                <div className='absolute pl-24  from-[#151515] to-[rgba(21, 21, 21, 0)] bg-gradient-to-r h-full'>
                    <h1 className='mt-36 font-bold text-6xl w-[450px] text-white'>Affordable Price For Car Servicing</h1>
                    <p className='text-white w-[500px] my-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn btn-secondary mr-4 bg-[#FF3811] text-white border-none">Discover More</button>
                        <button className="btn btn-outline text-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className='absolute pl-24  from-[#151515] to-[rgba(21, 21, 21, 0)] bg-gradient-to-r h-full'>
                    <h1 className='mt-36 font-bold text-6xl w-[450px] text-white'>Affordable Price For Car Servicing</h1>
                    <p className='text-white w-[500px] my-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn btn-secondary mr-4 bg-[#FF3811] text-white border-none">Discover More</button>
                        <button className="btn btn-outline text-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className='absolute pl-24  from-[#151515] to-[rgba(21, 21, 21, 0)] bg-gradient-to-r h-full'>
                    <h1 className='mt-36 font-bold text-6xl w-[450px] text-white'>Affordable Price For Car Servicing</h1>
                    <p className='text-white w-[500px] my-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn btn-secondary mr-4 bg-[#FF3811] text-white border-none">Discover More</button>
                        <button className="btn btn-outline text-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-2">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full" />
                <div className='absolute pl-24  from-[#151515] to-[rgba(21, 21, 21, 0)] bg-gradient-to-r h-full'>
                    <h1 className='mt-36 font-bold text-6xl w-[450px] text-white'>Affordable Price For Car Servicing</h1>
                    <p className='text-white w-[500px] my-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn btn-secondary mr-4 bg-[#FF3811] text-white border-none">Discover More</button>
                        <button className="btn btn-outline text-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={banner5} className="w-full" />
                <div className='absolute pl-24  from-[#151515] to-[rgba(21, 21, 21, 0)] bg-gradient-to-r h-full'>
                    <h1 className='mt-36 font-bold text-6xl w-[450px] text-white'>Affordable Price For Car Servicing</h1>
                    <p className='text-white w-[500px] my-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn btn-secondary mr-4 bg-[#FF3811] text-white border-none">Discover More</button>
                        <button className="btn btn-outline text-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide6" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={banner6} className="w-full" />
                <div className='absolute pl-24  from-[#151515] to-[rgba(21, 21, 21, 0)] bg-gradient-to-r h-full'>
                    <h1 className='mt-36 font-bold text-6xl w-[450px] text-white'>Affordable Price For Car Servicing</h1>
                    <p className='text-white w-[500px] my-7'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div>
                        <button className="btn btn-secondary mr-4 bg-[#FF3811] text-white border-none">Discover More</button>
                        <button className="btn btn-outline text-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811]">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;