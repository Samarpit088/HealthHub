# **Online-HealthHub-Appointment-Booking-App (In Development)**

## **Overview**
HealthHub is a full-stack web application that allows users to consult doctors online by booking appointments. The platform provides a seamless experience with a clean and responsive UI, ensuring that patients can easily schedule and manage their appointments.

## **Features**
**Book Appointments:** Users can browse available doctors and book appointments based on their schedules.  
**User Login and Authentication:** Secure authentication system to allow users to manage their bookings and profile.  
**Appointment Management:** Users can check their booked appointments.  
**Responsive UI:** Designed with Tailwind CSS for a clean, fast, and mobile-friendly experience.  
**Real-time Data:** The app utilizes MongoDB for efficient data storage and retrieval.  

## **Tech Stack**
**Frontend:** React, Tailwind CSS  
**Backend:** Node.js, Express  
**Database:** MongoDB  

## **Installation & Setup**

### **1. Clone the Repository**
```bash
git clone https://github.com/Samarpit088/HealthHub.git
cd HealthHub
```

### **2. Install Dependencies**
For npm:
```bash
npm install
```
For yarn:
```bash
yarn install
```

### **3. Set Up Environment Variables**
Create a `.env` file in the root directory and add your MongoDB connection string and other necessary credentials.
```env
MONGO_URI=your_mongodb_connection_string
PORT=4000
JWT_SECRET=your_secret_key
```

### **4. Start the Application**
For npm:
```bash
npm start
```
For yarn:
```bash
yarn start
```


