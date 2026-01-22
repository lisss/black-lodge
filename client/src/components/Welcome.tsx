interface WelcomeProps {
  onStart: () => void;
  loading: boolean;
}

function Welcome({ onStart, loading }: WelcomeProps) {
  return (
    <div className="welcome">
      <div className="welcome__content">
        <div className="dossier">
          <div className="dossier__stamp">TOP SECRET</div>
          <div className="dossier__portrait">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Sir_Winston_Churchill_-_19086236948.jpg" 
              alt="Winston Churchill"
              className="churchill-photo"
            />
            <div className="portrait-label">PM CHURCHILL - APR 1943</div>
          </div>
          <h1 className="dossier__title">THE ABSRD LODGE</h1>
          <div className="dossier__classification">
            CLASSIFIED: EYES ONLY
            <br />
            WINSTON CHURCHILL'S OFFICE
            <br />
            1943
          </div>
          <div className="dossier__briefing">
            <p>
              <strong>London. April 10, 1943. 11:47 PM.</strong> Churchill's secretary appeared at your door without warning. "The PM wants you. Now. Don't ask questions." 
              You find him in shirtsleeves, surrounded by photographs and ash.
            </p>
            <p>
              <strong>The Cooper Incident:</strong> Mr. Cooper — Britain's finest reconnaissance photographer — was mapping enemy installations when his camera caught something impossible. 
              A room. Deep underground. Crimson curtains. Zigzag black-white floors. 
              It appeared in Berlin. Then Prague. Then Warsaw. Always identical. Always impossible.
            </p>
            <p>
              Cooper spiraled into obsession. His notebook filled with codes, backwards writing, frantic sketches. 
              Owls that aren't owls. Coffee that appears from nowhere. Dreams bleeding through walls. 
              A woman wandering dark streets. Fire walking with someone. 
              Then the radio transmission at 2:47 AM: "I won't come back." Mr. Cooper vanished that night.
            </p>
            <p>
              Churchill swirls his whisky, eyes hard. "Cooper called it the ABSRD Lodge. Enemy intelligence? Mass hallucination? 
              Or something we don't have words for yet?" He slides the notebook across his desk. "Your orders: follow Cooper's trail. 
              Solve what he couldn't. Find out what happens when you open a door that shouldn't exist."
            </p>
            <p className="warning-text">
              <strong>Warning:</strong> Cooper left clues. Hints. A breadcrumb trail for whoever came next. But remember his last words.
            </p>
          </div>
          <button
            className="dossier__button"
            onClick={onStart}
            disabled={loading}
          >
            {loading ? 'PREPARING BRIEFING...' : 'ACCEPT MISSION'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
