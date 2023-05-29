import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Nav";
import { useParams } from "react-router-dom";
import "./QuestionDetailsPage.css";

function QuestionDetailsPage() {
  const [question, setQuestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://127.0.0.1:8000/api/questions/${id}`)
      .then((response) => {
        setQuestion(response.data);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/questions/${id}/answers`)
      .then((response) => {
        setAnswers(response.data["hydra:member"]);
      });
  }, [id]);

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:8000/api/answers", {
        content: answer,
        question: `/api/questions/${id}`,
      })
      .then((response) => {
        setAnswers([...answers, response.data]);
        setAnswer("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteAnswer = (answerId) => {
    axios
      .delete(`http://127.0.0.1:8000/api/answers/${answerId}`)
      .then(() => {
        setAnswers(answers.filter((ans) => ans.id !== answerId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getColor = (index) => {
    const colors = ["#E5F3FF", "#FFF9D9", "#DDFCEC", "#FFE6F0", "#F8E4FF"];
    return colors[index % colors.length];
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <Nav />
        </div>
        <div className="col-9">
          {loading ? (
            <div className="loading-spinner"></div>
          ) : (
            <div className="question-container">
              <h1>{question.title}</h1>
              <p>{"- " + question.content}</p>
              <h2>Answers</h2>
              <h3>Total number of answers: {answers.length}</h3>
              <div className="card-row">
                {answers.map((ans, index) => (
                  <div
                    key={ans.id}
                    className="card mb-3"
                    style={{ backgroundColor: getColor(index) }}
                  >
                    <div className="card-body">{ans.content}</div>
                    <div className="button-group">
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDeleteAnswer(ans.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="form-container">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="answer">Add an answer:</label>
                    <div className="input-container">
                      <textarea
                        className="form-control"
                        id="answer"
                        name="answer"
                        rows="4"
                        value={answer}
                        onChange={handleAnswerChange}
                      ></textarea>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
                <br></br>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestionDetailsPage;
