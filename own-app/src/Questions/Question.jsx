import { useState, useEffect } from "react";
import { MathJax } from "better-react-mathjax";
import Styles from "./Questions.module.css";
import { useNavigate } from "react-router-dom";

const Questions = () => {
  
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [answer, setAnswer] = useState("");
  const [solutionArr,setSolutionArr] = useState([]);
  const [questionArr,setquestionArr] = useState([]);
  const navigate= useNavigate();


  useEffect(() => {
    const fetchQuestions = async () => {
      const questionIDs = [
        "AreaUnderTheCurve_901",
        "BinomialTheorem_901",
        "DifferentialCalculus2_901"
      ];

      try {
        const promises = questionIDs.map(async (id) => {
          const response = await fetch(
            `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${id}`
          );
          const json = await response.json();
          console.log(json);
          return json[0].Question;
        });

        const questions = await Promise.all(promises);
        setQuestions(questions);
        // setquestionArr(questions);
        
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Error fetching questions: " + error.message);
      }
    };

    fetchQuestions();
  }, []);

  
  const handleSubmit = () => {
    // Save the answer to local storage
    // `Index of answer_${currentQuestionIndex}:${answer}`
    solutionArr.push(answer);
    setSolutionArr(solutionArr);
    localStorage.setItem("answer", JSON.stringify(solutionArr));
    setAnswer("");
    
    questionArr.push(questions);
    setquestionArr(questionArr);
    localStorage.setItem("question", JSON.stringify(questionArr));
    navigate("/ans")
  };
  
  
  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };
  
  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex === 0 ? questions.length - 1 : prevIndex - 1
    );
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex === questions.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  if (loading) {
    return <div style={{ textAlign: "center", marginTop: "3rem" }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ textAlign: "center", marginTop: "3rem" }}>{error}</div>;
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.question}>
        <h3 style={{ color: "orangered" }}>Questions:</h3>
        <MathJax>{questions[currentQuestionIndex]}</MathJax>
        
        <textarea
          value={answer}
          onChange={handleAnswerChange}
          className={Styles.answer}
          placeholder="Enter your solution here..."
          rows="20"
          cols="40"
        />
        <button
          className={Styles.submitBtn}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <div className={Styles.buttons}>
        <button onClick={handlePreviousQuestion}>Previous</button>
        <button onClick={handleNextQuestion}>Next</button>
      </div>
    </div>
  );
};

export default Questions;
