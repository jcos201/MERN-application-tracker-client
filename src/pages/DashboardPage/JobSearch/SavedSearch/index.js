import { useParams } from 'react-router-dom';

function SavedSearch(props) {
    let { id } = useParams();
    
    return(
        <div>This will show the Saved Search</div>
    )
}


export default SavedSearch;