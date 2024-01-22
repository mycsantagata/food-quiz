import { IpcNetConnectOpts } from 'net'
import React from 'react'
import Button from './Button';

interface IProps {
    finalScore: number;
    restartQuiz: () => void;
}

enum SkillLevel {
    Basic = 'Basic',
    Intermediate = 'Intermediate',
    Advanced = 'Advanced',
    Master = 'Master',
  }

const Result: React.FC<IProps> = ({finalScore, restartQuiz}) =>{

let skillLevel: SkillLevel;

  if (finalScore <= 3) {
    skillLevel = SkillLevel.Basic;
  } else if (finalScore <= 7) {
    skillLevel = SkillLevel.Intermediate;
  } else if (finalScore <= 9) {
    skillLevel = SkillLevel.Advanced;
  } else {
    skillLevel = SkillLevel.Master;
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className="text-3xl font-bold mt-8 mb-10">Quiz Completed!</h1>
      <p className="text-lg mb-10">Your Score: <span className='font-bold'>{finalScore}</span></p>
      <p className="text-lg mb-10">Skill level: <span className='font-bold'>{skillLevel}</span></p>
      <div className="">
        <Button text="Restart" color="blue" onClick={restartQuiz}/>
      </div>
    </div>
  );
}

export default Result