import  React, { Fragment } from 'react'
import Background from '../../components/background/background.component'
import { Container, Row, Card, ListGroup } from 'react-bootstrap'

const MainPage = props => (
    <Fragment>
    <Background />
        <Row>
            <Container>
            <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>
            </Container>
        </Row>
    </Fragment>
  
)

export default MainPage;