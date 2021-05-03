import React, { useEffect } from "react";
import { useDisatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import VideoHorizontal from "../../components/videoHorizontal/VideoHorizontal";
import { getSubscribedChannels } from "../../redux/actions/videos.action";
import "./subscriptions.scss";

const SubscriptionScreen = () => {


  return (
    <Container fluid>
      {!loading ? (
        videos?.map((videos) => (
          <VideoHorizontal video={video} key={video.id} subScreen />
        ))
      ) : (
        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="160px" count={20} />
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default SubscriptionScreen;
