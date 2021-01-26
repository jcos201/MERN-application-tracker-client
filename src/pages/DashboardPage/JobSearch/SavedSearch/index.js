import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getToken } from '../../../../services/tokenService';
import { Row, Container, Col, Button, Table } from 'react-bootstrap';
import styles from './SavedSearch.module.css';

// const BASE_URL = 'http://localhost:3001/users' Development URL
const BASE_URL = 'https://react-job-search-app.herokuapp.com/users'

function SavedSearch(props) {
    let { id } = useParams();

    const [searchListing, setSearchListing] = useState([]);

    useEffect(() => {
        console.log('inside saved search option useEffect');

        const requestOptions = {
            headers: { 
                'Content-Type': 'Application/json',
                'Authorization': 'Bearer ' + getToken() },
        }
        fetch(BASE_URL + '/savedsearches/' + id, requestOptions)
            .then(response => response.json())
            .then(data => setSearchListing(data.searchListing));
        
    }, []);

    let monKeyword = "q=";
    let monCity = "";

    let inKeyword = "q=";
    let inCity = "&l="

    let cBuildKeyword ="keywords=";
    let cBuildCity = "&location=";

    let museKeyword = "";
    let museCity = "";

    if(searchListing.jobKeyword) {
        inKeyword += searchListing.jobKeyword.replace(" ", "+");
        cBuildKeyword += searchListing.jobKeyword.replace(" ", "+");
        museKeyword += "keyword=" + searchListing.jobKeyword.replace(" ", "%20");
        monKeyword += searchListing.jobKeyword.replace(" ", "-");
     }

    if(searchListing.city) {
        inCity += searchListing.city.replace(" ", "+");
        cBuildCity += searchListing.city.replace(" ", "+");
        museCity += "&job_location=" + searchListing.city.replace(" ", "%20");
        monCity += "&where=" + searchListing.city.replace(" ", "-");
     }

    if(searchListing.state1) {
        if(monCity === "") {
            inCity += searchListing.state1;
            cBuildCity += searchListing.state1;
            museCity += "&job_location=" + searchListing.state1;
            monCity += "&where=" + searchListing.state1;
        } else {
            inCity += "%2C+" + searchListing.state1;
            cBuildCity += "%2C+" + searchListing.state1;
            museCity += "%2C%20" + searchListing.state1;
            monCity += "__2C-" + searchListing.state1;
        }
     }

     const indeedURL = "https://www.indeed.com/jobs?" + inKeyword + inCity;
     const cBuilderURL = "https://www.careerbuilder.com/jobs?" + cBuildKeyword + cBuildCity;
     const museURL = "https://www.themuse.com/search?" + museKeyword + museCity;
     const monsterURL = "https://www.monster.com/jobs/search/?" + monKeyword + monCity;
     
    return(
        <Container className={styles.pageItems}>
            <Row>
            <Link to="/jobsearch" className={styles.article}><Button>Return to all job search listings</Button></Link> 
            </Row>
            <Row class={styles.textRow}>
                Search Details:
            </Row>
            <Row>
                <Col xs={12} md={6} lg={6}>
                
        <Table>
            <tbody>
                <tr>
                    <th className={styles.thCol}>Keyword:</th><td className={styles.tdCol}>{searchListing.jobKeyword}</td>
                </tr>
                <tr>
                    <th className={styles.thCol}>City:</th><td className={styles.tdCol}>{searchListing.city}</td>
                </tr>
                <tr>
                    <th className={styles.thCol}>State:</th><td className={styles.tdCol}>{searchListing.state1}</td>
                </tr>
            </tbody>
        </Table>
                </Col>
                <Col className={styles.searchCol} xs={6} md={6} lg={6}>
        <a href={monsterURL} target="_blank" rel="noreferrer"><Button className={styles.searchBtn}>Use this search on Monster.com</Button></a>
        <a href={indeedURL} target="_blank" rel="noreferrer"><Button className={styles.searchBtn}>Use this search on Indeed.com</Button></a>
        <a href={cBuilderURL} target="_blank" rel="noreferrer"><Button className={styles.searchBtn}>Use this search on CareerBuiler.com</Button></a>
        <a href={museURL} target="_blank" rel="noreferrer"><Button className={styles.searchBtn}>Use this search on Muse.com</Button></a>
                </Col>
            </Row>  
        </Container>
    )
}


export default SavedSearch;