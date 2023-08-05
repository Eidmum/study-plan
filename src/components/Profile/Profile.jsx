import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';
import "./Profile.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToLocalStorage, getFromLocalStorage } from '../../utilities/fakedb';

const Profile = ({time}) => {
    function activityCompleted(){
        toast("All reading completed");
    }
    
    const [breakTime,setBreakTime]=useState(0);
    const showBreak= (t)=>{
        setBreakTime(t);
        addToLocalStorage(t);

    
    };
    useEffect(()=>{
        const breakTimeInLocalStorage=getFromLocalStorage();
        setBreakTime(breakTimeInLocalStorage);
    },[]);
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
                
                    <button onClick={()=>{showBreak(10)}} className='btn-break btn btn-primary'>10m</button>
                    <button onClick={()=>{showBreak(20)}} className='btn-break btn btn-primary'>20m</button>
                    <button onClick={()=>{showBreak(30)}} className='btn-break btn btn-primary'>30m</button>
                    <button onClick={()=>{showBreak(40)}} className='btn-break btn btn-primary'>40m</button>

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
                    <h4> {breakTime} Minutes</h4>
                </div>
            </div>

            <div className="d-grid gap-2 mt-3 mt-3 pb-5">
                <button onClick={()=>activityCompleted()} className="btn btn-primary" type="button">Button</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Profile;