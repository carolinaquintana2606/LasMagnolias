import './Navbar.css'
import logo from './assets/logo.png'
import Button from '../Button/Button'
import CartWidget  from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () =>{
 return(
    <nav className='row container-fluid align-items-center'>
        <div className='col-4'>
            <Link to='/'>
            <img src={logo} alt='LasMagolias' className='Logo'/>
            </Link>
                
        </div>
        <div className='col-6 container-fluid'>
            <Link to='/category/fragancias'><Button label={'Fragancias'}/></Link> 
            <Link to='/category/maquillaje'><Button label={'Maquillaje'} /></Link> 
            <Button label={'Contacto'} />
        </div>
        <CartWidget/>
    </nav>
 )
}

export default Navbar;