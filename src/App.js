import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import Certificate from "./Components/Certificate";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      theme: window.localStorage.getItem("theme") || "light"
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
    document.documentElement.setAttribute("data-theme", this.state.theme);
  }

  toggleTheme = () => {
    this.setState(
      (prevState) => ({
        theme: prevState.theme === "dark" ? "light" : "dark"
      }),
      () => {
        window.localStorage.setItem("theme", this.state.theme);
        document.documentElement.setAttribute("data-theme", this.state.theme);
      }
    );
  }

  render() {
    const { resumeData, theme } = this.state;

    return (
      <div className={`App ${theme}-theme`}>
        <Header
          data={resumeData.main}
          theme={theme}
          onThemeToggle={this.toggleTheme}
        />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Certificate data={resumeData.certificate} />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
      </div>
    );
  }
}

export default App;
