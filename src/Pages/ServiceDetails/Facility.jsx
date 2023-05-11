
const Facility = ({service}) => {
    const {name,details}=service;
    return (
        <div className="bg-[#F3F3F3] p-10 rounded-xl border-t-2 border-t-[#FF3811]">
            <h1 className="font-bold text-[#444444] text-2xl">{name}</h1>
            <p className="text-[#737373] mt-2 ">{details}</p>
        </div>
    );
};

export default Facility;