import React from 'react';
import { Form, Col, Container, Row, Button } from "react-bootstrap";
import Icon from "react-native-vector-icons/FontAwesome";

import PageHeader from '../../components/public/PageHeader'

import bg from "../../assets/images/bg/bg_header.jpg";
import staticMap from "../../assets/images/staticmap.png";
import { stylesColors } from "../../utils/publicVariables";
import Divider from '../../components/public/Divider';

// import {
//   StaticGoogleMap,
//   Marker,
//   Path,
// } from 'react-static-google-map';
const classes = {
  inputs: {
    fontSize: '1rem',
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem'
  }
}

const { blue } = stylesColors;

const ContactPage = () => {
  return (
    <div>
      <PageHeader rootPage="Home" currentPage="Contact Us" bg={bg} />
      <section className="pt-5 pb-5">
        <Container>
          <Row className="mb-5">
            <Col xs={12} md={4} className="d-flex">
              <Icon name="location-arrow" size={80} color={blue} />
              <div className="pt-4 ml-3">
                <h5>Location:</h5>
                <p className="text-secondary">10, Ayoola Balogun Street, Ikeja, Lagos</p>
              </div>
            </Col>
            <Col xs={12} md={4} className="d-flex">
              <Icon name="envelope-o" size={80} color={blue} />
              <div className="pt-4 ml-3">
                <h5>Email:</h5>
                <p className="text-secondary">support@yabapay.com</p>
              </div>
            </Col>
            <Col xs={12} md={4} className="d-flex">
              <Icon name="volume-control-phone" size={80} color={blue} />
              <div className="pt-4 ml-3">
                <h5>Phone:</h5>
                <p className="text-secondary">+234 802 222 2222</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <h2>Contact Us</h2>
              <Divider/>
              <h6 className="text-secondary mt-3 mb-5">Reach out to us for any inquiry</h6>
              <Form>
                <Form.Group controlId="formBasicFullname">
                  <Form.Control size="lg" type="email" placeholder="Enter full name" style={classes.inputs} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control size="lg" type="email" placeholder="Enter email" style={classes.inputs} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Control as="textarea" rows="7" value="Message" />
                </Form.Group>
                <Button variant="primary" size="lg" block type="submit" style={{backgroundColor: blue}}>
                  Submit
                </Button>
              </Form>
            </Col>
            <Col>
              <img src={staticMap} class="img-fluid" alt="map"/>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default ContactPage