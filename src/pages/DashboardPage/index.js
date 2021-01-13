import { Link } from 'react-router-dom'

import Applications from './Applications'
import JobSearch from './JobSearch'


function DashboardPage (props) {
    return(
        <div>
            {props.user._id}'s Dashboard Page
            <Applications />
            <JobSearch />
        </div>
    )

}

export default DashboardPage;