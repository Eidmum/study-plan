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
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div className="card-footer">
                     <small className="text-body-secondary">Last updated 3 mins ago</small>
                </div>
            </div>
            
        </div>
    );
};

export default Book;