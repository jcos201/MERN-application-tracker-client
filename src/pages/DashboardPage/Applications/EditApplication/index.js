import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getToken } from '../../../../services/tokenService';
import ApplicationInfo from './ApplicationInfo';

const BASE_URL = 'http://localhost:3001/users';

function EditApplication(props) {
    let { id } = useParams();

    const [singleListingData, setSingleListingData] = useState(null);

        
    useEffect(() => {
        console.log('inside useEffect')
        
        let formInfo =[]
        console.log('inside getInitialFormState')
        const requestOptions = {
            headers: { 
                'Content-Type': 'Application/json',
                'Authorization': 'Bearer ' + getToken() },
        }
        fetch(BASE_URL + '/applications/' + id, requestOptions)
            .then(response => response.json())
            .then(data => setSingleListingData(data.listing))

        console.log('setListingdata')
        console.log(singleListingData);
            //(data => setApplicationsState(data.applicationArray))
        
    }, []);
    


    async function handleSubmit (event) {
        try {
            //event.preventDefault();

          //  await addListing(formState);

         //   console.log(getUser())

        //    props.history.push('/applications');
            
        } catch (error) {
            
        }
    }

    
    return singleListingData ? <ApplicationInfo preloadedData={singleListingData}/> : <div>Loading...</div>
}

export default EditApplication;