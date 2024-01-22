import React, { useState } from 'react'
import Button from './Button';

interface IProps {
    questions:{
        id: number
        question: string;
        options: string[];
        correctAnswer: number;     
    }[];
    onClose: (finalScore: number) => void;
    onChange:(index: number) => void;
}

const PageQuestions: React.FC<IProps> = ({questions, onClose, onChange}) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));

    const currentQuestion = questions[currentIndex];

    const navigate = (direction: ("next"|"prev")) =>{
      if(direction === "next" && currentIndex+1 > questions.length-1){
        calculateTotaleScoreAndClose();
      }else if(direction === "next"){
        setCurrentIndex(currentIndex+1);
        onChange(currentIndex+1);
      }else{
        setCurrentIndex(currentIndex-1);
        onChange(currentIndex-1);
      }
    }

    const handleAnswerChange = (selectedOption: number) => {
      const newAnswers = [...userAnswers];
      newAnswers[currentIndex] = selectedOption;
      setUserAnswers(newAnswers);
    };

    const calculateTotaleScoreAndClose = () =>{
      let totalScore = 0;

      userAnswers.forEach((answer, index)=>{
        if(answer != null && answer === questions[index].correctAnswer){
          totalScore++;
        }
      });
      onClose(totalScore);
    };
    
    return (
      <div>
        <h1 className="text-3xl font-bold">{currentQuestion.question}</h1>
        <hr className="my-4 border-l-1 border-gray-600 shadow-md" />
        <div>
        <form>
          {currentQuestion.options.map((option, index) => (
            <div key={index} className="p-6">
              <input
                type="radio"
                id={`option-${index}`}
                name="answer"
                value={index}
                checked={userAnswers[currentIndex] === index}
                onChange={() => handleAnswerChange(index)}
                className="radioform-radio h-4 w-4 text-blue-500 border-blue-500 focus:ring-blue-300"
               />
              <label htmlFor={`option-${index}`} className="ml-2 text-2xl">
                {option}
              </label>
            </div>
          ))}
        </form>
        </div>
        <div className='justify-between flex'>
          <Button 
          text="Previous" 
          color={currentIndex === 0?'gray':'blue'} 
          disabled={currentIndex === 0}
          onClick={() => navigate("prev")}
          />   
          <Button 
          text={currentIndex === questions.length-1? 'Close': 'Next'} 
          color='blue' 
          onClick={() =>navigate("next")}
          />
        </div>
        
      </div>
    )
}

export default PageQuestions