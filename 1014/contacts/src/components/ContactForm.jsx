import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const dispatch = useDispatch();
  const addContact = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { name, mobile } });
  };

  return (
    <Form onSubmit={addContact}>
      {/* controlId는 그냥 id속성임 */}
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Number"
          onChange={(e) => setMobile(e.target.value)}
        />
      </Form.Group>
      <Button variant="dark" type="submit" style={{ width: "100%" }}>
        Create
      </Button>
    </Form>
  );
};

export default ContactForm;
