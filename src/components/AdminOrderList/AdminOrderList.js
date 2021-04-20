import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../App';

const AdminOrderList = () => {
    // const { _id } = useParams();
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // // const [service, setService] = useState([]);
    const [ordered, setOrdered] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/order')
      
            .then(res => res.json())
            .then(data => setOrdered(data));
    }, [])

    return (
        <div className="row">
            <div>
                <h3>Total {ordered.length} Appointment</h3>
                {
                    ordered.map(service => <li _id={service._id}>{service.name} {service.orderTime} </li>)
                }
            </div>

  
        


             {/* <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">
                    <li>
                        <FontAwesomeIcon icon={faGripHorizontal} /> <span>Lawyer In Boston</span>
                    </li>
                    <li>
                        <Link to="/adminOrderList" className="text-white">
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
                </ul>
                <div>
                    <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
                </div>
            </div>  */}

            <div className="col-md-10">
                <table class="table">
                    <thead>
                        <h1 style={{ color: "black", textAlign: "center", marginTop: "5px", marginLeft: "200px" }}>Clients Appointment List</h1>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td> 
                            {/* <h3> Product:{service?.name}</h3> */}

                         </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table></div>

            <div>

            </div>
        </div > 
      
    );
};

export default AdminOrderList;