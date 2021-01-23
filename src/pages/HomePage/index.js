import logo from '../../ApplicationTracker.png'
import styles from './HomePage.module.css'

function HomePage (props) {
    return(
        <div className={styles.div}>
            <p>An online resource to help with your job search.</p>
            <img src={logo} className={styles.img} alt="Use this application to search for jobs on multiple sites and track all the applications you've submitted"/>
        </div>
    )

}

export default HomePage;