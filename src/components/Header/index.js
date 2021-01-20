import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header(props) {
    return (
    <header className={styles.Header}>
        <Link to="/">
        <h1>Application Tracker</h1>
        </Link>
        <nav>
            <ul>
                { //javascript expression
                    props.user ?
                    <>
                    <li><Link to="" onClick={props.handleLogout}>Logout</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    </>
                    :
                    <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="signup">Sign Up</Link></li>
                    </>
                }
            </ul>
        </nav>
    </header>
    );
};

export default Header;