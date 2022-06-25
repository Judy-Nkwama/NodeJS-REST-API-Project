import './App.css'
import Modal from './components/Modal'

const App = () => {
  return(
        <div className='App d-flex flex-column justify-content-center align-items-center'>
            
            <Modal 
                modalId="exampleModal" title="Login" cancelText="Cancel" submitText="Login" 
            />
            
            <span className=''>This is my App</span>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Login
            </button>
        
        
        </div>
  )
}

export default App