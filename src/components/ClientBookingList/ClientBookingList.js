import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Navbar from '../Shared/Navbar/Navbar';
import Sidebar from '../Shared/Sidebar/Sidebar';

const ClientBookingList = () => {
    const [ordered, setOrdered] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch('https://fathomless-stream-45638.herokuapp.com/ordered?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrdered(data));
    }, [])

    return (

        <div className="row container-fluid" >
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <Navbar></Navbar>
                <h3>You have total {ordered.length}Appointment</h3>
                <div style={{ width: '100%' }} className="row mt-5 table-content">
                    <table className="table table-borderless">
                        <thead className="table-head">
                            <tr>
                                <th className="text-secondary" scope="col">Name</th>
                                <th className="text-secondary" scope="col">Email ID</th>
                                <th className="text-secondary w-25" scope="col">Date and Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ordered.map((service) =>

                                    <tr>
                                        <td>{service.name}</td>
                                        <td>{service.email}</td>
                                        <td>{service.orderTime}</td>

                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >


    );
};

export default ClientBookingList;