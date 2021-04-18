import React from 'react';
import img from '../../../images/lawyer.jpg'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-5 offset-md-1">
                <h1>Lawyer In Boston</h1>
                <p>We Help You Find The Right Lawyer In Boston By Matching
Your Issue With Our Carefully Selected Expert Lawyers</p>
                <button className="btn btn-primary">BOOK APPOINTMENT</button>
                <br/>
                <br/>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6">
                <div  style={{height:'200px' ,width:'200px',marginTop:'80px' }}>
                <img src={img} alt="" className="img-fluid" />
                </div>
            </div>
        </main>
    );
};

export default AppointmentHeader;