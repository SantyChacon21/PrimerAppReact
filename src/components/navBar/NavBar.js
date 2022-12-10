
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';

export const NavBar = () =>{
    return(
        <header className="header">
            <Link to='/'>
            <div className="img__logo">
                <img src='https://res.cloudinary.com/dehdwugms/image/upload/v1669416874/asdasdasd_3_pidkzf.jpg' alt=''/>
            </div>
            </Link>

            <nav className="navbar__header">
                <ul className="lista__header">
                    <Link to='/' className='link'><li className='itemList__header btnLight'>Inicio</li></Link>
                    <NavDropdown className='itemList__header' title="Productos" id="basic-nav-dropdown">
                    <Link to={`/category/1`}><NavDropdown.Item className='' href="./">Sedan</NavDropdown.Item></Link>
                    <Link to={`/category/2`}><NavDropdown.Item className='' href="./">Pick-Up</NavDropdown.Item></Link>
                    <Link to={`/category/3`}><NavDropdown.Item className='' href="./">Suv</NavDropdown.Item></Link>
                    <Link to={`/category/4`}><NavDropdown.Item className='' href="./">Compactos</NavDropdown.Item></Link>
                    <Link to={`/category/5`}><NavDropdown.Item className='' href="./">Hypercar</NavDropdown.Item></Link>
                    <NavDropdown.Divider />
                    <Link to={`/category/6`}><NavDropdown.Item className='' href="./">Sale</NavDropdown.Item></Link>
                    </NavDropdown>
                    <a href='/' className='link'><li className='itemList__header'>Nosotros</li></a>
                    <CartWidget/>
                    
                </ul>
            </nav>

        </header>
        
    )

}