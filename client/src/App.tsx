import { useState, useEffect } from 'react';
import Quest from './components/Quest';
import Welcome from './components/Welcome';

const API_URL = import.meta.env.PROD ? '' : 'http://localhost:3001';

interface Session {
  id: number;
  session_id: string;
  current_step: number;
  choices: any[];
  completed: boolean;
}

function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedSessionId = localStorage.getItem('blacklodge_session');
    if (savedSessionId) {
      loadSession(savedSessionId);
    }
  }, []);

  const loadSession = async (sessionId: string) => {
    try {
      const response = await fetch(`${API_URL}/api/session/${sessionId}`);
      if (response.ok) {
        const data = await response.json();
        setSession(data);
      }
    } catch (error) {
      console.error('Failed to load session:', error);
    }
  };

  const startQuest = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/session/start`, {
        method: 'POST',
      });
      const data = await response.json();
      setSession(data);
      localStorage.setItem('blacklodge_session', data.session_id);
    } catch (error) {
      console.error('Failed to start quest:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateProgress = async (step: number, choice: any) => {
    if (!session) return;
    try {
      const response = await fetch(`${API_URL}/api/session/${session.session_id}/progress`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ step, choice }),
      });
      const data = await response.json();
      setSession(data);
    } catch (error) {
      console.error('Failed to update progress:', error);
    }
  };

  const completeQuest = async () => {
    if (!session) return;
    try {
      const response = await fetch(`${API_URL}/api/session/${session.session_id}/complete`, {
        method: 'POST',
      });
      const data = await response.json();
      setSession(data);
    } catch (error) {
      console.error('Failed to complete quest:', error);
    }
  };

  const resetQuest = () => {
    localStorage.removeItem('blacklodge_session');
    setSession(null);
  };

  if (!session) {
    return <Welcome onStart={startQuest} loading={loading} />;
  }

  return (
    <Quest
      session={session}
      onProgress={updateProgress}
      onComplete={completeQuest}
      onReset={resetQuest}
    />
  );
}

export default App;
