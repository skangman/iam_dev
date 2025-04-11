import React, { Component } from "react";
import Zmage from "react-zmage";
// import Fade from "react-reveal";

let id = 0;
class Certificate extends Component {
    render() {
        if (!this.props.data) return null;

        const lists = this.props.data.lists.map(function (lists) {
            let projectImage = "images/certificate/" + lists.image;

            return (
                <div key={id++} className="columns portfolio-item">
                    <div className="item-wrap">
                        <Zmage alt={lists.title} src={projectImage} />
                        <div style={{ textAlign: "center" }}>{lists.title}</div>
                    </div>
                </div>
            );
        });

        return (
            <section id="portfolio">
                {/* <Fade left duration={1000} distance="40px"> */}
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Certificate</h1>

                        <div
                            id="portfolio-wrapper"
                            className="bgrid-quarters s-bgrid-thirds cf"
                        >
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
