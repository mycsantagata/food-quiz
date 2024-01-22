import React, {useState} from 'react';
import QuizIntro from './QuizIntro';
import questionsData from '../json/questions.json';
import PageQuestions from './PageQuestions';
import Result from './Result';
import ProgressBar from './ProgressBar';

const QuizIndex: React.FC = () => {
  const [finalScore, setFinalScore] = useState<number|null>(null);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);
  const [progressPercentage, setprogressPercentage] = useState<number|null>(null);

  const startQuiz = () => {
    setQuizStarted(true);
    setprogressPercentage(0);
  }

  const handleQuizComplete = (finalScore: number) => {
    setQuizStarted(false);
    setFinalScore(finalScore);
    setprogressPercentage(null);
  };

  const changeProgressBar = (index: number) => {
    setprogressPercentage((index/ questionsData.length) * 100);
  }

  const restart = () => {
    setQuizStarted(false);
    setFinalScore(null);
  };
  
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-gray-800" >
      <h1 className="text-5xl font-bold text-white mb-16">
      Food Quiz
      </h1>
      {progressPercentage != null && <ProgressBar progress={progressPercentage}/>}
      <div className="bg-blue-100 p-8 rounded-md  min-h-[60vh] border border-black sm:w-full md:w-2/5">
        {!quizStarted && finalScore == null && <QuizIntro onStartQuiz={startQuiz}/>}
        {quizStarted &&<PageQuestions onChange={changeProgressBar} onClose={handleQuizComplete} questions={questionsData}/>}
        {finalScore != null && <Result restartQuiz={restart} finalScore={finalScore}/>}
      </div>
    </div>
  );
}

export default QuizIndex;