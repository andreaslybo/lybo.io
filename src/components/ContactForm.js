import React from 'react';

class ContactForm extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         name: '',
         email: '',
         message: '',
         sent: false
      }
   }

   contact = () => {
      if (this.state.email === '' || this.state.name === '') {
         console.log("Need to fill out form correctly");
      }
   }

   onUserSubmit = () => {
      if (this.validateForm() === true) {
         this.setState({ sent: true }, () => this.renderMessageSent());
      } else {
         this.setState({ sent: false }, () => this.renderMessageSent());
      }
   }

   renderMessageSent = () => {
      if ( this.state.sent === true ) {
         return <div className="submit-message">Meldingen ble sendt.</div>
      }
   }

   // Returns true if form is valid
   validateForm = () => {
      if (this.state.name === '' || this.state.email === '' || this.state.message === '') {
         return false;
      } else {
         return true;
      }
   }

   sendMessage = () => {
      /*const mailjet = require('node-mailjet')
      .connect('2c02c2056d7bff20d2266b40c3f00209', '39eeabd2535a6d0abf84e1334e09a83e')
      .post("send", {
         url: 'api.mailjet.com', version: 'v3'
      })
      .request({
         FromEmail: this.state.email,
         FromName: this.state.name,
         Subject: "New e-mail from website.",
         Recipients: [{ 'Email': 'andreas_lybo@hotmail.com' }]
      });*/
   }

   handleSendMessage = () => {
      if (this.validateForm === true) {
         this.sendMessage();
      } else {
         console.log("An error occured when trying to send the message...");
      }
   }

   render() {
      return (
         <form action="http://henrelis.no/email-api.php" method="POST">
         <section className="contact-form">
            <div className="contact-form-container">
            { this.renderMessageSent() }
            <h1>Kontakt meg</h1>
               <div className="email-name-section">
                  <input type="email" 
                     name="email"
                     id="contact-email" 
                     onChange={ e => this.setState({ email: e.target.value }) }  
                     placeholder="E-post:">
                  </input>

                  <div className="contact-form-spacer"></div>
                  <input type="name"
                     name="name" 
                     id="contact-name" 
                     onChange={ e => this.setState({ name: e.target.value }) } 
                     placeholder="Navnet ditt:">
                  </input>

               </div>
               <div className="message-section">
                  <textarea id="contact-text" 
                     placeholder="Din melding:"
                     name="message">
                  </textarea>
               </div>
               <button className="contact-btn" onClick={ this.onUserSubmit }>Send</button>
            </div>
         </section>
         </form>
      );
   }
}

export default ContactForm;