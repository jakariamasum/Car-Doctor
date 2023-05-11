import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { FaPhoneVolume,FaRegCalendar,FaAddressBook } from "react-icons/fa";


const Service = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="text-center">
                <p className="text-[#FF3811] font-bold">Service</p>
                <h1 className="my-5 font-bold text-[#151515] text-5xl">Our Service Area</h1>
                <p className="text-[#737373] mb-14">The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

            <div className="grid grid-cols-3 px-9 py-20 bg-[#151515] text-white my-32">
                <div className="flex items-center">
                    <div>
                        <FaRegCalendar />
                    </div>
                    <div className="ml-4">
                        <p>We are open Monday- Saturday</p>
                        <p className="font-bold">7:00 am - 9:00 pm</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div>
                        <FaPhoneVolume />
                    </div>
                    <div className="ml-4">
                        <p>Have a question?</p>
                        <p className="font-bold">+2546 251 2658</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <div>
                        <FaAddressBook />
                    </div>
                    <div className="ml-4">
                        <p>Need a repair?Our address</p>
                        <p className="font-bold">Liza Street, New York</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;