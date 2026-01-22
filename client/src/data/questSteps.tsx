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
    description: 'The Prime Minister is in his shirtsleeves, tie loosened, ash from his Romeo y Julieta scattered across classified folders. "Ah, there you are. Bit late, but no matter." He slides a battered leather notebook toward you with surprising force. "Mr. Cooper. Photographer. Vanished three weeks ago. Left this behind — coded gibberish and owl doodles. The man once told me the world was \'wild at heart and weird on top\'. Thought he was drunk. Now I\'m not so sure." He refills his crystal tumbler without offering you one.',
    clue: (
      <div>
        <p><strong>Mr. Cooper's First Note:</strong></p>
        <div className="backwards-text">
          ".egdoL DRSBA"
        </div>
        <p className="code-text">Hint: Try reading it backwards (right to left)</p>
        <p><em>Margin note: "The owls are not what they seem..."</em></p>
        <p><em>Small sketch: A wooden match</em></p>
      </div>
    ),
    puzzle: {
      question: 'What two words did Mr. Cooper write? (no spaces needed)',
      answers: ['absrd lodge', 'absrdlodge', 'the absrd lodge', 'theabsrdlodge', 'ABSRD lodge', 'ABSRD LODGE'],
      hint: 'Read the text from right to left: starting with the last letter',
    },
  },
  {
    title: 'THE CRIMSON ROOM',
    caption: 'RECONNAISSANCE PHOTO - BERLIN - MARCH 18, 1943',
    image: (
      <div className="ascii-art">
        <pre>{`
    ╔═══════════════════════════╗
    ║ ░░░░░░░░░░░░░░░░░░░░░░░░░ ║
    ║ ░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░ ║
    ║ ░░▓▓█████████████████░░░░░ ║
    ║ ░░▓▓█╔═══════════╗██░░░░░ ║
    ║ ░░▓▓█║           ║██░░░░░ ║
    ║ ░░▓▓█║  CURTAINS ║██░░░░░ ║
    ║ ░░▓▓█║  (RED)    ║██░░░░░ ║
    ║ ░░▓▓█╚═══════════╝██░░░░░ ║
    ║ ░░▓▓███████████████░░░░░░ ║
    ║ ░░░░░░░░░░░░░░░░░░░░░░░░░ ║
    ╚═══════════════════════════╝
        `}</pre>
      </div>
    ),
    description: '"Reconnaissance photo. Berlin. March 18th." Churchill jabs at the image with a stubby finger, nearly dropping his cigar. "That\'s 50 feet underground. Solid concrete above. So tell me — how in God\'s name do we have a room with red velvet curtains? Wine-dark red. Theatrical. Completely mad." He pauses to relight his cigar. "Cooper scrawled nonsense next to it: \'damn fine coffee\', \'zigzag floors\', \'something is watching\'. Then sketched a woman, lost, in dark streets. The man was either brilliant or unhinged. Possibly both."',
    clue: (
      <div>
        <p><strong>Technical measurements:</strong> 24 x 24 feet. Ceiling height: 12 feet. Curtains: deep crimson, velvet, floor-to-ceiling.</p>
        <p><strong>Cooper's scrawled note:</strong> <em>"Through the darkness of future past... the room WAITS. Yellow light. Humming sound. Coffee smell? Impossible. 50 feet of concrete. WHERE IS THE DOOR?"</em></p>
        <p><strong>Coffee stain on corner of photo.</strong></p>
        <p>Churchill is watching you. Waiting. The whisky glass gleams in his hand like amber ice.</p>
      </div>
    ),
    choices: [
      { text: 'Cooper was onto something. We need to dig deeper.' },
      { text: 'Probably a double exposure. Dark room errors. Nothing more.' },
    ],
  },
  {
    title: 'THE GREETING',
    caption: 'NOTEBOOK - PAGE 8 - "A SIMPLE CIPHER"',
    description: 'You turn to page 8. Churchill is watching you over his glass, calculating. "Cooper loved his little games. Apparently couldn\'t order breakfast without encoding it first. This one\'s child\'s play — basic substitution cipher. A equals 1, B equals 2, and so forth." He takes a deliberate sip. "Though I wonder who he was greeting. No one ever came to see him. Lived alone in a dreary flat. Just him and his coffee. Drank it black as midnight on a moonless night, he said." Churchill snorts. "Theatrical sod."',
    clue: (
      <div className="cipher-text">
        8 - 5 - 12 - 12 - 15
        <br />
        <br />
        6 - 18 - 9 - 5 - 14 - 4
      </div>
    ),
    hint: 'A=1, B=2, C=3, D=4, E=5, F=6, G=7, H=8... Convert each number to its letter!',
    puzzle: {
      question: 'What does the message say? (two words, no spaces)',
      answers: ['hello friend', 'hellofriend'],
      hint: '8=H, 5=E, 12=L, 12=L, 15=O...',
    },
  },
  {
    title: 'PRAGUE',
    caption: 'RECONNAISSANCE PHOTO - APRIL 2, 1943',
    image: (
      <div className="ascii-art">
        <pre>{`
    ╔═══════════════════════════╗
    ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
    ║ ▓▓██████████████████████▓ ║
    ║ ▓▓██▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄██▓ ║
    ║ ▓▓██▀ ▀▀▀▀▀▀▀▀▀▀ ▀██▓ ║
    ║ ▓▓██  ■□■□■□■□■  ██▓ ║
    ║ ▓▓██  FLOOR TILES  ██▓ ║
    ║ ▓▓██  BLACK/WHITE  ██▓ ║
    ║ ▓▓██▄ ▄▄▄▄▄▄▄▄▄▄ ▄██▓ ║
    ║ ▓▓██▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀██▓ ║
    ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
    ╚═══════════════════════════╝
        `}</pre>
      </div>
    ),
    description: 'Churchill slaps another photograph on the desk. "Prague. Two weeks later." His voice is harder now, whisky-roughened. "Same room. Same bloody impossible room, but now we see inside. The floor — look at it — perfect black and white zigzag. Like some demented chessboard." He\'s pacing now, cigar trailing smoke. "Cooper wrote about dancing. About dreams spilling into waking. About streets in Poland where women wander lost, silk and shadow." Churchill stops, fixes you with a look. "This stopped being amusing several photographs ago."',
    clue: (
      <div>
        <p><strong>Cooper's increasingly frantic notes:</strong></p>
        <p><em>"Berlin. Prague. Warsaw. Same room. Same measurements. Same EVERYTHING."</em></p>
        <p><em>"Not IN these cities. BETWEEN them. Between spaces. Between times???"</em></p>
        <p><em>"Is it future or is it past? The silk curtains are splitting. I can almost see through—"</em></p>
        <p><strong>[The rest is smudged, possibly by water or... tears?]</strong></p>
        <p>Three separate intelligence sources. Three identical rooms. All verified. All impossible.</p>
      </div>
    ),
    choices: [
      { text: 'This goes beyond coincidence. We must continue.' },
      { text: 'Three identical rooms? We\'re dealing with something beyond physics.' },
    ],
  },
  {
    title: 'THE LAST TRANSMISSION',
    caption: 'RADIO INTERCEPT - APRIL 5, 1943 - 2:47 AM',
    description: 'Churchill sets down his glass. The room feels colder. "Three days before he vanished, Cooper broke radio silence. Middle of the night. Static like hell, but we caught fragments." He hands you the transcript, and you notice his hand isn\'t quite steady. "The last bit came through clear. Backwards, naturally — the paranoid bastard\'s trademark. Our cryptographers worked on it for two days before I told them to just read it in a bloody mirror."',
    clue: (
      <div className="transmission-text">
        <p className="glitch-text">[STATIC... SIGNAL WEAK... 2:47 AM]</p>
        <p>&quot;...Cooper here... found it... the room... it's real... God help me it's REAL...&quot;</p>
        <p className="glitch-text">[INTERFERENCE... CRACKLING...]</p>
        <p>&quot;...the owls... they're watching... the curtains are opening... I can see...&quot;</p>
        <p className="glitch-text">[SCREAMING STATIC]</p>
        <p><strong>Final transmission (backwards, crystal clear):</strong></p>
        <div className="backwards-text">
          &quot;...kcab emoc t'now I&quot;
        </div>
        <p className="glitch-text">[CARRIER WAVE TERMINATED - 2:53 AM]</p>
        <p><em>Radio operator's note: "Never heard a man sound so certain of anything."</em></p>
      </div>
    ),
    hint: 'Remember: Mr. Cooper always wrote important things backwards. Read from right to left.',
    puzzle: {
      question: 'What were Mr. Cooper\'s final words? (four words, no spaces)',
      answers: ['i wont come back', 'iwontcomeback', 'i won\'t come back', 'iwon\'tcomeback'],
      hint: 'Start from the end and read each letter backwards',
    },
  },
  {
    title: 'THE THRESHOLD',
    caption: 'CHURCHILL\'S OFFICE - APRIL 10, 1943 - 1:15 AM',
    description: 'The investigation is laid out before you both like cards in a grim game. For once, Churchill pours two glasses. The good stuff. He pushes one across to you without a word, then lights what must be his tenth cigar of the evening.',
    clue: (
      <div>
        <p>He stands at the window, looking out at blacked-out London. When he speaks, his voice is different — quieter, almost contemplative.</p>
        <p><em>&quot;I\'ve seen men die screaming in trenches. Ordered thousands to their deaths with a signature. Stared down Hitler across a chessboard of nations. But this...&quot;</em></p>
        <p>He turns to face you.</p>
        <p><em>&quot;Cooper found something that shouldn\'t exist. A room between worlds. Dreams made solid. Owls that aren\'t owls. And he walked into it knowing he wouldn\'t return. The question isn\'t whether it\'s real — the photographs don\'t lie. The question is whether we have the courage to look into the dark when the dark is looking back.&quot;</em></p>
        <p>Churchill raises his glass. The amber liquid catches the lamplight.</p>
        <p><em>&quot;Some doors, once opened, don\'t close again. So I ask you: do we open this one?&quot;</em></p>
      </div>
    ),
    choices: [
      { text: 'Seal the files. Burn them. Some doors should stay closed.' },
      { text: 'The truth matters, no matter the cost. Press forward.' },
      { text: 'Cooper knew he wouldn\'t return. We owe him the truth.' },
    ],
  },
];
