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
          <h1 className="dossier__title">THE BLACK LODGE</h1>
          <div className="dossier__classification">
            CLASSIFIED: EYES ONLY
            <br />
            WINSTON CHURCHILL'S OFFICE
            <br />
            1943
          </div>
          <div className="dossier__briefing">
            <p>
              <strong>London, April 1943.</strong> You've been summoned to Churchill's office for an unusual assignment.
            </p>
            <p>
              <strong>The Story:</strong> Britain's best reconnaissance photographer, Agent Morrison, 
              was documenting enemy positions across Europe when something impossible appeared in the photos. 
              The same mysterious room—with red curtains and checkerboard floors—showing up in Berlin, 
              Prague, and other cities. Always underground. Always identical.
            </p>
            <p>
              Morrison became obsessed, filling a notebook with strange clues and backwards messages. 
              Then three days ago, Morrison vanished without a trace.
            </p>
            <p>
              Churchill believes this "Black Lodge" (as Morrison called it) might be connected to 
              enemy intelligence—or something far stranger. Your task: follow Morrison's clues, 
              solve the mysteries, and discover what happened.
            </p>
            <p>
              <strong>Don't worry—</strong> Morrison left hints for whoever came next. You won't be alone in this.
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
