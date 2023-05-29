import React, { Component } from "react";
import { getAllQuestions, deleteQuestion } from "../Api/Question";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Avatar from "./Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class QuestionsPage extends Component {
  state = {
    questions: [],
    isLoading: true,
  };

  componentDidMount() {
    this.fetchQuestions();
  }

  fetchQuestions = () => {
    getAllQuestions()
      .then((response) => {
        this.setState({
          questions: response.data["hydra:member"],
          isLoading: false,
        });
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  };

  deleteQuestionById = (id) => {
    deleteQuestion(id)
      .then(() => {
        console.log(`Question with ID ${id} deleted.`);
        this.fetchQuestions();
      })
      .catch((error) => {
        console.error(`Error deleting question with ID ${id}:`, error);
      });
  };

  renderQuestions() {
    const { questions } = this.state;
    const questionRows = [];
  
    questions.forEach((question, index) => {
      questionRows.push(
        <div className="card mb-3" key={question.id}>
          <div className="card-body">
            <div className="d-flex align-items-center">
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className="mr-3" />
  
              <div>
                <h5 className="card-title">{question.title}</h5>
                <p className="card-text">{question.description}</p>
                <Link to={`/questions/${question.id}`} className="btn btn-secondary me-md-2">
                  <FontAwesomeIcon icon={faEye} /> Voir
                </Link>
                <button
                  onClick={() => this.deleteQuestionById(question.id)}
                  className="btn btn-danger me-md-2"
                >
                  <FontAwesomeIcon icon={faTrashAlt} /> Supprimer
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  
    return <div className="container">{questionRows}</div>;
  }
  

  render() {
    const { questions, isLoading } = this.state;

    return (
      <div className="container-fluid">
        <div className="row">
          <Nav />

          <main role="main" className="col-md-9 ml-sm-auto col-lg-6 px-4">
            <h1 className="mt-3">Liste des questions posées</h1>
            <h2 className="mb-4">Nombre total de questions : {questions.length}</h2>

            {isLoading ? <div className="loading-spinner"></div> : this.renderQuestions()}
          </main>
        </div>
      </div>
    );
  }
}

export default QuestionsPage;
