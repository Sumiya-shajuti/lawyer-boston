import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const ClientBookingList = () => {
    const [ordered, setOrdered] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
      useEffect(() => {
        fetch('https://fathomless-stream-45638.herokuapp.com/ordered?email=' + loggedInUser.email, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            }
        })
            .then(res => res.json())
            .then(data => setOrdered(data));
    }, [])

    return (
        <div>
            <h3>You have: {ordered.length}Appointment</h3>
            {
                ordered.map(service => <li _id={service._id}>{service.name} {service.orderTime} </li>)
            }
        </div>
    );
};

export default ClientBookingList;