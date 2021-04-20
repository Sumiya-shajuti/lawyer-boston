import React from 'react';
import { Link} from 'react-router-dom';

const ServiceDetail = ({ service }) => {
       return (
        <div className="col-md-4 text-center">
            <img style={{ height: '70px' }} src={service.imageURL} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">   <ul class="list">
  <li><a href="#0">① <span>{service.description}</span></a></li></ul> </p>
            <button className="btn btn-danger"> <Link to={`/appointmentMain/${service._id}`}>Book</Link></button>
        </div>
    );
};

export default ServiceDetail;