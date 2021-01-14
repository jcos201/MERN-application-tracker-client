import { Link } from 'react-router-dom'


function ApplicationsPage (props) {
    const allApplications = props.user.applications;
    return (
        <div>
        <div>{props.user.firstName}'s Job Applications Page</div>
        <div>Number of Job Applcations: {props.user.applications.length}</div>
        {allApplications.length > 0 ? 
        <p>There are applications here</p> 
    :
        <p>There are no applications here</p>}
        <Link to="/addApplication"><button>Add Application</button></Link>
        </div>
    )
}

export default ApplicationsPage;