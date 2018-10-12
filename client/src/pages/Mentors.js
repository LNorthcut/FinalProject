import React, { Component } from "react";
// import API from "../utils/API";
import Card from "../components/Card";
// import Alert from "../components/Alert";
import Container from "../components/Container";
import Row from "../components/Row";

class Mentor extends Component {
  state = {
    clickCard: ""
  };

  render() {
    return (
      <Container>
        <div>
          <h1 className="text-center">Choose A Mentor</h1>
          <Row>
            <div className="card-deck">
              <div className="card">
                <img
                  className="card-img-top"
                  src=".../100px200/"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>

              <div className="card">
                <img
                  className="card-img-top"
                  src=".../100px200/"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>

              <div className="card">
                <img
                  className="card-img-top"
                  src=".../100px200/"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </Row>
          <Row>
            <div className="card-deck">
              <div className="card">
                <img
                  className="card-img-top"
                  src=".../100px200/"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>

              <div className="card">
                <img
                  className="card-img-top"
                  src=".../100px200/"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>

              <div className="card">
                <img
                  className="card-img-top"
                  src=".../100px200/"
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </Row>

          {/* <Card image={this.state.clickCard} handleBtnClick={this.handleBtnClick} /> */}
        </div>
      </Container>
    );
  }
}

export default Mentor;
