import styles from './Footer.module.css';

function Footer(props) {
    return (
    <footer className={styles.Footer}>
        <p>Copyright &copy; All rights reserved {new Date().getFullYear()} Application Tracker</p>
    </footer>);
};

export default Footer;