import React from "react";
import "../css/style.css";

function Contact() {
  return (
    <div className="contact-conatiner">
      <h1 className="contactHeading">Get in Touch</h1>
      <p className="contactData">
        We'd love to hear from you! Whether you have any questions or feedback,
        Please feel free to connect with us for any suggestions. We're here to
        support your One's culinary journey.
      </p>
      <p className="contactData">
        You can reach us through the following channels:
      </p>
      <ul className="ItemList">
        <li>
          <strong>Email:</strong>
          <a href="mailto:support@recipebook.com">support@recipebook.com</a>
        </li>

        <li>
          <strong>Phone:</strong> +1 (555) 123-4567
        </li>
        <li>
          <strong>Address:</strong> 220 Ira Needles Blvd, kitchener
        </li>
      </ul>
      <p className="contactData">
        Or, use the contact form on our website to send us a message directly.
        We'll respond as soon as possible.
      </p>
    </div>
  );
}

export default Contact;
