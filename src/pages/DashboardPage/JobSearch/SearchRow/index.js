import { Link } from 'react-router-dom'

import { Accordion, Card} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import styles from './SearchRow.module.css'
import { Trash } from 'react-bootstrap-icons'


function SearchRow(props){
    let id = props.searchId;

    function onTrigger (event) {
        event.preventDefault()
        props.handleDelete(id)
    }

    return(
            <tr>
            <td>{props.jobKeyword}</td>
            <td>{props.city}</td>
            <td>{props.state1}</td>
            <td><Link to={"/search/"+id}><Button className={styles.btnEdit} class="btn-primary btn-sm" >Search</Button></Link></td>
            <td><Button onClick={onTrigger} className={styles.btnDanger} class="btn-danger btn-sm"><Trash /></Button></td>
            </tr>
    );
}




export default SearchRow;