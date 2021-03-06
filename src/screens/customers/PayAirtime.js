import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button, Form } from "react-bootstrap";
import { useParams, useHistory } from 'react-router-dom';

const PayAirtime = () => {

  const { provider } = useParams();
  const { goBack } = useHistory();

  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');

  const classes = {
    icons: {
      width: '1.5rem', 
      marginBottom: '0.3rem',
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

	return (
		<>
      <section className="pt-2 pb-5">
        <Row>
          <Col xs={12} md={6}>
            <Button onClick={() => goBack()} className="mb-3">Back</Button>
            <h6 className="text-secondary text-center text-md-left">AIRTIME TOPUP</h6>
            <h2 className="text-center text-md-left">
              <img src={require(`../../assets/images/icons/${provider}-airtime.png`)} style={classes.icons} className="img-fluid mx-auto" alt={`${provider} airtime`}/>
              <span className="text-capitalize ml-2">
                {provider}
              </span> Airtime Topup</h2>
            <hr/>
            <Row className="mt-4">
              <Col xs={12} md={12}>
                <Form>
                  <Form.Row>
                    <Form.Group as={Col} controlId="phone">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control type="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Enter Phone" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="amount">
                      <Form.Label>Amount</Form.Label>
                      <Form.Control type="text" onChange={(e) => setAmount(e.target.value)} placeholder="Enter Amount" />
                    </Form.Group>
                  </Form.Row>
                  
                  <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
                  </Form.Group>

                  <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="Pay with Yabapay Wallet"
                    className="mt-5"
                  />
                </Form>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6}>
              <h6 className="text-secondary text-center text-md-left">Confirm order details</h6>
            <h2 className="text-center text-md-left">Order Summary</h2>
            <hr/>
            <Card className="p-3">
              <Row className="mb-3 mt-2">
                <Col>Service:</Col>
                <Col className="text-right">Airtime</Col>
              </Row>
              <Row className="mb-3">
                <Col>Phone:</Col>
                <Col className="text-right">{ phone || 'Required' }</Col>
              </Row>
              <Row className="mb-3">
                <Col>Provider:</Col>
                <Col className="text-right text-capitalize">{ provider }</Col>
              </Row>
              <Row className="mb-3">
                <Col>Email:</Col>
                <Col className="text-right">{ email || 'Required' }</Col>
              </Row>
              <Row className="mb-3">
                <Col>Amount:</Col>
                <Col className="text-right">{ amount || 'Required' }</Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <h6>Plan Description:</h6>
                  <small>Local calls free & STD calls free & Roaming Incoming & Outgoing calls free & 
                    300 Local & National SMS & 1 GB 3G/4G Data & Data Validity 28 day(s) & 
                    For 3G/4G user - T&C apply</small>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <div className="text-primary p-1">
                    <Row>
                      <Col><h5>Order Amount</h5></Col>
                      <Col className="text-right"><h5>₦ { amount || 0}</h5></Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <Button variant="primary" className="mt-4 mb-3" type="submit" block>
                Process now
              </Button>
            </Card>
          </Col>
        </Row>
      </section>
		</>
	);
};

export default PayAirtime;
