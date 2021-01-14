import { Link } from 'react-router-dom'



function DashboardPage (props) {
    return(
        <div>
            {props.user.firstName}'s Dashboard Page
            {props.user._id}
            <Link to="/applications"><button>Applications</button></Link>
            <Link to="/jobsearch"><button>My Job Search</button></Link>
        </div>
    )

}

export default DashboardPage;