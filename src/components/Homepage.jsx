import React from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  ButtonGroup,
  Button,
} from "react-bootstrap";

const Homepage = function () {
  return (
    <Container fluid className="homepage">
      <Row className="d-flex">
        <Col className="d-flex align-items-center">
          <h2 className="pe-4">TV Shows</h2>
          <Dropdown>
            <Dropdown.Toggle
              variant="outline-secondary"
              id="dropdown-basic"
              className="border border-1 border-secondary over"
            >
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Horror</Dropdown.Item>
              <Dropdown.Item href="#">Fantasy</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <ButtonGroup aria-label="Basic example">
            <Button variant="outline-secondary" className="rounded-1 over">
              <i className="bi bi-text-left"></i>
            </Button>
            <Button variant="outline-secondary" className="rounded-1 over">
              <i className="bi bi-grid"></i>
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
