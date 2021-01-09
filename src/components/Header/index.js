import styles from './Header.module.css'

function Header(props) {
    return (
    <header className={styles.Header}>
        <h1>Application Tracker</h1>
        <nav>
            <ul>
                <li>Login</li>
                <li>Logout</li>
                <li>Signup</li>
                <li>Dashboard</li>
            </ul>
        </nav>
    </header>
    );
};

export default Header;