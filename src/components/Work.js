import React from 'react';

class Work extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: "left"
        };
    }

    // Switch side
    changeWorkEducation = () => {
        if (this.state.clicked === "right") {
            this.setState({clicked: "left"})
        } else {
            this.setState({clicked: "right"})
        }
    }

    // Render
    renderContent() {
        if (this.state.clicked === "left") {
            return (
                <div id="work-container">
                    <div className="work-education" id="education">
                        <div id="education-left"></div>
                        <div id="education-right">
                            <h3>Bachelor i informasjonsteknologi - Intelligente Systemer</h3>
                            <p>Hensikten med intelligente systemer er å automatisere, forenkle og se
                                sammenhenger i gjøremål innen forbrukerteknologi og områder som mobil-betaling,
                                helse, trafikk, sikkerhet og overvåkning.</p>
                            <a
                                href="https://www.westerdals.no/en/programme/intelligent-systems/"
                                className="degree">Les mer om studiet mitt</a>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div id="work-container">
                    <div className="work-education" id="work">
                        <div id="work-left">
                            <ul>
                                <li>Aug 2018: Solution Developer i Avanade Norway.</li>
                                <li>2018 - 2018: Studentveileder i informasjonssikkerhet og webprosjekt.</li>
                                <li>2017 - 2018: Studentveileder i introduksjon til OOP og kreativt webprosjekt.</li>
                                <li>2014 - 2015: Operativ vaktsoldat og sambandsmann i Hans Majestet Kongens Garde.</li>
                                <p></p>
                            </ul>
                            <a href="https://www.linkedin.com/in/andreas-lybo-374754106/" class="degree">Les mer på linkedin</a>
                        </div>
                        <div id="work-right"></div>
                    </div>
                </div>
            );
        }
    }

    // Render work and education buttons depending on 'clicked' in state.
    renderButton() {
        if (this.state.clicked === "right") {
            return (
                <div>
                    <a className="we-button button-education" onClick={this.changeWorkEducation}>Utdanning</a>
                    <a
                        className="we-button button-work selected"
                        onClick={this.changeWorkEducation}>Jobb</a>
                </div>
            );
        } else {
            return (
                <div>
                    <a
                        className="we-button button-education selected"
                        onClick={this.changeWorkEducation}>Utdanning</a>
                    <a className="we-button button-work" onClick={this.changeWorkEducation}>Jobb</a>
                </div>
            );
        }
    }

    render() {
        return (
            
            <div id="work-main">
                <h1>Jobb og utdanning</h1>
                <div id="work-buttons">
                    {this.renderButton()}
                </div>
                {this.renderContent()}
            </div>
        );
    }
}

export default Work;