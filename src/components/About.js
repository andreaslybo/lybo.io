import React from 'react';
import {Link, animateScroll as scroll} from "react-scroll";

const About = () => {
    return (
        <div id="about-me">
            <div id="about-me-inner-left"></div>
            <div id="about-me-inner-right">
                <div id="about-me-inner-box">
                    <p>
                        <b>Hei. Mitt navn er Andreas, og er en 23 år gammel utvikler bosatt i Oslo.</b>
                    </p>
                    <p>
                        Jeg vokste opp i Oppegård, i utkanten av Oslo og ble introdusert for
                        programmering av min far i en tidlig alder. Så lenge jeg kan huske har jeg hatt
                        en fascinasjon for teknologi, og det har nok bidratt til karrierevalget. Jeg er
                        en kreativ sjel med en teknisk sterk bakgrunn fra Høyskolen Kristiania, hvor jeg
                        studerer en 4-årig bachelor i intelligente systemer.
                        <br/><br/>Bakgrunnen min som IT-konsulent gjør at jeg klarer å se kundens behov
                            og skape verdi. Vil du vite hvordan jeg kan hjelpe deg?
                        <a href='mailto:andreas@lybo.io'>
                            <br/><b>Ta kontakt :)</b>
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
                        <li>React.js</li>
                        <li>HTML5 / CSS3</li>
                        <li>JavaScript / ES6</li>
                        <li>Express.js</li>
                        <li>Og flere...</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default About;