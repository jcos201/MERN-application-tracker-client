import { Link } from 'react-router-dom'


function ApplicationsPage (props) {

    return (
        <div>
        <div>{props.user.firstName}'s Job Applications Page</div>
        <div>Number of Job Applcations: {props.user.applications.length}</div>
        <Link to="/addApplication"><button>Add Application</button></Link>
        </div>
    )
}

export default ApplicationsPage;