import { useState } from 'react';
import { questSteps } from '../data/questSteps';

interface QuestProps {
  session: {
    current_step: number;
    completed: boolean;
  };
  onProgress: (step: number, choice: any) => void;
  onComplete: () => void;
  onReset: () => void;
}

function Quest({ session, onProgress, onComplete, onReset }: QuestProps) {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showHint, setShowHint] = useState(false);

  const currentStep = questSteps[session.current_step];
  const isLastStep = session.current_step === questSteps.length - 1;
  const isFirstStep = session.current_step === 0;

  if (!currentStep) {
    return (
      <div className="quest">
        <div className="quest__content">
          <div className="briefing">
            <h2 className="briefing__title">Loading...</h2>
          </div>
        </div>
      </div>
    );
  }

  if (session.completed) {
    return (
      <div className="quest">
        <div className="quest__content completion">
          <div className="completion__curtain"></div>
          <h1 className="completion__title">MISSION COMPLETE</h1>
          <div className="completion__message">
            <p>
              You have uncovered the truth of The Black Lodge.
            </p>
            <p>
              The photographer's final note reads:
            </p>
            <blockquote className="completion__quote">
              "Some doors, once opened, can never be closed. But we can choose
              whether to walk through them—or to seal them forever. You made
              your choice. History will be the judge."
            </blockquote>
            <p className="completion__signature">— The Photographer, 1943</p>
          </div>
          <button className="completion__button" onClick={onReset}>
            START NEW MISSION
          </button>
        </div>
      </div>
    );
  }

  const handleChoice = (choiceIndex: number) => {
    if (!currentStep.choices) return;
    const choice = currentStep.choices[choiceIndex];
    const nextStep = session.current_step + 1;

    if (isLastStep) {
      onComplete();
    } else {
      onProgress(nextStep, { choice: choice.text, timestamp: Date.now() });
    }
    setAnswer('');
    setFeedback('');
    setShowHint(false);
  };

  const handleBack = () => {
    if (isFirstStep) return;
    const prevStep = session.current_step - 1;
    onProgress(prevStep, { action: 'back', timestamp: Date.now() });
    setAnswer('');
    setFeedback('');
    setShowHint(false);
  };

  const handleAnswerSubmit = () => {
    if (!currentStep.puzzle) return;

    const isCorrect = currentStep.puzzle.answers.some(
      (ans) => answer.toLowerCase().trim() === ans.toLowerCase()
    );

    if (isCorrect) {
      setFeedback('CORRECT');
      setTimeout(() => {
        const nextStep = session.current_step + 1;
        if (isLastStep) {
          onComplete();
        } else {
          onProgress(nextStep, { answer: answer, timestamp: Date.now() });
        }
        setAnswer('');
        setFeedback('');
      }, 1500);
    } else {
      setFeedback('INCORRECT - TRY AGAIN');
      setTimeout(() => setFeedback(''), 2000);
    }
  };

  return (
    <div className="quest">
      <div className="quest__header">
        <div className="quest__progress">
          STAGE {session.current_step + 1} / {questSteps.length}
        </div>
        {!isFirstStep && (
          <button className="quest__back-button" onClick={handleBack}>
            ← BACK
          </button>
        )}
      </div>

      <div className="quest__content">
        <div className="photograph">
          {currentStep.image && (
            <div className="photograph__image">{currentStep.image}</div>
          )}
          <div className="photograph__caption">{currentStep.caption}</div>
        </div>

        <div className="briefing">
          <h2 className="briefing__title">{currentStep.title}</h2>
          <div className="briefing__text">{currentStep.description}</div>

          {currentStep.clue && (
            <div className="briefing__clue">
              <div className="briefing__clue-label">DECODED MESSAGE:</div>
              {currentStep.clue}
            </div>
          )}

          {currentStep.puzzle && (
            <div className="puzzle">
              <div className="puzzle__question">{currentStep.puzzle.question}</div>
              {currentStep.hint && (
                <div className="puzzle__hint-container">
                  <button 
                    className="puzzle__hint-button"
                    onClick={() => setShowHint(!showHint)}
                  >
                    {showHint ? '▼ Hide Hint' : '▶ Need a Hint?'}
                  </button>
                  {showHint && (
                    <div className="puzzle__hint">
                      💡 {currentStep.puzzle.hint || currentStep.hint}
                    </div>
                  )}
                </div>
              )}
              <div className="puzzle__input-group">
                <input
                  type="text"
                  className="puzzle__input"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAnswerSubmit()}
                  placeholder="Enter your answer..."
                />
                <button className="puzzle__button" onClick={handleAnswerSubmit}>
                  SUBMIT
                </button>
              </div>
              {feedback && (
                <div className={`puzzle__feedback ${feedback === 'CORRECT' ? 'correct' : 'incorrect'}`}>
                  {feedback}
                </div>
              )}
            </div>
          )}

          {currentStep.choices && (
            <div className="choices">
              {currentStep.choices.map((choice, index) => (
                <button
                  key={index}
                  className="choices__button"
                  onClick={() => handleChoice(index)}
                >
                  {choice.text}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quest;
