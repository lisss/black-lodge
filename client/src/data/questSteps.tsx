export interface QuestStep {
  title: string;
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
    title: 'WELCOME TO THE LODGE, VEDMI!',
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
          ".egdoL DRSBA"
        </div>
        <p className="code-text">
          💡 Hint: Try reading it backwards (right to left)
        </p>
        <p><em>Margin note: "The owls are not what they seem..."</em></p>
      </div>
    ),
    puzzle: {
      question: 'What two words did Mr. Cooper write?',
      answers: [
        'absrd lodge',
        'absrdlodge',
        'the absrd lodge',
        'theabsrdlodge',
        'ABSRD lodge',
        'ABSRD LODGE'
      ],
      hint: 'Start from the end: A is the last letter, work your way to the beginning',
    },
  },
  {
    title: 'THE CRIMSON ROOM',
    caption: 'RECONNAISSANCE PHOTO - BERLIN - MARCH 18, 1943',
    image: (
      <img 
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" 
        alt="Red velvet curtains"
        style={{
          width: '100%',
          maxWidth: '400px',
          border: '3px solid #000',
          filter: 'grayscale(30%) sepia(40%) hue-rotate(-10deg)'
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
        <p><strong>Coffee stain on corner of photo.</strong></p>
        <p>Churchill is watching you, waiting. The whisky glass gleams in his hand.</p>
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
      'You turn to page 8. Churchill is watching you. "Cooper loved his games. ' +
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
