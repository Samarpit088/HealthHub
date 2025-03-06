import { useNavigate } from 'react-router-dom';
export default function AboutusPage() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-around opacity-0 animate-fadeIn duration-1000">
            <div className="flex flex-col bg-[#DDEBF5] mt-18 p-4 min-w-6xl h-120 rounded-4xl text-center">
                <div className="p-4 font-fredoka text-4xl text-[#06182B] leading-relaxed">HealthHub: Your trusted partner for <br />seamless appointments and personalized care.</div>
                {/* <div className="font-fredoka text-xl text-gray-600 leading-tight -mt-[0.7rem]">"Care for You, by Us."</div> */}
                <div className="flex justify-center">
                    <div className="mt-2 bg-white min-w-2xl h-80 rounded-4xl">
                        <div className="pt-5 px-5 flex">
                            <div className="w-2 h-2 border-1 border-black border-solid rounded-full mx-2 "></div>
                            <div className="w-2 h-2 border-1 border-black border-solid rounded-full mx-2"></div>
                            <div className="w-2 h-2 border-1 border-black border-solid rounded-full mx-2"></div>
                        </div>
                        <div className=" mt-1 flex pt-4 text-bold font-fredoka gap-5 justify-center text-[#06182B] text-[1.2rem] font-bold">
                            <span>+800 Happy patients</span>
                            <span>+500 Trusted doctors</span>
                            <span>100% Confidentiality</span>
                        </div>
                        <div className="justify-center mt-12">
                            <div className="text-[#06182B] fonr-fredoka font-bold">From months of wating to days:<br />Book your first appointment today.</div>
                        </div>
                        <div className='flex mt-11 animate-fadeIn duration-1000 justify-center'>
                            <button onClick={() => navigate('/')} className="bg-[#143146]  p-3 relative px-6 py-2 font-bold rounded-3xl overflow-hidden border border-[#C2D6E3]
  before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#C2D6E3]
  before:transition-all before:duration-700 hover:before:w-full 
  text-white transition-colors duration-700 hover:text-[#06182B] hover:border-[#143146] cursor-pointer">
                                <div className="relative z-10 opacity-0 animate-fadeIn">Book Now</div>
                                </button>
                        </div>
                    </div>

                </div>
                <div className="absolute bg-[#C2D6E3] rounded-4xl p-3 mt-66 ml-40 animate-slide-in-left"><span className="font-fredoka text-[#06182B]">Affordable Price</span></div>
                <div className="absolute bg-[#C2D6E3] rounded-4xl p-3 mt-85 ml-22 animate-slide-in-left"><span className="font-fredoka text-[#06182B]">Secured online sessions with doctors</span></div>
                <div className="absolute bg-[#C2D6E3] rounded-4xl p-3 mt-66 ml-196 animate-slide-in-right"><span className="font-fredoka text-[#06182B]">Personal Consultations</span></div>
                <div className="absolute bg-[#C2D6E3] rounded-4xl p-3 mt-85 ml-185 animate-slide-in-right"><span className="font-fredoka text-[#06182B]">Appointments That Fit Your Schedule</span></div>
            </div>
        </div>
    );
}
