import React from 'react';
import bannar from '../../../images/Law bell (1).png'
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1>Lawyer In Boston</h1>
                <p>We Help You Find The Right Lawyer In Boston By Matching
 Your Issue With Our Carefully Selected Expert Lawyers</p>
                <button className="btn btn-danger">BOOK APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={bannar} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;