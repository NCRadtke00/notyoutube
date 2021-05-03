import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../../components/categoriesbar/CategoriesBar";
import Video from "../../components/video/Video";
import { getPopularVideos } from "../../redux/actions/videos.action";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);
  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  return (
    <Container>
      <CategoriesBar />
      <Row>
        {[...new Array(21)].map(() => (
          <Col Lg={3} md={4}>
            <Video video={video} key={video.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
