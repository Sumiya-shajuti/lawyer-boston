// import React, { useContext, useEffect, useState } from 'react';
// import { Link, useParams } from 'react-router-dom';
// import { UserContext } from '../../App';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardDatePicker,
// } from '@material-ui/pickers';
// import Ordered from '../Ordered/Ordered';
// import ClientBookingList from '../ClientBookingList/ClientBookingList';

// const Order = () => {

//     const { _id } = useParams();
//     const [service, setService] = useState([]);
//     const items = service.find(pd => pd._id == _id)
//     console.log(items)
//     const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//     const [selectedDate, setSelectedDate] = useState({
//         checkIn: new Date(),
//         checkOut: new Date()
//     });
//     useEffect(() => {
//         fetch('http://localhost:5000/services')
//             .then(res => res.json())
//             .then(data =>
//                 setService(data));

//     }, [_id])


//     const handleCheckOutDate = (date) => {
//         const newDates = { ...selectedDate }
//         newDates.checkOut = date;
//         setSelectedDate(newDates);
//     };

//     const handleOrder = () => {
//         const newOrder = { ...loggedInUser, ...service };
//         newOrder.orderTime = new Date().toString()
//         setService(newOrder)

//         console.log(newOrder);
//         fetch('http://localhost:5000/addAppointment', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(newOrder)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 alert ('Appointment Added Successfully!')
//             })
//     }

//     return (
//         <div style={{ textAlign: 'center' }}>
//             <h1>Hello, {loggedInUser.name}! </h1>

//             <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                 <Grid container justify="space-around">
//                     <KeyboardDatePicker
//                         margin="normal"
//                         id="date-picker-dialog"
//                         label="Order Date"
//                         format="dd/MM/yyyy"
//                         value={selectedDate.checkOut}
//                         onChange={handleCheckOutDate}
//                         KeyboardButtonProps={{
//                             'aria-label': 'change date',
//                         }}
//                     />
//                 </Grid>
//                 <h3> Product:{items?.name}</h3>
//                 <Button onClick={handleOrder} variant="contained" color="primary">Your Ordered Product</Button>
//             </MuiPickersUtilsProvider>
//             <ClientBookingList></ClientBookingList>
//         </div>
//     );
// };

// export default Order;