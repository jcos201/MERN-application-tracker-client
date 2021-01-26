import { Link } from 'react-router-dom'
import { Button, Accordion, Card, Col, Row } from 'react-bootstrap'
import { Trash } from 'react-bootstrap-icons'

import styles from './ApplicationRow.module.css'


function ApplicationRow (props) {
    let id = props.appId;
    let interviewDate = ''
    let dateApplied = ''
    
    if(props.interviewDate)  {
        interviewDate += `${formatDate(props.interviewDate, 2)}`;
    }

    if(props.dateApplied)  {
        dateApplied += `${formatDate(props.dateApplied)}`;
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
            
        return output === 2 ? [week[dayOfWeek], [month, day, year].join('/')].join(' ') : [month, day, year].join('/');

    }

    return (      
        <Accordion className={styles.accordionScroll}>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0" aria-expanded="false">
                <strong>Company Name:</strong> {props.companyName}  <br/><strong>Position Applied For:</strong> {props.jobTitle}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Row>
                            <Col>Date Applied: <br/>{dateApplied} </Col>
                            <Col>Date of Interview: <br/>{interviewDate}</Col>
                            <Col>Contact Person: <br/>{props.contactName} </Col>
                        </Row>
                        <Row>
                        <Col><br/>Notes: {props.notes}</Col>

                        </Row>
      <br/><Link to={"/edit/"+id}><Button className={styles.btnEdit} class="btn btn-primary btn-sm">Edit</Button></Link>  
      <Link to={"/delete/"+id}><Button className={styles.btnDanger} class="btn btn-danger btn-sm"><Trash /></Button></Link>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
            )
};

export default ApplicationRow;