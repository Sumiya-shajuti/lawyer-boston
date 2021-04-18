import React from 'react';
import img from '../../../images/Law bell (2).png'
const MakeAppointment = () => {
    return (
        <section className="features-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-7 align-self-center">
                        <h1>Why Choose Lawyer Boston?</h1>
                        <p className="text-secondary my-5">
                         1. Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                         2. Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsabr <br />
                         3. distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita.<br />
                         4.Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur .
                        </p>
                        <button className="btn btn-danger">Appointment</button>
                    </div>
                    <div className="col-md-5 mb-4 m-md-0">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;