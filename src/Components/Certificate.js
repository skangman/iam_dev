import React, { Component } from "react";
import Zmage from "react-zmage";
// import Fade from "react-reveal";

class Certificate extends Component {
    render() {
        if (!this.props.data) return null;

        const lists = this.props.data.lists.map(function (lists) {
            let projectImage = "images/certificate/" + lists.image;

            return (
                <div key={lists.title + lists.image} className="portfolio-card">
                    <div className="item-wrap">
                        <Zmage alt={lists.title} src={projectImage} />
                        <div className="portfolio-title">{lists.title}</div>
                    </div>
                </div>
            );
        });

        return (
            <section id="certificate">
                {/* <Fade left duration={1000} distance="40px"> */}
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Certificate</h1>

                        <div id="certificate-wrapper" className="portfolio-grid">
                            {lists}
                        </div>
                    </div>
                </div>
                {/* </Fade> */}
            </section>
        );
    }
}

export default Certificate;
