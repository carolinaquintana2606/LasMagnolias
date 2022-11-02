import './Navbar.css'
import logo from './assets/logo.png'
import Button from '../Button/Button'
import CartWidget  from '../CartWidget/CartWidget'
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { getCategories } from '../../services/firebase/firestore'



const Navbar = () =>{

  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then(categories =>{setCategories(categories)
    }).catch(error => { console.log(error)})

  }, [])


 return(
  <nav className='row container-fluid align-items-center'>
    <div className='col-4'>
      <Link to='/'>
        <img src={logo} alt='LasMagolias' className='Logo'/>
      </Link>
    </div>
    <div className='col-7 d-flex justify-content-end'>
      {categories.map(cat =>
        <NavLink key={cat.id} to={`/category/${cat.slug}`}><Button label={cat.label}/>  </NavLink>)}
    </div>
    <div className='col-1 justify-content-center'>
      <CartWidget/>
    </div>
  </nav>
 )
}

export default Navbar;