// import React, { useContext, useEffect, useState } from 'react';
// import { useHistory, useParams } from 'react-router-dom';
// import { UserContext } from '../../App';


// const AppointmentFinal = () => {
//       const { _id } = useParams();
//     console.log(_id);
//     const [loading, setLoading] = useState(true)
//     const [service, setservice] = useState({});
//     console.log(service);
//     const [loggedInUser, setLoggedInUser] = useContext
//         (UserContext);
//     useEffect(() => {
//           fetch(`https://fathomless-stream-45638.herokuapp.com//addAppointment/${_id}`)
//             .then(res => res.json())
//             .then(data => {
//               setservice(data,"data");
//                 setLoading(false); 
//             })
          
//     }, [_id])

  
//     const check = (event) => {
//         event.preventDefault()
        
//         const newOrder = { ...loggedInUser, ...service };
//         newOrder.orderTime = new Date().toString()
//         setservice(newOrder)

//         console.log(newOrder);
//         fetch('https://fathomless-stream-45638.herokuapp.com//appointment', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(newOrder)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 alert ('Order Placed Successfully!')
//             })
//     }
//     return (
//         <div>
//                      <h1> Appointment</h1>
//             <div>
//                 <table style={{ width: '80%' }} >

//                     <tr>
//                         <th>Name</th>
//                         <th>Quantity</th>
//                         <th>Price</th>
//                         <th>Total</th>
//                     </tr>
                  
//                     <tr>
//                         <th>{service.name}</th>
//                         <th>01</th>
//                         <th>{service.price}</th>
//                         <th>{service.price}</th>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td></td>
//                         <td></td>

//                     </tr>

//                 </table >
//             </div>
//             {
//                 loading ? <p> ...loading
//                   </p> :
//                     <div style={{ width: '80%', margin: '170px', marginLeft: '600px' }} >

//                         <button className="main-button float-left submit-button"
//                             onClick={check}
//                         >Appointment</button>
//                     </div>
//             }

//         </div>
//     );
// };
// export default  AppointmentFinal;




// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// import './AppointmentFinal.css'
// const AppointmentFinal= (props) => {
//     const { imageURL, name, price, _id } = props.product;

//     return (
//         <div className="product">

//             <img style={{ height: '300px' }} src={imageURL} alt="" />
//             <h4 className="service-name">{name}</h4>
//             <div className="button">
//                 <h3>{price}</h3>
//                 <Link to={`/appointmentMain/${_id}`}>
//                     <button>Book</button>


//                 </Link>
//             </div>
//         </div>

//     );
// };
// export default  AppointmentFinal;