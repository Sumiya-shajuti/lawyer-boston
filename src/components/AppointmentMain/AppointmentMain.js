import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Sidebar from '../Shared/Sidebar/Sidebar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './AppointmentMain.css'

const AppointmentMain = () => {
    const { _id } = useParams();
    const [service, setService] = useState([]);
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [status, setStatus] = useState('Pending');

    useEffect(() => {
        fetch(`https://fathomless-stream-45638.herokuapp.com/appointmentMain/${_id}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
                alert('Appointment Successful!')

            })
    }, [_id])

    const handleOrder = () => {
        // event.preventDefault()
        const newOrder = { ...loggedInUser, ...service, status };
        newOrder.orderTime = new Date().toString()
        setService(newOrder)


        const url = `https://fathomless-stream-45638.herokuapp.com/addAppointment`;
        console.log(newOrder);
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // alert('Appointment Successful!')
            })
    };
    return (

        <div>
            <Sidebar></Sidebar>
            <div class="main">
                <div><h1>Appointment For</h1>
                    <br />
                    <h3>{service.name}</h3></div>
                <h5>Hello, {loggedInUser.name}! </h5>
                <h5> Your Total Charge:{service.cost}$</h5>
                <input name="email" defaultValue="Email" ref={register} />
                <br />
                <h5>Payment</h5>
                <ProcessPayment></ProcessPayment>
                <input type="submit" defaultValue="Confirm Your Appointment" onClick={handleSubmit(handleOrder)} />

            </div>
        </div>
    );
};

export default AppointmentMain;