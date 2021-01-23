import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

function Navigation(props){
    return (
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
    )
}

export default Navigation;