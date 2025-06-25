
import "./Nav.css"
import { Link, Element } from 'react-scroll';

function Nav() {
    return (
        <nav>
            <h1>SANE AALAM</h1>
            <ul>
                <Link to="home" smooth={true} duration={500}> <li>Home</li> </Link>
                <Link to="about" smooth={true} duration={500}> <li>About</li> </Link>
                <Link to="projects" smooth={true} duration={500}> <li>Projects</li> </Link>
                <Link to="contact" smooth={true} duration={500}>  <li>Contact</li> </Link >
                <Link to="footer" smooth={true} duration={500}>  <li>Footer</li> </Link >
            </ul >
        </nav >
    );
}
export default Nav;