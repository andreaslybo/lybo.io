import React from 'react';

class ContactForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         email: '',
         message: ''
      }
   }

   contact = () => {
      if (this.state.email === '' || this.state.name === '') {
         console.log("Need to fill out form correctly");
      }
   }

   render() {
      return (
         <section className="contact-form">
            <div className="contact-form-container">
            <h1>Kontakt meg</h1>
               <div className="email-name-section">
                  <input type="email" id="contact-email" placeholder="E-post:"></input>
                  <div className="contact-form-spacer"></div>
                  <input type="name" id="contact-name" placeholder="Navnet ditt:"></input>
               </div>
               <div className="message-section">
                  <textarea id="contact-text" placeholder="Din melding:"></textarea>
               </div>
               <button className="contact-btn">Send</button>
            </div>
         </section>
      );
   }
}

export default ContactForm;