import React, { useState } from "react";
import { useHistory } from "react-router";
import "../../styles/Page.css";
import "../../styles/EditContact.css";

import { Form, Button } from "react-bootstrap";

const NewLead = ({ api, stages, setRefresh }) => {
  const history = useHistory();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [contact_method, setContactMethod] = useState("");

  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [zip_code, setZipCode] = useState("");
  const [website_url, setWebsiteUrl] = useState("");

  const [stage_id, setStage] = useState("");
  const [deal_size, setDealSize] = useState("");
  const [follow_up_date, setFollowUpDate] = useState("");
  const [notes, setNotes] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const apiToken = window.localStorage.getItem("api_token");
    const staff_id = window.localStorage.getItem("staff_id");
    api
      .post(
        `/contacts`,
        {
          first_name,
          last_name,
          title,
          phone,
          email,
          contact_method,
          company,
          address,
          address2,
          city,
          zip_code,
          website_url,
          stage_id,
          deal_size,
          follow_up_date,
          notes,
          staff_id,
        },
        { headers: { token: apiToken } }
      )
      .then((res) => {
        setRefresh(true);
        alert("Lead successfully added");
        history.push("/Dashboard");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <div className="container">
      <h5>New Lead:</h5>
      <div className="form-container">
        <Form>
          <hr />
          <div className="input-container">
            <p>First name:</p>
            <Form.Control
              type="text"
              name="first-name"
              value={first_name}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <p>Last name:</p>
            <Form.Control
              type="text"
              name="last-name"
              value={last_name}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <p>Title:</p>
            <Form.Control
              type="text"
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <p>Phone:</p>
            <Form.Control
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <p>Email:</p>
            <Form.Control
              type="text"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <p>Contact method:</p>
            <Form.Control
              as="select"
              name="contact-method"
              value={contact_method}
              onChange={(e) => {
                setContactMethod(e.target.value);
              }}
            >
              <option value="">Select contact method</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
            </Form.Control>
          </div>

          <h5>Company details: </h5>
          <hr />
          <div className="input-container">
            <p>Company:</p>
            <Form.Control
              type="text"
              name="company"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <p>Address:</p>
            <Form.Control
              type="text"
              name="address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <p>Address 2:</p>
            <Form.Control
              type="text"
              name="address2"
              value={address2}
              onChange={(e) => {
                setAddress2(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <p>City:</p>
            <Form.Control
              type="text"
              name="city"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <p>Zip code:</p>
            <Form.Control
              type="text"
              name="zip_code"
              value={zip_code}
              onChange={(e) => {
                setZipCode(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <p>Website url:</p>
            <Form.Control
              type="text"
              name="website-url"
              value={website_url}
              onChange={(e) => {
                setWebsiteUrl(e.target.value);
              }}
            />
          </div>

          <hr />
          <div className="input-container">
            <p>Stage:</p>
            <Form.Control
              as="select"
              name="stage"
              value={stage_id}
              onChange={(e) => {
                setStage(e.target.value);
              }}
            >
              <option value="">Select a stage</option>
              {stages.map((stage) => (
                <option key={stage.id} value={stage.id}>
                  {stage.stage}
                </option>
              ))}
            </Form.Control>
          </div>
          <div className="input-container">
            <p>Deal size:</p>
            <Form.Control
              type="text"
              name="deal-size"
              value={deal_size}
              onChange={(e) => {
                setDealSize(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <p>Follow Up Date:</p>
            <Form.Control
              type="date"
              name="follow-up-date"
              value={follow_up_date}
              onChange={(e) => {
                setFollowUpDate(e.target.value);
              }}
            />
          </div>
          <div className="input-container notes-textarea">
            <p>Notes:</p>
            <Form.Control
              as="textarea"
              name="notes"
              rows={10}
              value={notes}
              onChange={(e) => {
                setNotes(e.target.value);
              }}
            />
          </div>
          <div className="buttons">
            <Button type="submit" onClick={onSubmit} className="accept-button">
              Accept
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default NewLead;
