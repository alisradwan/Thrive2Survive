import React, { useState } from "react";
import emailjs from "emailjs-com";
import { validateEmail } from "../../utils/helpers";

// import react-bootstrap components
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// define ContactForm component
function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formMessage, setFormMessage] = useState("");

  // adds error messages to the form
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setFormMessage("Your email is invalid.");
      } else {
        setFormMessage("");
      }
    } else {
      if (!e.target.value.length) {
        const name = e.target.name;
        setFormMessage(
          `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`
        );
      } else {
        setFormMessage("");
      }
    }

    if (!formMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  // sends the email or surfaces an error on submission
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm().then(
      function (response) {
        console.log(response.text);
        setFormMessage("Message sent!");
      },
      function (error) {
        console.log(error.text);
        setFormMessage("Your message couldn't be sent.");
      }
    );
  }

  return (
    <Form onSubmit={sendEmail} id="contactForm">
      <Form.Group controlId="name">
        <Form.Label>Agency Name</Form.Label>
        <Form.Control
          required
          name="name"
          placeholder="..."
          onBlur={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Agency Type/Service Offered</Form.Label>
        <Form.Control
          required
          name="Agency Type/Service Offered"
          type="Agency Type/Service Offered"
          placeholder="..."
          onBlur={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="Phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          required
          name="Phone"
          placeholder="(201) 555-0123"
          onBlur={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          name="email"
          type="email"
          placeholder="...."
          onBlur={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>
          Table accommodations needed-space size, electricity etc
        </Form.Label>
        <Form.Control
          required
          name="Table accommodations needed-space size, electricity etc"
          as="textarea"
          rows="5"
          placeholder="..."
          onBlur={handleChange}
        />
      </Form.Group>

      {formMessage && <p className="form-message">{formMessage}</p>}

      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default ContactForm;
