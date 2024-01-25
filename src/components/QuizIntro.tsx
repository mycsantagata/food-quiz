import React from 'react'
import Button from './Button';

interface IProps {
    onStartQuiz: () => void;
  }

const QuizIntro: React.FC<IProps> = ({onStartQuiz}) =>{

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Quiz sul Cibo',
        text: 'Testa le tue conoscenze sul cibo e il suo impatto con questo quiz coinvolgente!',
        url: window.location.href,
      });
    } else {
      alert('Questa funzionalità non è supportata dal tuo browser. Puoi condividere manualmente la pagina!');
    }
  };

  return(
      <div>
        <h1 className="text-3xl font-bold mb-8">Welcome to the food quiz!</h1>
        <p className="text-lg mb-12">
        Test your knowledge about food, exploring topics ranging from environmental sustainability
        to food choices and their impact on personal health.
        </p>

        <p className="text-lg mb-12">The quiz consists of 10 multiple-choice questions, there will be a total of 4 possible answers,
            at the end you will see your total score with the level of 'skill' achieved.
          You can share the quiz with your friends via the button at the top right.</p>

        <p className="text-lg mb-12">Put yourself to the test and challenge your friends!</p>

        <Button text="Start Quiz" color='blue' onClick={onStartQuiz} addStyle='mr-4'/>
        <Button text="Share on Social" color='gray' onClick={handleShareClick}/>
    </div>
    )
}

export default QuizIntro;