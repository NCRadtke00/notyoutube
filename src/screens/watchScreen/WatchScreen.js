import React from "react";
import "./watchScreen.scss";
function WatchScreen() {
  return (
      <Row>
          <Col Lg={8}>
              <div className="watchScreen__player">
                  <iframe
                    src=
                    frameBorder='0'
                    title='MY VIDEO'
                    allowFullScreen
                  ></iframe>
              </div>
          </Col>
      </Row>
  )
}

export default WatchScreen;
