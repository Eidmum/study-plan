import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuildingColumns} from '@fortawesome/free-solid-svg-icons';
import { useEffect , useState} from 'react';
import "./Books.css"
const Books = () => {
    const [books,setBooks]=useState([]);
    useEffect(()=>
      {
        fetch("data.json")
            .then(res=>res.json())
            .then(data=>setBooks(data))
      }
    ,[])
    return (
        <div className='container'>
             <h2 className='header'>
               <FontAwesomeIcon icon={faBuildingColumns} />
                <span className='title'>Study Plan App</span>
             </h2>
             <h4 className='subtitle'>Select Today's Study Plan</h4>
             <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    
             </div>
        </div>
    );
};

export default Books;