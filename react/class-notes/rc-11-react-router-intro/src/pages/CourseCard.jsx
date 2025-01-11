import React from "react";
import data from "../data.js";
import { Container, Col, Card, Row, Button } from "react-bootstrap";
const CourseCard = () => {
  //!react-bootstrap ten CourseCard componenti
  //!
  return (
    <Container className="text-center">
      <Row>
        {data.map((a) =>  (
            <Col
              className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center"
              key={a.id}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={a.img} />
                <Card.Body>
                  <Card.Title>{a.name}</Card.Title>
                  <Card.Text>{a.text}</Card.Text>
                  <Button variant="danger"
                 >
                    DETAILS
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )
        )}
      </Row>
    </Container>
  );
};

export default CourseCard;
