import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../../components/categoriesbar/CategoriesBar";
import Video from "../../components/video/Video";

const HomeScreen = () => {
  return (
    <Container>
      <CategoriesBar />
      <Row>
        {[...new Array(21)].map(() => (
          <Col Lg={3} md={4}>
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
