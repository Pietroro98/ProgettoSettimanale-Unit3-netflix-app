import React from 'react';
import { Container, Row, Col, Button,  } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

const AccountSettings = () => {
  return (
    <Container fuild className='text-center bg-white'>
      <Row className="mx-4">
        <h2 className="mt-5">Account</h2>
        <hr />
        <Col xs={12} md={6} className="d-flex flex-column flex-md-row">
          <div className="me-2">
            <p className="text-secondary">MEMBERSHIP & BILLING</p>
            <Button
              type="submit"
              className="rounded-0 mb-2 bg-secondary-subtle shadow-sm px-4 text-black"
            >
              Cancel Membership
            </Button>
          </div>
          <div className="d-flex flex-column flex-md-row mx-lg-4">
            <div>
              <div className="fw-bolder">
                <p>student@strive.com</p>
              </div>
              <div className="text-secondary">
                <p>Password: *******</p>
              </div>
              <div className="text-secondary">
                <p>Phone: 321 044 1279</p>
              </div>
            </div>
            <div className="text-end ms-4 ms-md-0 mx-lg-3">
              <p><a className="text-decoration-none" href="#x">Change account email</a></p>
              <p><a className="text-decoration-none" href="#x">Change password</a></p>
              <p><a className="text-decoration-none" href="#x">Change phone number</a></p>
            </div>
          </div>
        </Col>
        <hr />
        <Container>
          <Row className="d-flex justify-content-end">
            <Col xs={5} md={2} className="d-flex flex-column flex-md-row align-items-center">
              <i className="bi bi-paypal fs-3"></i>
              <p className="fw-bold ms-2">PayPal</p>
              <h6 className="fw-bold m-0 mx-md-3">admin@strive.com</h6>
            </Col>
            <Col xs={7} md={8} className="text-end d-flex flex-column">
              <a className="text-decoration-none" href="#x">Update payment info</a>
              <a className="text-decoration-none" href="#x">Billing details</a>
              <a className="text-decoration-none" href="#x">Redeem giftcard or promo code</a>
              <a className="text-decoration-none" href="#x">Where to buy gift card?</a>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container>
          <Row>
            <Col xs={12} md={8} className="d-flex flex-column flex-md-row mb-3">
              <h4 className="text-secondary me-md-3">PLAN DETAILS</h4>
              <div className="d-flex align-items-center">
                <h4 className="fs-3 fw-bolder me-2 mx-lg-2">Premium</h4>
                <div className="border border-2 border-black fw-bolder rounded-1">
                  <span> U L T R A HD</span>
                </div>
              </div>
            </Col>
            <Col xs={12} md={4} className="text-end d-flex flex-column justify-content-end">
              <p><a className="text-decoration-none" href="#x">Change plan</a></p>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container>
          <Row>
            <Col xs={12} className="d-flex flex-column flex-md-row">
              <div className="text-secondary me-md-4"><h4>SETTINGS</h4></div>
              <div className="mx-lg-5">
                <p><a className="text-decoration-none" href="#x">Parent Controls</a></p>
                <p><a className="text-decoration-none" href="#x">Test Participation</a></p>
                <p><a className="text-decoration-none" href="#x">Manage download devices</a></p>
                <p><a className="text-decoration-none" href="#x">Activate a device</a></p>
                <p><a className="text-decoration-none" href="#x">Recent device streaming activity</a></p>
                <p><a className="text-decoration-none" href="#x">Sign out all devices</a></p>
              </div>
            </Col>
          </Row>
        </Container>
        <hr />
        <Container>
          <Row className="mb-5 pb-5">
            <Col xs={12} className="d-flex flex-column flex-md-row pb-5 mb-5">
              <div className="text-secondary col-md-3 mt-md-2"><h4>MY PROFILE</h4></div>
              <div>
                <Row>
                  <Col xs={12} className="d-flex justify-content-lg-between p-0">
                    <div className="d-flex align-items-center mt-3 mb-5">
                      <img width="70" src="assets/img/avatar.png" alt="" />
                      <h2 className="fw-bolder ms-3 me-lg-5">Strive Student</h2>
                    </div>
                    <div className="text-end ms-lg-5">
                      <p className="mb-0"><a className="text-decoration-none" href="#x">Manage profiles</a></p>
                      <p><a className="text-decoration-none" href="#x">Add profile email</a></p>
                    </div>
                  </Col>
                  <Row>
                    <Col>
                      <p><a className="text-decoration-none" href="#x">Language</a></p>
                      <p><a className="text-decoration-none" href="#x">Playback setting</a></p>
                      <p><a className="text-decoration-none" href="#x">Subtitle appearance</a></p>
                    </Col>
                    <Col className="ms-lg-5">
                      <p><a className="text-decoration-none" href="#x">Viewing activity</a></p>
                      <p><a className="text-decoration-none" href="#x">Ratings</a></p>
                    </Col>
                  </Row>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
};

export default AccountSettings;
