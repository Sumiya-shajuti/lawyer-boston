import React from 'react';
import { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import LogIn from './components/LogIn/LogIn';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Admin from './components/Admin/Admin';
import AppointmentMain from './components/AppointmentMain/AppointmentMain';
import AdminOrderList from './components/AdminOrderList/AdminOrderList';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';
import ManageOrder from './components/ManageOrder/ManageOrder';
import ClientBookingList from './components/ClientBookingList/ClientBookingList';
import Review from './components/Review/Review';
import MakeAppointment from './components/Home/MakeAppointment/MakeAppointment';
import Testimonials from './components/Home/Testimonials/Testimonials';
import Navbar from './components/Shared/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Order from './components/Order/Order';
import Sidebar from './components/Dashboard/Sidebar/Sidebar';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h1>{loggedInUser.name}</h1>
      <div>
        <div className="Header">

          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login">
                <LogIn></LogIn>
              </Route>
              <Route path="/navbar">
                <Navbar></Navbar>
              </Route>
              <Route path="/sidebar">
                <Sidebar></Sidebar>
              </Route>
              <Route path="/makeAppointment">
                <MakeAppointment></MakeAppointment>
              </Route>
              <Route path="/testimonials">
                <Testimonials></Testimonials>
              </Route>
              <Route path="/appointment">
                <Appointment></Appointment>
              </Route>
              <Route path="/dashboard">
                <Dashboard></Dashboard>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              
              {/* This is Admin side */}
              <Route path="/adminOrderList">
                <AdminOrderList></AdminOrderList>
              </Route>
              <Route path="/admin">
                <Admin></Admin>
              </Route>
              <Route path="/makeAdmin">
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route path="/ manageOrder">
                < ManageOrder></ManageOrder>
              </Route>

              {/* This is Clients Side */}
              <Route path="/appointmentMain">
                <AppointmentMain></AppointmentMain>
              </Route>
              <Route path="/clientBookingList">
                <ClientBookingList></ClientBookingList>
              </Route>
              <Route path="/review">
                <Review></Review>
              </Route>

              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
