// import axios from 'axios';
// import React, { useContext, useState } from 'react';
// import { useForm, useFormContext } from "react-hook-form";
// import { useParams } from 'react-router';
// import Sidebar from '../Shared/Sidebar/Sidebar';
// import ProcessPayment from '../ProcessPayment/ProcessPayment';
// import './AppointmentMain.css'


// const AppointmentMain = () => {
//     const { register, handleSubmit, watch, errors } = useForm();
//     const [imageURL, setIMageURL] = useState(null);
//     const [loggedInUser, setLoggedInUser] = useContext(useFormContext);
//     // const {_id } = useParams();
//     const [service, setService] = useState([]);
//     // const items = service.find(pd => pd._id == _id)
//     // console.log(items)

//     const onSubmit = data => {
//         const reviewData = {
//             name: data.name,
//             cost: data.cost,
//             service: data.service,
//             email: data.email,
//             imageURL: imageURL
//         };




//         const url = `http://localhost:5000/addAppointment`;

//         console.log(reviewData);
//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(reviewData)
//         })
//             .then(res => console.log('server side response', res))

//                 alert ('Appointment Successful!')
//     };


//     const handleImageUpload = review => {
//         console.log(review.target.files[0])
//         const imageData = new FormData();

//     }
//     return (

//         <div>
//             <Sidebar></Sidebar>
//             <div class="main">
//                                     <h3> Appointment{service.name}</h3>
//                     <form onSubmit={handleSubmit(onSubmit)}>

//                         <input name="name" defaultValue="name" ref={register} />
//                         <br />
//                         <input name="email" defaultValue="email" ref={register} />
//                         <br />
//                         <input name="name" defaultValue="service" ref={register} />
//                         <br />
//                         <input name="cost" defaultValue="cost" ref={register} />
//                         <br />
//                         <h5>Payment</h5>
//                         <ProcessPayment></ProcessPayment>
//                         <br />
//                         <input type="submit" defaultValue="Confirm Your Appointment" onChange={handleSubmit(onSubmit)} /></form>
//                 </div>
//             </div>

//     );
// };


// export default AppointmentMain;





import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Sidebar from '../Shared/Sidebar/Sidebar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import './AppointmentMain.css'
import AdminOrderList from '../AdminOrderList/AdminOrderList';



const AppointmentMain = () => {
    const { _id } = useParams();
    const [service, setService] = useState([]);
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  

    useEffect(() => {
        fetch(`https://fathomless-stream-45638.herokuapp.com/${_id}`)
            .then(res => res.json())
            .then(data => {
                setService(data);
                // alert ('Appointment Successful!')

            })
    }, [_id])

    const handleOrder = () => {
        // event.preventDefault()
        const newOrder = {...service, ...loggedInUser };
        newOrder.orderTime = new Date().toString()
        setService(newOrder)


        const url = `http://localhost:5000/addAppointment`;
        console.log(newOrder);
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Appointment Successful!')
            })
    };
    return (

        <div>
            <Sidebar></Sidebar>
            <div class="main">
                <div><h1>Appointment For</h1>
                    <br />
                    <h3>{service?.name}</h3></div>
                <h5>Hello, {loggedInUser.name}! </h5>
                <h5> Your Total Charge:{service?.cost}$</h5>
                {/* <form onSubmit={handleSubmit( handleOrder)}> */}

                    {/* <input name="name" defaultValue="name" ref={register} />
                    <br />
                    <br/> */}
                    {/* <input name="email" defaultValue="Email" ref={register} />
                   
                <br />
                    <input type="submit" defaultValue="Confirm Your Appointment" onClick={handleSubmit( handleOrder)} />
                </form> */}
                 <input name="email" defaultValue="Email" ref={register} /> 
                <br />
                    <h5>Payment</h5>
                <ProcessPayment></ProcessPayment>
                <input type="submit" defaultValue="Confirm Your Appointment" onClick={handleSubmit( handleOrder)} />
  
            </div>
        </div>

    );
};


export default AppointmentMain;