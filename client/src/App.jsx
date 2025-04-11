import './App.css'
import { Route, Routes } from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'
import { UserContextProvider } from './UserContext'
import AppointmentsPage from './pages/AppointmentsPage'
import ProfilePage from './pages/ProfilePage'
import AboutusPage from './pages/AboutusPage'
import ContactPage from './pages/ContactPage'
import AboutDoctors from './pages/AboutDoctors'
import Book from './pages/Book'
import HealthSuggest from "./pages/HealthSuggest";
axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={'/login'} element={<LoginPage />} />
          <Route path={'/register'} element={<RegisterPage />} />
          <Route path={'/account'} element={<ProfilePage />} />
          <Route path={'/account/myappointment'} element={<AppointmentsPage/>}/>
          <Route path={'/about'} element={<AboutusPage/>}/>
          <Route path={'/contact'} element={<ContactPage/>}/>
          <Route path={'/doctors/:specialization'} element={<AboutDoctors />} />
          <Route path={'/book'} element={<Book/>} />
          <Route path="/health" element={<HealthSuggest />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}
export default App
