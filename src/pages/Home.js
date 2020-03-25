import React, { Component } from "react";
import Targets from "../components/Targets/Targets";
import Goals from "../components/Goals/Goals";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./Home.css";

export class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h2>Set Targets & Goals</h2>
        <Container>
          <Row>
            <Targets />
          </Row>
          <Row>
            <Goals />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
