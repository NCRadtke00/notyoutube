import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import numeral from "numeral";
import Video from "../../components/video/Video";
import { getChannelDetails } from "../../redux/actions/channel.action";
import { getVideosByChannel } from "../../redux/actions/videos.action";
import "./channelScreen.scss";

const ChannelScreen = () => {

  return(
    <div className="channelHeader">
        <div className="d-flex">
            <img src="" alt=""/>
            <div className="channelHeader__deatails">
                <h3></h3>
                <span></span>
            </div>
        </div>
        <button>Subscribe</button>
    </div>
    //copy and past container>row>Col>video
  ) 
}

export default ChannelScreen;
