    import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import Navbar from '../Shared/Navbar/Navbar';
const MakeAdmin = () => {
             
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => {
        fetch('http://localhost:5000/makeAdmin',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            alert ('Admin Added Successfully!')
        })
    };

    return (
        <div className="row container-fluid">
            <div className="col-md-2">
                <Navbar></Navbar>
            </div>
            <div className="col-md-10">
               
                <div style={{width: '100%', background: '#F5F6FA', borderRadius: '10px', padding: '30px 50px'}} className="col-md-6 mt-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <input type="email" ref={register({ required: true })} name="email" placeholder="Email" className="form-control" />
                            {errors.email && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="form-group text-right">
                            <button type="submit" className="btn main-btn" style={{textTransform: 'uppercase'}}>Submit</button>
                        </div>
                    </form>
                </div>                
            </div>
        </div>
    );
};



export default MakeAdmin;


