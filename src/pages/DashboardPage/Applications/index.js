import { Link } from 'react-router-dom'


function ApplicationsPage (props) {
    const allApplications = props.user.applications;
    console.log(props.user)
    return (
        <div>
        <div>{props.user.firstName}'s Job Applications Page</div>
        <div>Number of Job Applcations: {props.user.applications.length}</div>
        {allApplications.length > 0 ? 
        <table>
            <tr>
            <th>Company Name</th>
            <th>Position</th>
            <th>Date Applied</th>
            <th>Interview Date</th>
            <th>Contact Name</th>
            <th>Notes</th>
            </tr>
            <tr>

            </tr>
        </table>
            :
        <p>There are no applications here</p>}
        <Link to="/addApplication"><button>Add Application</button></Link>
        </div>
    )
}

export default ApplicationsPage;