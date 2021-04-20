import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../App';
import { Nav, NavDropdown, Dropdown } from 'react-bootstrap'
import Sidebar from '../Shared/Sidebar/Sidebar';
import Navbar from '../Shared/Navbar/Navbar';

const AdminOrderList = () => {

    const [ordered, setOrdered] = useState([]);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setIsAdmin] = useState(false);
    console.log(admin);
    useEffect(() => {
        fetch("https://fathomless-stream-45638.herokuapp.com/isAdmin", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: loggedInUser.email }),
        })
            .then((res) => res.json())
            .then((data) => setIsAdmin(data));

    }, []);


    useEffect(() => {
        fetch('https://fathomless-stream-45638.herokuapp.com/order')

            .then(res => res.json())
            .then(data => setOrdered(data));
    }, [])

    const handleUpdateStatus = (id, status) => {
        // console.log(e.target.id);
        console.log(id);
        console.log(status);
        const something = { id, status };
        fetch(`https://fathomless-stream-45638.herokuapp.com/update/${id}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(something)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            });
    };
    return (
        <div className="row container-fluid" >
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <Navbar></Navbar>
                <div style={{ width: '100%' }} className="row mt-5 table-content">
                    <h3>Total {ordered.length} Appointment</h3>
                    <table className="table table-borderless">
                        <thead className="table-head">
                            <tr>
                                <th className="text-secondary" scope="col">Name</th>
                                <th className="text-secondary" scope="col">Email ID</th>
                                <th className="text-secondary w-25" scope="col">Pay with</th>
                                <th className="text-secondary" scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ordered.map((ordered) =>
                                    <tr>
                                        <td>{ordered.name}</td>
                                        <td>{ordered.email}</td>
                                        <td className="text-justify">Visa Card</td>


                                        {admin ? (
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                        Change Status
                  </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item
                                                            onClick={() => handleUpdateStatus(ordered._id, "Done")}
                                                        >
                                                            Done
                    </Dropdown.Item>
                                                        <Dropdown.Item onClick={() => handleUpdateStatus(ordered._id, "Pending")}>Pending</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => handleUpdateStatus(ordered._id, "Ongoing")}>Ongoing</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>


                                            </td>
                                        ) : (
                                            <td>{ordered.status}
                                            </td>
                                        )
                                        }
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div >
    );
};
export default AdminOrderList;







