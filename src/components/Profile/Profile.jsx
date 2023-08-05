import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import "./Profile.css"
const Profile = ({time}) => {
    return (
        <div className='container profile-information'>
            <div className='d-flex'>
                <div>
                    <img className='profile-image' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
                </div>
                <div className='information'>
                    <h6>Zahid Hossain</h6>
                    <h6><FontAwesomeIcon className='icon' icon={faLocationDot} />
                    Sydney, Australia</h6>
                </div>
            </div>
            <div>
                <div className='mt-5 details'>
                    <div className='d-flex justify-contetnt-space-between'>
                        <div>
                            <h3>65 kg</h3>
                            <h3>Weight</h3>
                        </div>
                        <div>
                            <h3>6.6</h3>
                            <h3>Height</h3>
                        </div>
                        <div>
                            <h3>23yrs</h3>
                            <h3>Age</h3>
                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-5'>
                <h3>Add a break</h3>
                <div className='break-area mt-3'>
                
                    <button className='btn-break btn btn-primary'>10s</button>
                    <button className='btn-break btn btn-primary'>20s</button>
                    <button className='btn-break btn btn-primary'>30s</button>
                    <button className='btn-break btn btn-primary'>40s</button>

                </div>

            </div>
            <div className='reading mt-5'>
                <h3>Reading Details</h3>
                <div className='reading-area mt-3 d-flex justify-content-between'>
                    <h4>Reading Time</h4>
                    <h4>{time} Minutes</h4>
                </div>
            </div>
            <div className='break mt-5'>
                <h3>Break Details</h3>
                <div className='break-area mt-3 d-flex justify-content-between'>
                    <h4>Breaking Time</h4>
                    <h4>200 Minutes</h4>
                </div>
            </div>

            <div className="d-grid gap-2 mt-3 mt-3 pb-5">
                <button className="btn btn-primary" type="button">Button</button>
            </div>
        </div>
    );
};

export default Profile;