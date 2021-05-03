import React from "react";
import "./videoMetaData.scss";
function VideoMetaData() {
  return (
    <div className="videoMetaData_py-2">
      <div className="videoMetaData__top">
        <h5>Video title</h5>
        <div className="py-1 d-flex justify-content-between align-items-center">
          <span>
            {numeral(viewCount).format("0.a")} Views •{" "}
            {moment(publishedAt).fromNow()}
          </span>
        </div>
      </div>
      <div className="videoMetaData__channel"> </div>
      <div className="videoMetaData__description"></div>
    </div>
  );
}

export default VideoMetaData;
