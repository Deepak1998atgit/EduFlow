import React from "react";
// import { Typography } from "@material-tailwind/react";
// import { Switch } from "@material-tailwind/react";

type QuizzesSwitchProps = {
  addQuiz: boolean;
  setAddQuiz: (addQuiz: boolean) => void;
};

const QuizSwitch: React.FC<QuizzesSwitchProps> = ({ addQuiz, setAddQuiz }) => {
  const handleSwitchChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const isChecked = event.target.checked;
    setAddQuiz(isChecked);
  };

  return (
    <div className="switch-container">
    <label className="switch">
      <input type="checkbox" checked={addQuiz} onChange={handleSwitchChange} />
      <span className="slider">  Add Quiz? </span>
    </label>
    <span className="switch-label"> You'll be able to add quizzes for the lesson.</span>
  </div>
    
  );
};

export default QuizSwitch;
