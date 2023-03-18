import { useState, useEffect } from "react";
import { MathJax } from "better-react-mathjax";
import Styles from "./Questions.module.css";
import { Button } from "@mui/material";
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
        
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Error fetching questions: " + error.message);
      }
    };

    fetchQuestions();
  }, []);

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

  const handleSubmit = () => {
    // Save the answer to local storage
    // `Index of answer_${currentQuestionIndex}:${answer}`
    solutionArr.push(answer);
    setSolutionArr(solutionArr);
    localStorage.setItem("answer", JSON.stringify(solutionArr));
    setAnswer("");
    
    questionArr.push(answer);
    setquestionArr(questionArr);
    localStorage.setItem("question", JSON.stringify(questionArr));
    navigate("/ans")
};


  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
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
        <h3 style={{ color: "yellowgreen" }}>Questions:</h3>
        <MathJax>{questions[currentQuestionIndex]}</MathJax>
        <textarea
          value={answer}
          onChange={handleAnswerChange}
          className={Styles.answer}
          placeholder="Enter your solution here..."
          rows="20"
          cols="40"
        />
        <Button
          className={Styles.submit}
          sx={{
            marginLeft: "60%",
            marginRight: "0rem",
            marginTop: "22rem",
            zIndex: "2",
            position: "absolute",
            backgroundColor: "#04041e",
            color: "#fff"
          }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>

      <div className={Styles.buttons}>
        <button onClick={handlePreviousQuestion}>Previous</button>
        <button onClick={handleNextQuestion}>Next</button>
      </div>
    </div>
  );
};

export default Questions;
