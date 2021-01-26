import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getToken } from '../../../../services/tokenService';
import ApplicationInfo from './ApplicationInfo';

const BASE_URL = 'http://localhost:3001/users';

function EditApplication(props) {
    let { id } = useParams();

    const [singleListingData, setSingleListingData] = useState(null);

        
    useEffect(() => {        
        const requestOptions = {
            headers: { 
                'Content-Type': 'Application/json',
                'Authorization': 'Bearer ' + getToken() },
        }
        fetch(BASE_URL + '/applications/' + id, requestOptions)
            .then(response => response.json())
            .then(data => setSingleListingData(data.listing))

        
    }, [id]);
    
    return singleListingData ? <ApplicationInfo {...props} preloadedData={singleListingData}/> : <div>Loading...</div>
}

export default EditApplication;