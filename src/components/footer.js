import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCode} from '@fortawesome/free-solid-svg-icons';
export const Footer=()=>{
    return(<div className="bg-dark bg-gradient text-light mt-2">
<div class="container navbar-expand-lg footer">
  <div class="d-flex justify-content-between align-items-center">
  <h5 class="card-title">© 2025 by kimiaRahimi 
  <FontAwesomeIcon className='m-2 mt-0 mb-0 text-danger' icon={faCode} />
  </h5>
    <ul className="navbar-nav">
           <li className='navbar-item'> <a className='nav-link' href="/#">About<span className='text-danger m-1'>|</span></a></li>
           <li className='navbar-item'><a className='nav-link' href="/#">Privacy Policy<span className='text-danger m-1'>|</span></a></li>
           <li className='navbar-item'><a className='nav-link' href="/#">Licensing<span className='text-danger m-1'>|</span></a></li>
           <li className='navbar-item'><a className='nav-link' href="/#">Contact</a></li>
        </ul>
  </div>
</div></div>
)}