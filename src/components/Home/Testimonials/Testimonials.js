import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css';


const Testimonials = () => {
    const [testimonialData, setTestimonialData] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-stream-45638.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setTestimonialData(data["from database"]))
    }, [])
    return (
        <section className="testimonial-container mt-5">
            <div className="text-center">
                <h1 className="text-danger"> Clients Reviews</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;