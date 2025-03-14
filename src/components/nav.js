import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
const Nav=()=> {
    const {cartItems} = useContext(ShopContext);
    const itemCount= cartItems?.reduce((prev, current)=> {
        return prev + current.count
    }, 0)
    return (
        <div className="navbar navbar-dark bg-dark navbar-expand-lg ">
            <div className="container">
                <a className="navbar-brand m-0" href='/#'>Goodwill Home Store </a>
                <ul className="navbar-nav">
                    <li className='navbar-item'>
                        <Link to='/' className='nav-link'>shop</Link>
                    </li>
                    <li className="navbar-item d-flex flex-row align-items-center">
                        <Link to='/cart' className='nav-link'><FontAwesomeIcon icon={faShoppingCart}/></Link>
                        {itemCount && (<span className='text-white bg-primary rounded-2' style ={{fontSize: "0.8rem",padding: '0 0.2rem 0rem 0.2rem'}} >{itemCount}</span>)}
                    </li>
                </ul>
            </div>
        </div>       
    )
}
export default Nav;