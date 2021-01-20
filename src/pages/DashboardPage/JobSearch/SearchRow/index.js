import { Link } from 'react-router-dom'

function SearchRow(props){
    let id = props.searchId;

    return(
            <tr>
            <th>{props.jobKeyword}</th>
            <th>{props.city}</th>
            <th>{props.state1}</th>
            <td><Link to={"/search/"+id}><button >Search</button></Link></td>
            </tr>
    );
}

export default SearchRow;