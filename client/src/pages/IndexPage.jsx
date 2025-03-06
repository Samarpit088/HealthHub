import MainDoctors from "../MainDoctors";
import { useNavigate } from 'react-router-dom'

export default function IndexPage() {
    const navigate = useNavigate();
    function handleCheck(specialization){
        navigate(`/doctors/${specialization}`);
    }
    return (
        <div className="flex flex-col justify-center">
            <div className="mt-10 flex flex-col items-center animate-slideUp">
                <div className="font-fredoka font-bold text-5xl tracking-wide text-[#06182B]">Our doctors specialize</div>
                <div className="mt-4 font-fredoka font-bold text-4xl tracking-wide text-[#06182B]">in the following fields:</div>
            </div>
            <MainDoctors/>
            <div className="flex gap-45 ml-40 mt-6 animate-fadeIn duration-1000">
                <button onClick={() => handleCheck("Cardiologist")} className="bg-[#143146]  p-3 relative px-6 py-2 font-bold rounded-3xl overflow-hidden border border-[#c4d3de]
  before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[white]
  before:transition-all before:duration-700 hover:before:w-full 
  text-white transition-colors duration-700 hover:text-[#06182B] hover:border-[#143146] cursor-pointer">
                    <div className="relative z-10 opacity-0 animate-fadeIn">Check</div>
                </button>
                <button onClick={() => handleCheck("Dermatologist")} className="bg-[#143146]  p-3 relative px-6 py-2 font-bold rounded-3xl overflow-hidden border border-[#c4d3de]
  before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[white]
  before:transition-all before:duration-700 hover:before:w-full 
  text-white transition-colors duration-700 hover:text-[#06182B] hover:border-[#143146] cursor-pointer">
                    <div className="relative z-10 opacity-0 animate-fadeIn">Check</div>
                </button>
                <button onClick={() => handleCheck("Pediatrician")} className="bg-[#143146]  p-3 relative px-6 py-2 font-bold rounded-3xl overflow-hidden border border-[#c4d3de]
  before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[white]
  before:transition-all before:duration-700 hover:before:w-full 
  text-white transition-colors duration-700 hover:text-[#06182B] hover:border-[#143146] cursor-pointer">
                    <div className="relative z-10 opacity-0 animate-fadeIn">Check</div>
                </button>
                <button onClick={() => handleCheck("ENT Specialist")} className="bg-[#143146]  p-3 relative px-6 py-2 font-bold rounded-3xl overflow-hidden border border-[#c4d3de]
  before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[white]
  before:transition-all before:duration-700 hover:before:w-full 
  text-white transition-colors duration-700 hover:text-[#06182B] hover:border-[#143146] cursor-pointer">
                    <div className="relative z-10 opacity-0 animate-fadeIn">Check</div>
                </button>
                <button onClick={() => handleCheck("Gynecologist")} className="bg-[#143146]  p-3 relative px-6 py-2 font-bold rounded-3xl overflow-hidden border border-[#c4d3de]
  before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[white]
  before:transition-all before:duration-700 hover:before:w-full 
  text-white transition-colors duration-700 hover:text-[#06182B] hover:border-[#143146] cursor-pointer">
                    <div className="relative z-10 opacity-0 animate-fadeIn">Check</div>
                </button>
            </div>
        </div>
    );
}