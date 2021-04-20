import { Table } from '@material-ui/core';
import React from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';

const ManageService = ({ service }) => {
      console.log(service);
      const deleteService = id => {
            fetch(`https://fathomless-stream-45638.herokuapp.com/deleteService/${id}`, {
                  method: 'DELETE',

            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        alert('delete successful')
                  })
      }
      return (
        <div> 
                 {/* <Sidebar></Sidebar> */}
            <div className="row">
                  <div className="col-md-5">
                        <h4> {service?.name}</h4>
                  </div>
                  <div className="col-md-3">
                        <h3>{service?.cost}</h3>
                  </div>
                  <div className="col-md-4" >
                        <button onClick={() => deleteService(service?._id)}>Delete</button>
                  </div>
            </div>
            </div>
      );
};

export default ManageService;