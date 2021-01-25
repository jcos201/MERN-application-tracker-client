import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

function Navigation(props){
    return (
        <Navbar collapseOnSelect expand="lg">
        { props.user?
        <Nav><Link to="/dashboard">{props.user.firstName}'s Application Tracker</Link></Nav>
        :
        <Nav><Link to="/">Application Tracker</Link></Nav>
        }
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
            </Nav>
            <Nav className={styles.navItems}>
        { props.user ?
            <>
            <Nav><Link to="" onClick={props.handleLogout}>Logout</Link></Nav>
            <Nav><Link to="/dashboard">Dashboard</Link></Nav>
            </>
            :
            <>
            <Nav><Link to="/login">Login</Link></Nav>
            <Nav><Link to="signup">Sign Up</Link></Nav>
            </>
        }
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;

/*

    <header className={styles.Header}>

    </header>

        <nav>
        <ul>

        </ul>
    </nav>

    */