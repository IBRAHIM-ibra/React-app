import { useState } from "react"
import { Link } from 'react-router-dom'
import '../styles/Nav.css'
import logo from '../images/logo.png'
import menu from '../images/menu2.png'



export default function Nav() {

    const [navOpen, setOpen] = useState(false);

    const CloseNav = () => setOpen(false);  // TO CLOSE THE PHONE NAV WHEN HE CLICK ON SOME LINK

    return (
        
        <nav>
        <Link to="/" ><img src={logo} alt="LOGO" className="logo" onClick={CloseNav}/></Link>

        <ul  className={`nav-links ${navOpen ? "open" : ""}`}>
            <li><Link to="/Apropos" onClick={CloseNav}>A PROPOS</Link></li>
            <li><Link to="/Events" onClick={CloseNav}>EVENEMENTS</Link></li>
            <li><Link to="/Projetcs" onClick={CloseNav}>PROJETS</Link></li>
            <li><Link to="/Contact" onClick={CloseNav}>CONTACT</Link></li>
            <li><Link to="/Join" className="active" onClick={CloseNav}>JOIN US</Link></li>
        </ul>
            <div className="menu-icon" onClick={()=>setOpen((prev) => !prev)}>
                <img src={menu} alt="menu" />

            </div>
       
        </nav>

    );
}