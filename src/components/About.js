import React from 'react';

const About = () => {
    return (
        <div id="about-me">
            <div id="about-me-inner-left"></div>
            <div id="about-me-inner-right">
                <div id="about-me-inner-box">
                    <p>
                        <b>Hei. Mitt navn er Andreas, og er en 24 år gammel utvikler bosatt i Nordre Follo.</b>
                    </p>
                    <p>
                        Jeg vokste opp i Nordre Follo, i utkanten av Oslo og ble introdusert for
                        programmering av min far i en tidlig alder. Så lenge jeg kan huske har jeg hatt
                        en fascinasjon for teknologi, og det har nok bidratt til karrierevalget. Jeg er
                        en kreativ sjel med en teknisk sterk bakgrunn fra Høyskolen Kristiania, hvor jeg
                        fullfører en fireårig bachelorgrad i intelligente systemer.
                        <br/><br/>Lurer du på hvordan du kan digitalisere og forbedre forretningsprosesser?
                        <a href='mailto:andreas@lybo.io'>
                            <br/><b>Ta kontakt</b>
                        </a>
                    </p>

                    <p>
                        <b>Tjenester</b>
                    </p>
                    <p>Jeg leverer skreddersydde løsninger til deg basert på dine behov og krav. Jeg
                        bruker moderne JavaScript-rammeverk til å bygge løsningen, som sørger for rask
                        lastetid og skalerbarhet. Her er noen av teknologiene jeg bruker:
                    </p>
                    <ul>
                        <li>Angular</li>
                        <li>React</li>
                        <li>HTML5 / CSS3</li>
                        <li>JavaScript / ES6</li>
                        <li>Og flere...</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;