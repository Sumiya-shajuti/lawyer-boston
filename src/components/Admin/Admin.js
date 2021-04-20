import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Shared/Sidebar/Sidebar';
import './Admin.css'

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = data => {
        const serviceData = {
            name: data.name,
            cost: data.cost,
            description: data.description,
            imageURL: imageURL
        };
        const url = `https://fathomless-stream-45638.herokuapp.com/addServices`;

        console.log(serviceData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceData)
        })
            .then(res => console.log('server side response', res))
    };


    const handleImageUpload = services => {
        console.log(services.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '78aa26fbd49b5c4de5b5f68eb80c6dfa');
        imageData.append('image', services.target.files[0]);


        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setIMageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (

        <div className="row">

            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>

            <div class=" col-md-3 main">
                <h5>Add Service</h5>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input name="name" defaultValue="Add new Service" ref={register} />
                    <br />
                    <input name="description" defaultValue="Description" ref={register} />
                    <br />
                    <input name="cost" defaultValue="Cost" ref={register} />
                    <br />
                    <input name="exampleRequired" type="file" onChange={handleImageUpload} />

                    <input type="submit" /></form>
            </div>
        </div>
    );
};


export default Admin;