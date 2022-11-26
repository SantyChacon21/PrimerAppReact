
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

export const NavBar = () =>{
    return(
        <header className="header">
            <div className="img__logo">
                <img src='https://res.cloudinary.com/dehdwugms/image/upload/v1669416874/asdasdasd_3_pidkzf.jpg' alt=''/>
            </div>

            <nav className="navbar__header">
                <ul className="lista__header">
                    <a className='linkNavbar__header' href='./'><li className='itemList__header btnLight'>Inicio</li></a>
                    <NavDropdown className='itemList__header' title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item className='' href="./">Nuevo</NavDropdown.Item>
                    <NavDropdown.Item className='' href="./">Reacondicionado</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className='' href="./">Promociones</NavDropdown.Item>
                    </NavDropdown>
                    <a className='linkNavbar__header' href='./'><li className='itemList__header'>Nosotros</li></a>
                    <CartWidget/>
                    
                </ul>
            </nav>

        </header>
        
    )

}