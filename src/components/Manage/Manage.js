import React, { useEffect, useState } from 'react';
import ManageService from '../ManageService/ManageService';


const Manage = () => {

    const [services, setServices] = useState([]);
console.log(services);
    useEffect(() => {
        fetch('https://fathomless-stream-45638.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
        
    }, [])

    return (
        <div className="row-3">
            
            <h1>This is manage</h1>
            {
                services.map(service =>< ManageService key={service} service={service}></ManageService>)
            }
        </div>
    );
};

export default Manage;