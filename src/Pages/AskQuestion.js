import React, { Component } from "react";
import { postQuestion } from "../Api/Question";
import "./AskQuestion.css";
import Nav from "./Nav";
import gomy from "../images/gomy.png";
export default class AskQuestion extends Component {
  state = {
    title: "",
    content: "",
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, content } = this.state;
    postQuestion({ title: title, content: content })
      .then((response) => {
        console.log('posté')
        alert('success!');
      })
      .catch((error) => {
        console.error(error);
        alert('Error.');
      });
  };

  render() {
    const { title, content } = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 col-lg-2">
            <Nav />
          </div>
          <div className="col-md-6 col-lg-7">
            <main role="main" className="px-4">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <h1 className="display-4 mt-4 mb-3">Avez-vous une question ?</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="title" className="h5">Problème</label>
                        <input
                          type="text"
                          className="form-control shorter-input"
                          id="title"
                          name="title"
                          value={title}
                          onChange={this.handleInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="content" className="h5">Description</label>
                        <textarea
                          className="form-control"
                          id="content"
                          name="content"
                          rows="6"
                          value={content}
                          onChange={this.handleInputChange}
                        ></textarea>
                      </div>
                      <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-secondary">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </main>
          </div>

          <div className="col-md-3 col-lg-3">
         <center><h2> Annonce </h2></center>  <h5>Centre de Formation GOMYCODE - Développez vos compétences dans le domaine de la technologie !</h5>
            <img src={gomy} alt="LogoGomyCode" style={{ width: '400px', height: 'auto' }} /> 

            <p>

Êtes-vous passionné par les nouvelles technologies et souhaitez-vous acquérir des compétences pertinentes pour réussir dans l'industrie de demain ? Ne cherchez plus ! Le Centre de Formation GOMYCODE est là pour vous aider à atteindre vos objectifs.

GOMYCODE est un leader reconnu dans le domaine de la formation en technologies de l'information et de la communication.</p>
          </div>
        </div>
      </div>
    );
  }
}
