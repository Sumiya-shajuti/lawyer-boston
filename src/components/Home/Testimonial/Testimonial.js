import React from 'react';
import { Link } from 'react-router-dom';

const Testimonial = ({ testimonial }) => {
    return (
        <div className="col-md-4 text-center card shadow-sm">
            <img style={{height: '100px',width: '100px'}} src={testimonial.imageURL} alt="" />
            <h5 className="mt-3 mb-3">{testimonial.name}</h5>
            <p className="text-secondary">{testimonial.description}</p>
            <button className="btn btn-danger "> <Link to="/review">Add Your review</Link></button>
        </div>
    );
};
export default Testimonial;