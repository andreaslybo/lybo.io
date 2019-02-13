import React from 'react';

// Sections
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Work from './components/Work';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import './css/body.css';
import './css/shapes.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Main/>
            <About/>
            <Work/>
            <ContactForm/>
            <Footer/>
        </div>
    );
}
export default App;