import { Link } from 'react-router-dom'



function DashboardPage (props) {
    return(
        <div>
            {props.user.firstName}'s Dashboard Page
            <br/>{props.user._id}
            <br/>{props.user.applications.length}<br/>
            <Link to="/applications"><button>Applications</button></Link>
            <Link to="/jobsearch"><button>My Job Search</button></Link>
        </div>
    )

}

export default DashboardPage;