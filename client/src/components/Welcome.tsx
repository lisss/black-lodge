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
              <strong>London, April 1943.</strong> You've been summoned to Churchill's office for an unusual assignment. The air is thick with cigar smoke.
            </p>
            <p>
              <strong>The Story:</strong> Britain's best reconnaissance photographer, Mr. Cooper, 
              was documenting enemy positions across Europe when something impossible appeared in the photos. 
              The same mysterious room — with deep red curtains and zigzag black-and-white floors — showing up in Berlin, 
              Prague, and other cities. Always underground. Always identical. Always watching.
            </p>
            <p>
              Mr. Cooper became obsessed, filling a notebook with strange clues and backwards messages. 
              Notes about owls, coffee, dreams, fire, and a woman lost on a dark street. 
              Then three days ago, Mr. Cooper vanished without a trace.
            </p>
            <p>
              Churchill, nursing his evening whisky, believes this "ABSRD lodge" (as Mr. Cooper called it) might be connected to 
              enemy intelligence—or something far stranger. Your task: follow Mr. Cooper's clues, 
              solve the mysteries, and discover what happened.
            </p>
            <p>
              <strong>Don't worry — </strong> Mr. Cooper left hints for whoever came next. You won't be alone in this.
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
