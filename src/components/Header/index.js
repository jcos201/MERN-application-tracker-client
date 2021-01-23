import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header(props) {
    return (
    <header className={styles.Header}>
        { props.user?
        <Link to="/dashboard"><h1>Application Tracker</h1></Link>
        :
        <Link to="/"><h1>Application Tracker</h1></Link>
        }
    </header>
    );
};

export default Header;