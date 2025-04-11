import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';
import DoctorCard from "../DoctorCard";

export default function AboutDoctors() {
    const { specialization } = useParams();
    const [doctors, setDoctors] = useState([]);

    useEffect(function () {
        async function fetchDoctors() {
            try {
                const response = await axios.get(`/look?specialization=${encodeURIComponent(specialization)}`);
                setDoctors(response.data);
            } catch (error) {
                console.error("Error fetching doctors:", error);
            }
        }
        fetchDoctors();
    }, [specialization]);
    const handleDelete = async (bookingId) => {
    try {
        await axios.delete(`/bookings/${bookingId}`);
        setBookings(prev => prev.filter(booking => booking._id !== bookingId));
    } catch (error) {
        console.error("Failed to delete booking:", error);
    }
};
    return (
        <div>
            <div className="flex justify-center mt-8 animate-slideDown">
                <div className="font-fredoka font-bold text-4xl text-[#06182B]">{specialization}</div>
            </div>
            {doctors && doctors.length > 0 &&
                <div className="flex gap-4 mt-16 ml-40">
                    {doctors.slice(0, 3).map((doctor, index) => (
                        <DoctorCard key={index} doctor={doctor} />
                    ))}
                </div>
            }
            <div className="ml-50">
            {doctors && doctors.length > 3 &&
                <div className="flex gap-4 mt-16 ml-40">
                    {doctors.slice(3, 5).map((doctor, index) => (
                        <DoctorCard key={index} doctor={doctor} />
                    ))}
                </div>
            }
            </div>
        </div>
    );
}