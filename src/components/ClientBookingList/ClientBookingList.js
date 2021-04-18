import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const ClientBookingList = () => {
    const [ordered, setOrdered] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser.email);
    useEffect(() => {
        fetch('http://localhost:5000/ordered?email=' + loggedInUser.email, {
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
            <h3>You have: {ordered.length} ordered products</h3>
            {
                ordered.map(order => <li _id={order._id}>{order.name} {order.orderTime} </li>)
            }
        </div>
    );
};

export default ClientBookingList;