export interface QuestStep {
  title: string | React.ReactNode;
  description: string;
  caption: string;
  image?: React.ReactNode;
  clue?: React.ReactNode;
  hint?: string;
  puzzle?: {
    question: string;
    answers: string[];
    hint?: string;
  };
  choices?: {
    text: string;
  }[];
}

export const questSteps: QuestStep[] = [
  {
    title: (
      <>
        WELCOME TO THE LODGE, VEDMI!<br/>
        Let's assume it's a{' '}
        <span style={{ textDecoration: 'line-through' }}>depressive</span> black lodge :)
      </>
    ),
    caption: 'CHURCHILL\'S BRIEFING ROOM - APRIL 1943',
    image: (
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Sir_Winston_S_Churchill.jpg" 
        alt="Winston Churchill with cigar"
        style={{
          width: '100%',
          maxWidth: '400px',
          border: '3px solid #000',
          filter: 'grayscale(100%) sepia(20%)'
        }}
      />
    ),
    description:
      'The Prime Minister is in his shirtsleeves, tie loosened, ash from his ' +
      'Romeo y Julieta scattered across classified folders. "Ah, there you are. ' +
      'Bit late, but no matter." He slides a battered leather notebook toward you ' +
      'with surprising force. "Mr. Cooper. Photographer. Vanished three weeks ago. ' +
      'Left this behind — coded gibberish and owl doodles. The man once told me ' +
      'the world was \'wild at heart and weird on top\'. Thought he was drunk. ' +
      'Now I\'m not so sure." He refills his crystal tumbler without offering you one.',
    clue: (
      <div>
        <p><strong>Mr. Cooper's First Note:</strong></p>
        <div
          className="backwards-text"
          style={{ fontSize: '1.5em', padding: '10px', background: '#f0f0f0' }}
        >
          ".egdoL MBSD"
        </div>
        <p><em>Margin note: "The owls are not what they seem... And the lodge is not what is could seem"</em></p>
      </div>
    ),
    puzzle: {
      question: 'What two words did Mr. Cooper write?',
      answers: [
        'dsmb lodge',
        'dsmblodge',
        'the dsmb lodge',
        'thedsmblodge',
        'DSBM lodge',
        'DSBM LODGE'
      ],
    },
  },
  {
    title: 'THE CAESAR CODE',
    caption: 'NOTEBOOK - PAGE 3 - "SHIFT BY THREE"',
    description:
      'Churchill flips to page 3. "Cooper was fond of ancient codes. This one\'s ' +
      'from Julius Caesar himself — each letter shifted by three positions. ' +
      'A becomes D, B becomes E, and so forth." He taps the page with his cigar. ' +
      '"Simple, but effective. Crack it."',
    clue: (
      <div
        className="cipher-text"
        style={{
          fontSize: '1.6em',
          padding: '20px',
          background: '#f9f9f9',
          textAlign: 'center',
          fontFamily: 'monospace'
        }}
      >
        <p><strong>Cooper's Message:</strong></p>
        <div style={{ letterSpacing: '3px', marginTop: '15px' }}>
          WKH RZO
        </div>
        <br />
      </div>
    ),
    hint: 'W minus 3 = T, K minus 3 = H, H minus 3 = E',
    puzzle: {
      question: 'What does Cooper\'s Caesar cipher say?',
      answers: ['the owl', 'theowl', 'THE OWL', 'THEOWL'],
      hint: 'Move each letter back 3 positions in the alphabet',
    },
  },
  {
    title: 'THE CRIMSON ROOM',
    caption: 'RECONNAISSANCE PHOTO - BERLIN - MARCH 18, 1943',
    image: (
      <img 
        src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop" 
        alt="Red velvet curtains"
        style={{
          width: '100%',
          maxWidth: '400px',
          border: '3px solid #000',
          filter: 'sepia(100%) saturate(300%) hue-rotate(-50deg) brightness(0.8)'
        }}
      />
    ),
    description:
      '"Reconnaissance photo. Berlin. March 18th." Churchill jabs at the image ' +
      'with a stubby finger, nearly dropping his cigar. "That\'s 50 feet underground. ' +
      'Solid concrete above. So tell me — how in God\'s name do we have a room with ' +
      'red velvet curtains? Wine-dark red. Theatrical. Completely mad." He pauses to ' +
      'relight his cigar. "Cooper scrawled something: \'damn fine coffee\', ' +
      '\'zigzag floors\'. The man was either brilliant or unhinged."',
    clue: (
      <div>
        <p>
          <strong>Cooper's note:</strong>{' '}
          <em>
            "Through the darkness of future past... the room WAITS. Yellow light. 
            Coffee smell. WHERE IS THE DOOR?"
          </em>
        </p>
        <p><strong>Red curtains. Deep crimson. Like velvet.</strong></p>
        <p>
          Churchill is watching you, waiting. His cigar smoke curls in the dim light.
        </p>
      </div>
    ),
    choices: [
      {
        text: '▸ Cooper was onto something. We need to dig deeper.'
      },
      {
        text: '▸ Probably a double exposure. Dark room errors.'
      },
    ],
  },
  {
    title: 'THE GREETING',
    caption: 'NOTEBOOK - PAGE 8 - "A SIMPLE CODE"',
    image: (
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Coffee_cup_icon.svg/600px-Coffee_cup_icon.svg.png" 
        alt="Coffee"
        style={{ width: '120px', filter: 'invert(1) sepia(1) hue-rotate(180deg)' }}
      />
    ),
    description:
      'Churchill is watching you. "Cooper loved his games. ' +
      'This one is simple — A equals 1, B equals 2, C equals 3, and so on." ' +
      'He takes a sip of whisky. "Just convert the numbers to letters."',
    clue: (
      <div
        className="cipher-text"
        style={{
          fontSize: '1.8em',
          padding: '20px',
          background: '#f9f9f9',
          textAlign: 'center'
        }}
      >
        8 - 9
        <br />
        <br />
        <p style={{ fontSize: '0.5em', marginTop: '10px' }}>
          💡 A=1, B=2, C=3, D=4, E=5, F=6, G=7, H=8, I=9...
        </p>
      </div>
    ),
    hint: 'Just two letters: 8=H and 9=I',
    puzzle: {
      question: 'What does the code say?',
      answers: ['hi', 'HI', 'Hi'],
      hint: 'The 8th letter is H, the 9th letter is I',
    },
  },
  {
    title: 'MORSE FROM THE DARK',
    caption: 'TELEGRAPH INTERCEPT - MARCH 25, 1943',
    image: (
      <div style={{ fontSize: '3em', textAlign: 'center', padding: '20px' }}>
        📡
      </div>
    ),
    description:
      '"Before the radio transmission, we intercepted this telegraph message." ' +
      'Churchill slides a yellowed paper across. "Morse code. Cooper was a radio ' +
      'operator in the Great War — he never forgot it. Dots and dashes. You know ' +
      'how to read them, yes?"',
    clue: (
      <div
        className="morse-text"
        style={{
          fontSize: '1.8em',
          padding: '20px',
          background: '#000',
          color: '#0f0',
          textAlign: 'center',
          fontFamily: 'monospace',
          letterSpacing: '5px'
        }}
      >
        <p><strong style={{ color: '#fff' }}>COOPER'S TELEGRAPH:</strong></p>
        <br />
        <div>
          .... . .-.. .--. -- .
        </div>
        <br />
        <p style={{ fontSize: '0.4em', color: '#fff', marginTop: '15px' }}>
          💡 Morse code: H = ...., E = ., L = .-.., P = .--., M = --
        </p>
      </div>
    ),
    hint: 'Break it into letters: .... (H), . (E), .-.. (L), .--. (P), -- (M), . (E)',
    puzzle: {
      question: 'What is Cooper saying in Morse code?',
      answers: ['help me', 'helpme', 'HELP ME', 'HELPME', 'Help me'],
      hint: 'Decode each group of dots/dashes: .... = H, . = E',
    },
  },
  {
    title: 'PRAGUE',
    caption: 'RECONNAISSANCE PHOTO - APRIL 2, 1943',
    image: (
      <img 
        src="https://images.unsplash.com/photo-1618219740975-d40978bb7378?w=600&h=400&fit=crop" 
        alt="Black and white zigzag floor"
        style={{
          width: '100%',
          maxWidth: '400px',
          border: '3px solid #000',
          filter: 'grayscale(100%) contrast(1.4) sepia(15%)'
        }}
      />
    ),
    description:
      'Churchill slaps another photograph on the desk. "Prague. Two weeks later. ' +
      'Same room." His voice is harder now. "Look at the floor — perfect black ' +
      'and white zigzag. Like a demented chessboard." He\'s pacing now, cigar ' +
      'trailing smoke. "Cooper wrote about dreams spilling into waking. This ' +
      'stopped being amusing."',
    clue: (
      <div>
        <p><strong>Cooper's notes:</strong></p>
        <p><em>"Berlin. Prague. Warsaw. Same room. Same EVERYTHING."</em></p>
        <p><em>"Not IN these cities. BETWEEN them. Between spaces?"</em></p>
        <p><em>"Is it future or is it past? I can almost see through—"</em></p>
        <p><strong>[The rest is smudged]</strong></p>
      </div>
    ),
    choices: [
      {
        text: '▸ This goes beyond coincidence. We must continue.'
      },
      {
        text: '▸ Three identical rooms? Something beyond physics.'
      },
    ],
  },
  {
    title: 'THE SYMBOL CIPHER',
    caption: 'NOTEBOOK - FINAL PAGE - "OWL SYMBOLS"',
    image: (
      <div style={{ fontSize: '4em', textAlign: 'center' }}>
        🦉
      </div>
    ),
    description:
      'Churchill opens the notebook to the last page. Strange symbols fill it — ' +
      'owls, crescents, triangles. "Cooper created his own cipher. Mad genius." ' +
      'He points to a key at the bottom. "Simple substitution. Each symbol is a letter."',
    clue: (
      <div style={{ padding: '20px', background: '#f9f9f9' }}>
        <p><strong>Cooper's Cipher Key:</strong></p>
        <div style={{ 
          fontSize: '0.9em', 
          fontFamily: 'monospace',
          background: '#fff',
          padding: '15px',
          border: '2px solid #000',
          marginTop: '10px'
        }}>
          <p>🦉 = R &nbsp;&nbsp; 🌙 = E &nbsp;&nbsp; △ = D</p>
        </div>
        <br />
        <p><strong>Cooper's Message:</strong></p>
        <div style={{ 
          textAlign: 'center',
          padding: '20px',
          background: '#000'
        }}>
          <img 
            src="data:image/png;base64,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"
            alt="Twin Peaks cipher symbols with pine trees"
            style={{ width: '100%', maxWidth: '600px' }}
          />
        </div>
        <p style={{ fontSize: '0.85em', marginTop: '15px', fontStyle: 'italic' }}>
          💡 Replace each symbol with its letter from the key above
        </p>
      </div>
    ),
    hint: '🦉 = R, 🌙 = E, △ = D',
    puzzle: {
      question: 'Decode Cooper\'s symbol message:',
      answers: ['red', 'RED', 'Red'],
      hint: 'Owl is R, Moon is E, Triangle is D',
    },
  },
  {
    title: 'THE LAST TRANSMISSION',
    caption: 'RADIO INTERCEPT - APRIL 5, 1943 - 2:47 AM',
    image: (
      <img 
        src="https://images.unsplash.com/photo-1545105511-89d4b499e01c?w=600&h=400&fit=crop" 
        alt="Vintage radio equipment"
        style={{
          width: '100%',
          maxWidth: '400px',
          border: '3px solid #000',
          filter: 'grayscale(100%) sepia(30%)'
        }}
      />
    ),
    description:
      'Churchill sets down his glass. The room feels colder. "Three days before ' +
      'he vanished, Cooper broke radio silence. Middle of the night. We caught ' +
      'fragments." He hands you the transcript. "The last bit came through clear. ' +
      'Backwards — just read it in reverse."',
    clue: (
      <div className="transmission-text">
        <p className="glitch-text">[STATIC... 2:47 AM]</p>
        <p>&quot;...Cooper here... found the room... it's real...&quot;</p>
        <p className="glitch-text">[INTERFERENCE...]</p>
        <p>&quot;...the owls are watching... the curtains are opening...&quot;</p>
        <p className="glitch-text">[STATIC]</p>
        <p><strong>Final words (backwards):</strong></p>
        <div
          className="backwards-text"
          style={{ fontSize: '1.5em', padding: '10px', background: '#f0f0f0' }}
        >
          &quot;kcab emoc tnow I&quot;
        </div>
        <p className="glitch-text">[SIGNAL LOST]</p>
      </div>
    ),
    hint: 'Read it backwards, from right to left: k-c-a-b becomes b-a-c-k',
    puzzle: {
      question: 'What were Mr. Cooper\'s final words?',
      answers: [
        'i wont come back',
        'iwontcomeback',
        'i won\'t come back',
        'iwon\'tcomeback',
        'i wont come back',
        'I wont come back'
      ],
      hint: 'Start from the last letter and work your way to the first',
    },
  },
  {
    title: 'THE THRESHOLD',
    caption: 'CHURCHILL\'S OFFICE - APRIL 10, 1943 - 1:15 AM',
    image: (
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/0/09/Winston_Churchill_1941_photo_by_Yousuf_Karsh.jpg" 
        alt="Winston Churchill portrait"
        style={{
          width: '100%',
          maxWidth: '350px',
          border: '3px solid #000',
          filter: 'grayscale(100%) contrast(1.1)'
        }}
      />
    ),
    description:
      'The investigation is laid out before you both. For once, Churchill pours ' +
      'two glasses. He pushes one across to you without a word, then lights another cigar.',
    clue: (
      <div>
        <p>
          He stands at the window, looking out at blacked-out London. His voice 
          is different — quieter, contemplative.
        </p>
        <p>
          <em>
            &quot;I\'ve seen men die in trenches. Stared down Hitler. But this...&quot;
          </em>
        </p>
        <p>He turns to face you.</p>
        <p>
          <em>
            &quot;Cooper found something that shouldn\'t exist. A room between worlds. 
            And he walked into it knowing he wouldn\'t return. The photographs don\'t 
            lie. The question is whether we have the courage to look into the dark 
            when the dark is looking back.&quot;
          </em>
        </p>
        <p>Churchill raises his glass.</p>
        <p>
          <em>
            &quot;Some doors, once opened, don\'t close again. So I ask you: do we 
            open this one?&quot;
          </em>
        </p>
      </div>
    ),
    choices: [
      {
        text: '▸ Seal the files. Burn them. Some doors should stay closed.'
      },
      {
        text: '▸ The truth matters, no matter the cost. Press forward.'
      },
      {
        text: '▸ Cooper knew he wouldn\'t return. We owe him the truth.'
      },
    ],
  },
];
