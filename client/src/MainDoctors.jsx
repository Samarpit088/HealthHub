export default function MainDoctors() {
    return (
        <div className="flex gap-6 ml-20 mt-14">
            <div className="bg-[#c4d3de] min-w-[16rem] h-[16rem] rounded-4xl animate-slide-in-left">
                <div className="animate-slide-in-left">
                    <div className="font-fredoka text-[#06182B] mt-4 ml-4 mb-0 text-2xl ">Cardiologists</div>
                    <div className="font-fredoka text-sm mt-7 ml-7 w-[12rem] break-words text-wrap">Cardiologists specialize in heart health, diagnosing and treating heart diseases<br /> like hypertension and heart attacks.</div>
                </div>
            </div>
            <div className="bg-[#c4d3de] min-w-[16rem] h-[16rem] rounded-4xl animate-slide-in-left">
                <div className="animate-slide-in-left">
                    <div className="font-fredoka text-[#06182B] mt-4 ml-4 mb-0 text-2xl">Dermatologists</div>
                    <div className="font-fredoka text-sm mt-7 ml-7 w-[12rem] break-words text-wrap">Dermatologists specialize in diagnosing and treating skin, hair, and nail conditions. They help with issues like acne, eczema, and skin infections.</div>
                </div>

            </div>
            <div className="bg-[#c4d3de] min-w-[16rem] h-[16rem] rounded-4xl animate-comeBack duration-1000">
                <div className="animate-comeBack duration-1000">
                    <div className="font-fredoka text-[#06182B] mt-4 ml-4 mb-0 text-2xl">Pediatricians</div>
                    <div className="font-fredoka text-sm mt-7 ml-7 w-[12rem] break-words text-wrap">Pediatricians specialize in children's health, diagnosing and treating illnesses from infancy to adolescence to ensure healthy growth and development.</div>
                </div>

            </div>
            <div className="bg-[#c4d3de] min-w-[16rem] h-[16rem] rounded-4xl animate-slide-in-right">
                <div className="animate-slide-in-right">
                    <div className="font-fredoka text-[#06182B] mt-4 ml-4 mb-0 text-2xl">ENT Specialists</div>
                    <div className="font-fredoka text-sm mt-7 ml-7 w-[12rem] break-words text-wrap">ENT Specialists diagnose and treat conditions related to the ear, nose, and throat, such as infections, allergies, and hearing disorders.</div>
                </div>

            </div>
            <div className="bg-[#c4d3de] min-w-[16rem] h-[16rem] rounded-4xl animate-slide-in-right">
                <div className="animate-slide-in-right">
                    <div className="font-fredoka text-[#06182B] mt-4 ml-4 mb-0 text-2xl">Gynecologists</div>
                    <div className="font-fredoka text-sm mt-7 ml-7 w-[12rem] break-words text-wrap">Gynecologists specialize in women's health, focusing on reproductive care, pregnancy, and hormonal disorders to ensure overall well-being.</div>
                </div>
            </div>
        </div>
    );
}