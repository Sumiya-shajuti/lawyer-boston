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

            <div className="col-md-9">
                  <h4> {service?.name}</h4>
                  <h3>{service?.cost}</h3>
                  <button onClick={() => deleteService(service?._id)}>Delete</button>
            </div>

      );
};

export default ManageService;