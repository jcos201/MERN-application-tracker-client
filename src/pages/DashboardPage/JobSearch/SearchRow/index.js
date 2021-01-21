import { Link } from 'react-router-dom'

function SearchRow(props){
    let id = props.searchId;

    function onTrigger (event) {
        event.preventDefault()
        props.handleDelete(id)
    }

    return(
            <tr>
            <th>{props.jobKeyword}</th>
            <th>{props.city}</th>
            <th>{props.state1}</th>
            <td><Link to={"/search/"+id}><button >Search</button></Link></td>
            <td><button onClick={onTrigger}>Delete</button></td>
            </tr>
    );
}


export default SearchRow;