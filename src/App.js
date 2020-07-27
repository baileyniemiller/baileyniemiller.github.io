import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
// import Form from "react-bootstrap/Form";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light" fixed="top" id="homeNav">
        <Navbar.Brand href="#home">Bailey Niemiller Portfolio</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#projectRow">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
      <Container fluid>
        <Row id="helloRow">
          <Col id="helloCol" xs={12} sm={6} lg={6} xl={6}>
            <div id="hello">
              <h1>Hello!</h1>
              <h2>thanks for stopping by</h2>
            </div>
          </Col>
          <Col xs={12} sm={6} lg={6} xl={6}>
            <div id="picture">
              <img src={require("./mecircle.png")} id="me" />
            </div>
          </Col>
        </Row>
        <Row id="aboutRow">
          <Col xs={12} sm={12} lg={12} xl={12}>
            <div id="about">
              <h3 id="aboutTitle">About Me</h3>
              <p id="paragraph">
                Early after graduating high school, I quickly found that designing and creating
                brought me joy. I found a passion for building things on the web
                and I knew that's what I wanted to pursue. As I graduate from Emerging Digital Academy in Fargo, ND,
                I am excited to grow in a career that I love.
                <br /><br />
                I was born in Bismarck and raised in Fargo and I absolutely love
                living here. I’m a hardcore North Dakota girl. I enjoy
                basketball, baking, being active, and going to the lake in the
                summer!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <div id="midDiv"></div> */}
      <Container fluid id="projectRow">
        <h3 id="projectTitle">Featured Projects</h3>
        <Row>
          <Col xs={12} sm={12} lg={4} xl={4}>
            <Card>
              <Card.Img variant="top" src={require("./search.png")} />
              <Card.Body>
                <Card.Text className="cardText">
                  Foodie is the solo project I created in Emerging Digital
                  Academy. A user can create an account and login, search
                  restaurants, and save them to the lists in their profile.
                </Card.Text>
                <a href="https://github.com/baileyniemiller/foodie"><Button className="goButton">Go to Github</Button></a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} lg={4} xl={4}>
            <Card>
              <Card.Img variant="top" src={require("./infomovie.png")} />
              <Card.Body>
                <Card.Text className="cardText">
                  InfoMovie is a weekend project we completed in Emerging
                  Digital Academy. A user can click a movie to view the details
                  and has the option to edit the title and description.
                </Card.Text>
                <a href ="https://github.com/baileyniemiller/movie-sagas"><Button className="goButton">Go to Github</Button></a>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} sm={12} lg={4} xl={4}>
            <Card>
              <Card.Img variant="top" src={require("./calc.png")} />
              <Card.Body>
                <Card.Text className="cardText">
                  Another one of our weekend projects was to create a
                  server-side calculator. A user can calculate two numbers and
                  the total will be displayed as well as a running list of
                  previous calculations.
                </Card.Text>
                <a href="https://github.com/baileyniemiller/jquery-server-calculator"><Button className="goButton">Go to Github</Button></a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid id="contact">
        <h3 id="contactTitle">Contact</h3>
        <div className="socialLink">
          <a href="https://www.linkedin.com/in/baileyniemiller/">
            <LinkedInIcon
              fontSize="large"
              style={{ fill: "#8ba39f" }}
              className="social"
            ></LinkedInIcon>
          </a>
          <a href="https://github.com/baileyniemiller">
            <GitHubIcon
              fontSize="large"
              style={{ fill: "#8ba39f" }}
              className="social"
            ></GitHubIcon>
          </a>
        </div>
        <Row>
          <Col id="form" xs={12} sm={12} lg={12} xl={12}>
            <p className="info">Email: baileyniemiller@gmail.com</p>
            <p className="info">Cell: 701-429-8247</p>
            {/* <Form id="contact-form">
              <Form.Group controlId="formBasicHidden">
                <Form.Control type="hidden" name="contact_number" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="John Smith"
                  name="user_name"
                />
              </Form.Group>
              <Form.Group controlId="formBasicTel">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="xxx-xxx-xxxx"
                  name="user_phone"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email@gmail.com"
                  name="user_email"
                />
              </Form.Group>
              <Form.Group controlId="company">
                <Form.Label>Company</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Company"
                  name="user_company"
                />
              </Form.Group>
              <Form.Group controlId="company">
                <Form.Label>Comments</Form.Label>
                <Form.Control
                  type="textarea"
                  placeholder="Any comments or questions?"
                  id="user_comments"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                id="submitButton"
                value="send"
              >
                Submit
              </Button>
            </Form> */}
          </Col>
        </Row>
      </Container>
      <Container fluid id="footerRow">
        <p id="footerText">© Bailey Niemiller 2020</p>
      </Container>
    </div>
  );
}

export default App;
