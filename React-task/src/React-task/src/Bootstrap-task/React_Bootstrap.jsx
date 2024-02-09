
import React from 'react'

import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Alert from 'react-bootstrap/Alert';

import { useState } from 'react'; //modal

import {
    Table, Accordion, Breadcrumb, ButtonGroup, Card, Carousel,Pagination
    , Dropdown, Figure, Image, ListGroup, Modal, Navbar, Nav, Container, NavDropdown,
    Form, FormControl, Row, Col
} from 'react-bootstrap';


function React_Bootstrap() {


    //modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    return (
        <div>
            <h1>React_Bootstrap</h1>
            <hr />

            <Button>React Component</Button>
            <hr />

            <h1>
                Example heading
                <Badge bg="secondary" as={Button}>
                    New
                </Badge>
            </h1>

            <hr />
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <Button variant="dark">Dark</Button>

            <hr />
            <Button variant="outline-primary">Primary</Button>{' '}
            <Button variant="outline-secondary">Secondary</Button>{' '}
            <Button variant="outline-success">Success</Button>{' '}
            <Button variant="outline-warning">Warning</Button>{' '}
            <Button variant="outline-danger">Danger</Button>{' '}
            <Button variant="outline-info">Info</Button>{' '}

            <hr />
            <Alert variant="primary">
                This is a "primary" alert—check it out!
            </Alert>
            <hr />

            {
                ["primary",
                    "secondary",
                    "success",
                    "warning",
                    "danger",
                    "info",
                    "light",
                    "dark"

                ].map((variant) => {
                    return (
                        <Alert key={variant} variant={variant}>
                            This is a {variant} alert—check it out!
                        </Alert>
                    )
                })
            }
            <hr />
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0wuSCruSMdKO5B8ZKTRx_PIUxnpCUyjPIoA&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <hr />

            <Card>
                <Card.Header>
                    <Nav variant="tabs" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link href="#first">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#disabled" disabled>
                                Disabled
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <hr />

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <hr />
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Yz7Uhyv85uTwwDf12y4t6ydMMRVN2OcfOd7kWqVIAgRJRa64_BbDWtOkVTGmd5QAut0&usqp=CAU" rounded />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Yz7Uhyv85uTwwDf12y4t6ydMMRVN2OcfOd7kWqVIAgRJRa64_BbDWtOkVTGmd5QAut0&usqp=CAU" roundedCircle />
                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Yz7Uhyv85uTwwDf12y4t6ydMMRVN2OcfOd7kWqVIAgRJRa64_BbDWtOkVTGmd5QAut0&usqp=CAU/" thumbnail />
                    </Col>
                </Row>
            </Container>
            <hr />

            <ListGroup>
                <ListGroup.Item>No style</ListGroup.Item>
                <ListGroup.Item variant="primary">Primary</ListGroup.Item>
                <ListGroup.Item action variant="secondary">
                    Secondary
                </ListGroup.Item>
                <ListGroup.Item action variant="success">
                    Success
                </ListGroup.Item>
                <ListGroup.Item action variant="danger">
                    Danger
                </ListGroup.Item>
                <ListGroup.Item action variant="warning">
                    Warning
                </ListGroup.Item>
                <ListGroup.Item action variant="info">
                    Info
                </ListGroup.Item>
                <ListGroup.Item action variant="light">
                    Light
                </ListGroup.Item>
                <ListGroup.Item action variant="dark">
                    Dark
                </ListGroup.Item>
            </ListGroup>
            <hr />

            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <hr />

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr />
            <Pagination>
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>


        </div>
    )
}

export default React_Bootstrap