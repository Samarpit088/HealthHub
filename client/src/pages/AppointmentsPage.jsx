import AccountNav from "./AccountNav";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

export default function AppointmentsPage() {
    const { user, ready } = useContext(UserContext);
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookings = async () => {
            if (!user) return;

            setLoading(true);

            try {
                console.log("User ID:", user._id);
                const response = await axios.get(`/bookings?userId=${user._id}`);
                console.log("Bookings:", response.data);
                setBookings(response.data);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBookings();
    }, [user]);

    if (!ready || loading) {
        return
    }

    return (
        <div>
            <AccountNav />
            {bookings.length === 0 ? (
                <div className="flex flex-col animate-fadeIn items-center justify-center mt-20">
                    <div className="font-fredoka font-bold text-3xl text-[#06182B] mt-10">No appointments</div>
                    <div className=" inline-flex gap-1  mt-2 bg-[#143146]  p-3 relative px-6 py-2 font-bold rounded-3xl overflow-hidden border border-[#C2D6E3]
  before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#C2D6E3]
  before:transition-all before:duration-700 hover:before:w-full 
  text-white transition-colors duration-700 hover:text-[#06182B] hover:border-[#143146] cursor-pointer">
                        <Link to={'/'} className="relative z-10 opacity-0 animate-fadeIn">Home</Link>
                    </div>
                </div>

            ) : (
                <div className="flex flex-col gap-4 animate-fadeIn items-center text-md bg-[#F8F8F7] mx-45 rounded-4xl mt-20 p-15">
                    {bookings.map((booking) => (
                        <div className="">
                            <div key={booking._id} className="bg-[white] rounded-4xl mx-50 w-[800px] h-[120px] pt-2 px-4 flex items-center justify-between">
                                <div>
                                    <div className="bg-white rounded-full w-16 h-16 overflow-hidden flex items-center justify-center">
                                        <img src={`http://localhost:4000/DocsPhotos/${booking.doctor?.photo}`} alt={booking.doctor.name} className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-xl font-semibold text-[#06182B] ml-10">
                                        {booking.doctor?.name || "N/A"}
                                    </h2>
                                    <p className="font-semibold text-[#06182B] text-sm ml-10">(MBBS-MD)</p>
                                </div>
                                <div className="ml-20 mb-5">
                                    <p className="font-semibold text-[#06182B] text-xl">{booking.doctor?.specializeIn}</p>
                                </div>
                                <div className="flex flex-col ml-30">
                                    <p className="font-fredoka text-[#06182B]"><strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}</p>
                                    <p className="font-fredoka text-[#06182B]"><strong>At:</strong> {booking.doctor?.fromTime}am</p>
                                </div>
                                {/* <div className="flex flex-col ml-8">
                                        <p><strong>Specialization:</strong> {booking.doctor?.specializeIn || "N/A"}</p>
                                        <p><strong>Experience:</strong> {booking.doctor?.exp ? `${booking.doctor.exp} years` : "N/A"}</p>
                                        <p><strong>Consultation Fee:</strong> ₹{booking.doctor?.pay || "N/A"}</p>
                                    </div> */}
                                {/* <hr className="my-2" />

                                    <p><strong>Patient:</strong> {booking.patient?.name}</p>
                                    <div className="flex flex-col ml-8">
                                        <p><strong>Date:</strong> {booking.date ? new Date(booking.date).toLocaleDateString() : "N/A"}</p>
                                        <p><strong>Time Slot:</strong> {booking.timeSlot}</p>
                                        <p><strong>Status:</strong> {booking.status || "Pending"}</p>
                                    </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
