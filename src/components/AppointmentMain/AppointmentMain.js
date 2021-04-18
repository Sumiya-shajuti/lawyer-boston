import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './AppointmentMain.css'

const AppointmentMain= () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageURL: imageURL
        };
        const url = `http://localhost:5000/addAppointment/:_id`;

        console.log(reviewData);
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => console.log('server side response', res))
    };


    const handleImageUpload = review => {
        console.log(review.target.files[0])
        const imageData = new FormData();
      
         }
    return (

        <div>
            <Sidebar></Sidebar>
                      <div class="main">
                <h5>Book</h5>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input name="name" defaultValue="Name" ref={register} />
                    <br />
                    <input name="email" defaultValue="Email" ref={register} />
                    <br />
                    <input name="name" defaultValue="service" ref={register} />
                    <br />
                    <input name="cost" defaultValue="Cost" ref={register} />
                    <br />
                    <input type="submit" /></form>
                     <h1>Pay</h1>
                <ProcessPayment></ProcessPayment>
            </div>
                    </div>
    );
};


export default AppointmentMain;