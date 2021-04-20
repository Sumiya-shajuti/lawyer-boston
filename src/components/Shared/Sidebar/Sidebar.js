import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setIsAdmin] = useState(false);
    console.log(admin);
    useEffect(() => {
        fetch("https://fathomless-stream-45638.herokuapp.com/isAdmin", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email: loggedInUser.email }),
        })
          .then((res) => res.json())
          .then((data) => setIsAdmin(data));
         
      }, []);

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
            <li>
                   
                   <FontAwesomeIcon icon={faGripHorizontal} /> <span>Lawyer In Boston</span> 
            
           </li>
            <li>  <Link to="/home" className="text-white">
                       <FontAwesomeIcon icon={faCalendar} /> <span>Home</span>
                   </Link>
               </li>
                {
                   admin?
                  
                       <div>
                           <li>  <Link to="/adminOrderList" className="text-white">
                       <FontAwesomeIcon icon={faCalendar} /> <span>Order List</span>
                   </Link>
               </li>
               <li>
                   <Link to="/admin" className="text-white">
                       <FontAwesomeIcon icon={faUsers} /> <span>Add Service</span>
                   </Link>
               </li>
               <li>
                   <Link to="/makeAdmin" className="text-white">
                       <FontAwesomeIcon icon={faFileAlt} /> <span>Make admin</span>
                   </Link>
               </li>
               <li>
                   <Link to="/manageService" className="text-white">
                       <FontAwesomeIcon icon={faFileAlt} /> <span>Manage services</span>
                   </Link>
               </li>
                       </div>
                 :
           <div>
              
           <li>
               <Link  className="text-white">
                   <FontAwesomeIcon icon={faCalendar} /> <span>Book</span> 
               </Link>
           </li>
           <li>
               <Link to="/clientBookingList" className="text-white">
                   <FontAwesomeIcon icon={faUsers} /> <span>Booking List</span>
               </Link>
           </li>
           <li>
               <Link to="/review" className="text-white">
                   <FontAwesomeIcon icon={faFileAlt} /> <span>Review</span>
               </Link>
           </li>
           </div>
                }
             
                  
                           </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;