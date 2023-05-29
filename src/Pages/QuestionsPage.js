// import React, { Component } from "react";
// import { getAllQuestions, deleteQuestion } from "../Api/Question";
// import { Link } from "react-router-dom";
// import Nav from "./Nav";
// import dunnoImage from "../images/dunno.png";

// class QuestionsPage extends Component {
//   state = {
//     questions: [],
//     isLoading: true,
//   };

//   componentDidMount() {
//     this.fetchQuestions();
//   }

//   fetchQuestions = () => {
//     getAllQuestions()
//       .then((response) => {
//         this.setState({
//           questions: response.data["hydra:member"],
//           isLoading: false,
//         });
//       })
//       .catch((error) => {
//         console.error("Error fetching questions:", error);
//       });
//   };

//   deleteQuestionById = (id) => {
//     deleteQuestion(id)
//       .then(() => {
//         // Question deleted successfully, update the state or perform any necessary actions
//         console.log(`Question with ID ${id} deleted.`);
//         // Refresh the questions list after deletion
//         this.fetchQuestions();
//       })
//       .catch((error) => {
//         // Handle any errors that occurred during the deletion process
//         console.error(`Error deleting question with ID ${id}:`, error);
//       });
//   };

//   renderQuestions() {
//     return (
//       <div className="container">
//         {this.state.questions.map((question) => (
//           <div className="card mb-3" key={question.id}>
//             <div className="card-body">
//               <h5 className="card-title">{question.title}</h5>
//               <p className="card-text">{question.description}</p>
//               <Link to={`/questions/${question.id}`} className="btn btn-primary">
//                 View Question
//               </Link>
//               <button
//                 onClick={() => this.deleteQuestionById(question.id)}
//                 className="btn btn-danger"
//               >
//                 Delete Question
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     );
//   }

//   render() {
//     const { isLoading } = this.state;

//     return (
//       <div className="container-fluid">
//         <div className="row">
//           <Nav />

//           <main role="main" className="col-md-9 ml-sm-auto col-lg-6 px-4">
//             <h1 className="mt-3">Top Questions</h1>

//             {isLoading ? (
//               <div className="loading-spinner"></div>
//             ) : (
//               this.renderQuestions()
//             )}
//           </main>

//           <img
//             style={{ width: "400px", height: "400px", marginLeft: "50px", marginTop: "50px" }}
//             src={dunnoImage}
//             alt="Loading"
//             className="spinner-image"
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default QuestionsPage;







// // // import React, { Component } from "react";
// // // import { getAllQuestions } from "../Api/Question";
// // // import Nav from "./Nav";

// // // export default class QuestionsPage extends Component {
// // //   state = {
// // //     questions: [],
// // //   };
// // //   componentDidMount = () => {
// // //     getAllQuestions().then((response) => {
// // //       this.setState({
// // //         questions: response.data["hydra:member"],
// // //       });
// // //       console.log("title : " + this.state.questions);
// // //     });
// // //   };
// // //   render() {
// // //     return (
// // //       <div className="container-fluid">
// // //         <div className="row">
// // //           <Nav />
// // //           <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
// // //             <h1 className="mt-3">Table of users</h1>
// // //             <table className="table mt-2 table-bordered">
// // //               <tr className="p-2">
// // //                 <th>Id</th>
// // //                 <th>Name</th>
// // //                 <th>Content</th>
// // //                 <th>createdAt</th>
// // //                 <th>View</th>
// // //               </tr>
// // //               {this.state.questions.map((e) => (
// // //                 <tr className="p-2">
// // //                   <td className="py-2">{e.id}</td>
// // //                   <td className="py-2">{e.title}</td>
// // //                   <td className="py-2">{e.content}</td>
// // //                   <td className="py-2">{e.createdAt}</td>
// // //                   {/* <Link to={'/users/'+e.id} className="btn btn-primary  ">View</Link> */}
// // //                   {/* <td><button onClick={()=>this.viewUser(e)} className="btn btn-outline-primary">View</button></td>
// // //                       <td><button onClick={()=>this.deleteUser(e)} className="btn btn-outline-danger">Delete</button></td> */}
// // //                 </tr>
// // //               ))}
// // //             </table>
// // //           </main>
// // //         </div>
// // //       </div>
// // //     );
// // //   }
// // // }