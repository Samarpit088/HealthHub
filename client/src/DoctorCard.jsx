import { useNavigate } from "react-router-dom";

export default function DoctorCard({ doctor }) {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate("/book", { state: { doctor } }); // Pass doctor details
    };
    
    return (
        <div className="bg-[#DDEBF5] rounded-3xl min-w-[25rem] h-[12rem] animate-slide-in-left p-4">
            <div className="flex justify-between items-center">
                {/* Profile Image */}
                <div className="bg-white rounded-full w-16 h-16 overflow-hidden flex items-center justify-center">
                    <img src={`http://localhost:4000/DocsPhotos/${doctor.photo}`} alt={doctor.name} className="w-full h-full object-cover" />
                </div>

                {/* Doctor Details */}
                <div className="flex flex-col">
                    <div className="mr-4 font-fredoka text-lg text-[#06182B] font-bold">{doctor.name}</div>
                    <div className="font-fredoka text-[#06182B] font-bold text-sm">(MBBS, MD)</div>
                </div>
            </div>

            {/* Ratings and Fee Section */}
            <div className="flex mt-4 gap-4">
                <div className="flex flex-col">
                    <div className="flex gap-1 items-center">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                        </svg>
                        <div className="font-fredoka text-[#06182B] text-lg">Ratings: {doctor.ratings}</div>
                    </div>

                    <div className="flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                            <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
                            <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
                        </svg>
                        <div className="font-fredoka text-[#06182B] text-lg">Fee: &#8377;{doctor.pay}</div>
                    </div>
                    <div className="flex gap-1 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                        </svg>
                        <div className="font-fredoka text-[#06182B] text-lg">Slot: {doctor.fromTime}{Math.random() < 0.5 ? " AM" : " PM"}</div>
                    </div>
                </div>
                <div className="border-l border-[#06182B]"></div>
                <div className="mt-4 animate-fadeIn duration-1000">
                    {/* <Link to={`/book-appointment/${doctor._id}`}> */}
                    <button onClick={handleNavigate} className=" font-fredoka ml-10 bg-[#C2D6E3] p-3 relative px-6 py-2 font-bold rounded-4xl overflow-hidden border border-[#C2D6E3]
  before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#143146]
  before:transition-all before:duration-700 hover:before:w-full 
  text-[#06182B] transition-colors duration-700 hover:text-white hover:border-[#C2D6E3] cursor-pointer">
                        <div className="relative z-10 opacity-0 animate-fadeIn">Check</div>
                    </button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
}
