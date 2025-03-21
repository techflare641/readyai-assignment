import React, { useState } from 'react';
import "./index.css";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-item accordion-border">
      <div className="accordion-header" onClick={toggle}>
        <h3>{title}</h3>
        {isOpen ? <img src='/images/minus-circle.png' /> : <img src='/images/plus-circle.png' />}
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="faq-container">
      <div className='faq-section-header'>
        Frequently asked questions
      </div>
      <div className='faq-section-description'>
        Everything you need to know about the product and billing.
      </div>

      <div className='faq-questions'>
        <Accordion 
          title="What is the Personas API?" 
          content="The character database is vast, with thousands of character prompts generated for various use cases." 
        />
        <Accordion 
          title="How large is the character database?" 
          content="The character database is vast, with thousands of character prompts generated for various use cases." 
        />
        <Accordion 
          title="Can I see a demo of the Personas API before integrating it?" 
          content="Yes, you can request a demo to explore the features and functionality of the Personas API." 
        />
        <Accordion 
          title="How do I get started with the Personas API?" 
          content="To get started, sign up for an API key and integrate the endpoints into your application." 
        />
        <Accordion 
          title="How does billing work?" 
          content="Billing is based on the number of API calls made per month. You can choose a plan that suits your needs." 
        />
        <Accordion 
          title="How do I get started with the Personas API?" 
          content="Simply register on our platform, obtain your API key, and start making requests to the API." 
        />
      </div>

      <div className="contact-section">
        <div className='contact-section-header'>Still have questions?</div>
        <div className='contact-section-description'>Can't find the answer you're looking for? Please chat to our friendly team.</div>
        <button className="contact-button">Contact us</button>
      </div>
    </div>
  );
};

export default FAQ;