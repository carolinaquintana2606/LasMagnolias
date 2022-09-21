import './Navbar.css'
import logo from './assets/logo.png'
import Button from '../Button/Button'
import CartWidget  from '../CartWidget/CartWidget'

const Navbar = () =>{
 return(
    <nav className='row container-fluid align-items-center'>
        <div className='col-4'>
        <img src={logo} alt='LasMagolias' className='Logo'/>
        </div>
        <div className='col-6 container-fluid'>
            <Button label={'Inicio'} />
            <Button label={'Fragancias'}/>
            <Button label={'Maquillaje'} />
            <Button label={'Contacto'} />
        </div>
        <CartWidget/>
    </nav>
 )
}

export default Navbar;