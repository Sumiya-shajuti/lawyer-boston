import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Shared/Sidebar/Sidebar';
import './Review.css'

const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);

    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            cost: data.cost,
            description: data.description,
            imageURL: imageURL
        };
        const url = `https://fathomless-stream-45638.herokuapp.com/addReviews`;

        console.log(reviewData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => console.log('server side response', res))
           
                alert ('Review Added Successfully!')
    };


    const handleImageUpload = reviews => {
        console.log(reviews.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '78aa26fbd49b5c4de5b5f68eb80c6dfa');
        imageData.append('image', reviews.target.files[0]);


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
            {/*  Side navigation  */}
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>

            {/*  Page content  */}
            <div className="col-md-9">
                <h5>Add Service</h5>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input name="name" defaultValue="Your Name" ref={register} />
                    <br />
                    <input name="description" defaultValue="Description" ref={register} />
                    <br />
                    {/* <input name="cost" defaultValue="Cost" ref={register} />
                    <br /> */}
                    <input name="exampleRequired" type="file" onChange={handleImageUpload} />

                    <input type="submit" /></form>
            </div>
        </div>
    );
};


export default Review;

