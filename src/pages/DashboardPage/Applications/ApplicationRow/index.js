import { Link } from 'react-router-dom'

function ApplicationRow (props) {
    let id = props.appId;


    return (        
            <tr>
            <th>{props.companyName}</th>
            <th>{props.jobTitle}</th>
            <th>{props.dateApplied}</th>
            <th>{props.interviewDate}</th>
            <th>{props.contactName}</th>
            <th>{props.notes}</th>
            <td><Link to={"/edit/"+id}><button>Edit</button></Link></td>
            <td><Link to={"/delete/"+id}><button >Delete</button></Link></td>
            </tr>)
};

export default ApplicationRow;