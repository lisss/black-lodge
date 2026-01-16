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
              Agent, you have been selected for a matter of utmost secrecy and peculiarity.
            </p>
            <p>
              Our reconnaissance photographer has discovered anomalies in aerial photographs
              taken over occupied Europe—images of a room that should not exist. A room with
              red curtains and black-and-white floors, appearing across multiple locations,
              times, and altitudes.
            </p>
            <p>
              The photographer has vanished. We recovered their notebook containing cryptic
              messages and coordinates. Some entries are written backwards. Others reference
              places that don't appear on any map.
            </p>
            <p>We call it: <strong>The Black Lodge</strong>.</p>
            <p>Your mission: Decode the photographs. Find the truth. Return safely.</p>
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
