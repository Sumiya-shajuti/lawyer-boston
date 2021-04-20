import React, { useEffect, useState } from 'react';
import ManageService from '../ManageService/ManageService';
import Sidebar from '../Shared/Sidebar/Sidebar';


const Manage = () => {

    const [services, setServices] = useState([]);
console.log(services);
    useEffect(() => {
        fetch('https://fathomless-stream-45638.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
        
    }, [])

    return (
        <div className="row">
            
            <h1 >This is manage</h1>
           
            <div className="col-md-3 ">
                        <Sidebar></Sidebar>
                  </div>
          <div className="col-md-9">  {
                services.map(service =>< ManageService key={service} service={service}></ManageService>)
            }</div>
        </div>
    );
};

export default Manage;