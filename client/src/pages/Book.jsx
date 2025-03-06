import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";


export default function Book() {
    const [healthConcern, setHealthConcern] = useState("");
    const location = useLocation();
    const navigate = useNavigate(); 
    const { user } = useContext(UserContext); // Get logged-in user details
    const {doctor} = location.state ||{};
    

    useEffect(() => {
        if (!doctor || !user) {
            alert("Please log in first!");
            navigate("/"); // Navigate after render
        }
    }, [ user, navigate]);

    // if (!doctor || !user) {
    //     return null; // Prevent rendering component content
    // }

    const handleBooking = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/bookings", {
                doctor: doctor._id,
                patient: user._id,
                date: new Date().toISOString().split("T")[0],
                timeSlot: `${doctor.fromTime} - ${doctor.toTime}`,
                healthConcern: healthConcern,
            });

            alert("Appointment booked successfully!");
            navigate("/");
        } catch (error) {
            console.error("Error booking appointment:", error);
            alert(error.response?.data?.message || "Booking failed!");
        }
    };

    return (
        doctor && user ? ( 
        <div className="flex items-center justify-around opacity-0 animate-fadeIn duration-1000">
            <div className="bg-[#E6F1F4] min-w-4xl p-4 h-100 rounded-4xl mt-18 flex" >
                <div className="flex flex-col w-1/3">
                    <div className="flex items-center justify-center mt-2">
                        <div className="font-fredoka font-bold text-[#06182B] text-2xl">{doctor.specializeIn}</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="bg-white w-[220px] h-[220px] rounded-4xl mt-1 border-white border-2">
                            <img src={`http://localhost:4000/DocsPhotos/${doctor.photo}`} alt={doctor.name} className="w-full h-full object-cover rounded-4xl" />
                        </div>
                        <div className="flex  flex-col items-center justify-center  mt-2">
                            <div className="font-fredoka font-bold text-[#06182B] text-xl">{doctor.name}</div>
                            <div className="font-fredoka text-[#06182B] text-md">(MBBS - MD)</div>
                            <div className="font-fredoka text-[#06182B] text-md">Exp: {doctor.exp} years</div>
                            <div className="font-fredoka text-[#06182B] text-md">Time: {doctor.fromTime}am</div>
                        </div>
                    </div>
                </div>
                <div className="mt-20 ml-26">
                    <form onSubmit={handleBooking}>
                        <input type="text" placeholder="Name" value={user.name} readOnly></input>
                        <textarea className="bg-white w-full my-1 py-2 px-3 rounded-2xl" placeholder="About your health" value={healthConcern}
                            onChange={(e) => setHealthConcern(e.target.value)}></textarea>
                        <div className="ml-34 mt-2">
                            <button onClick={() => navigate('/')} className="bg-[#143146]  p-3 relative px-6 py-2 font-bold rounded-3xl overflow-hidden border border-[#C2D6E3]
  before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-white
  before:transition-all before:duration-700 hover:before:w-full 
  text-white transition-colors duration-700 hover:text-[#06182B] hover:border-[#143146] cursor-pointer">
                                <div className="relative z-10 opacity-0 animate-fadeIn">Book Now</div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        ):null
    );
}