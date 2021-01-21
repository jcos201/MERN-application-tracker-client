import { Link } from 'react-router-dom'

function ApplicationRow (props) {
    let id = props.appId;
    let interviewDate = ''
    let dateApplied = ''
    
    if(props.interviewDate)  {
        interviewDate += `${formatDate(props.interviewDate, 2)}`;
        console.log(interviewDate)

    }

    if(props.dateApplied)  {
        dateApplied += `${formatDate(props.dateApplied)}`;
        console.log(dateApplied)

    }

    function formatDate(date, output) {
        var week = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + (d.getDate() + 1),
            year = d.getFullYear(),
            dayOfWeek = d.getDay();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
        
        console.log(`dayte = ${date}`)
    
        return output === 2 ? [week[dayOfWeek], [month, day, year].join('/')].join(' ') : [month, day, year].join('/');

    }

    return (        
            <tr>
            <th>{props.companyName}</th>
            <th>{props.jobTitle}</th>
            <th>{dateApplied}</th>
            <th>{interviewDate}</th>
            <th>{props.contactName}</th>
            <th>{props.notes}</th>
            <td><Link to={"/edit/"+id}><button>Edit</button></Link></td>
            <td><Link to={"/delete/"+id}><button >Delete</button></Link></td>
            </tr>)
};

export default ApplicationRow;