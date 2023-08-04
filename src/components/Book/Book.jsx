import React from 'react';
import "./Book.css"
const Book = (props) => {
    console.log(props);
    const {id,name,photo,time,description,age}=props.book;
    return (
        <div className='col'>
            <div className="card h-100">
                <img src={photo} className="card-img-top img-fluid image"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <h6>For Age : {age}</h6>
                    <h6>Time required : {time} Minutes</h6>
                    <div className="d-grid gap-2 mt-3">
                        <button className="btn btn-primary" type="button">Button</button>
                    
                    </div>
                </div>


            </div>
            
        </div>
    );
};

export default Book;