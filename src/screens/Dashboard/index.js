import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  FlexibleXYPlot,
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from "react-vis";

import "./style.css";

const Dashboard = () => {
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ];

  return (
    <>
      <div className="w-100 d-flex justify-content-center p-3">
        <h1>Dashboard</h1>
      </div>
      <Row className="graph-bg">
        <Col className="p-2" lg="6" md="12">
          <div className="graph-canvas">
            <FlexibleXYPlot
              width={1000}
              height={window.screen.width < 600 ? 400 : 700}
            >
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <LineSeries style={{ fill: "none" }} data={data} />
            </FlexibleXYPlot>
          </div>
        </Col>
        <Col className="p-2" lg="6" md="12">
          <div className="graph-canvas">
            <FlexibleXYPlot
              width={1000}
              height={window.screen.width < 600 ? 400 : 700}
            >
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <LineSeries style={{ fill: "none" }} data={data} />
            </FlexibleXYPlot>
          </div>
        </Col>
        <Col className="p-2" lg="6" md="12">
          <div className="graph-canvas">
            <FlexibleXYPlot
              width={1000}
              height={window.screen.width < 600 ? 400 : 700}
            >
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <LineSeries style={{ fill: "none" }} data={data} />
            </FlexibleXYPlot>
          </div>
        </Col>
        <Col className="p-2" lg="6" md="12">
          <div className="graph-canvas">
            <FlexibleXYPlot
              width={1000}
              height={window.screen.width < 600 ? 400 : 700}
            >
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <LineSeries style={{ fill: "none" }} data={data} />
            </FlexibleXYPlot>
          </div>
        </Col>
        <Col className="p-2" lg="6" md="12">
          <div className="graph-canvas">
            <FlexibleXYPlot
              width={1000}
              height={window.screen.width < 600 ? 400 : 700}
            >
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <LineSeries style={{ fill: "none" }} data={data} />
            </FlexibleXYPlot>
          </div>
        </Col>
        <Col className="p-2" lg="6" md="12">
          <div className="graph-canvas">
            <FlexibleXYPlot
              width={1000}
              height={window.screen.width < 600 ? 400 : 700}
            >
              <VerticalGridLines />
              <HorizontalGridLines />
              <XAxis />
              <YAxis />
              <LineSeries style={{ fill: "none" }} data={data} />
            </FlexibleXYPlot>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
