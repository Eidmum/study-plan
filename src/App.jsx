import Books from './components/Books/Books'
import Profile from './components/Profile/Profile'

function App() {
  return (
    <>  
      <div className='d-lg-flex  container'>
          <div className='w-lg-75 mt-sm-5 mt-md-5 mt-lg-0 w-md-100 w-sm-100 pb-5'>
             <Books></Books>
          </div>
          <div className='w-lg-25 mt-sm-5 mt-md-5 mt-lg-0 w-md-100 w-sm-100 ms-3 mb-5'>
            <Profile></Profile>
          </div>
          
      </div>

     
    </>
  )
}

export default App
