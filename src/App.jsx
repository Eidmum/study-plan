import { useState } from 'react'
import Books from './components/Books/Books'
import Profile from './components/Profile/Profile'
import Questions from './Questions/Questions';

function App() {
  const [time,setTime]=useState(0);
  const addedTime=t=>{
    
    setTime(time+t);
  }
  return (
    <>  
      <div className='d-lg-flex  container'>
          <div className='w-lg-75 mt-sm-5 mt-md-5 mt-lg-0 w-md-100 w-sm-100 pb-5'>
             <Books addedTime={addedTime}></Books>
          </div>
          <div className='w-lg-25 mt-sm-5 mt-md-5 mt-lg-0 w-md-100 w-sm-100 ms-3 mb-5'>
            <Profile time={time}></Profile>
          </div>
          
      </div>
      <div className='container'>
          <Questions></Questions>
      </div>

     
    </>
  )
}

export default App
