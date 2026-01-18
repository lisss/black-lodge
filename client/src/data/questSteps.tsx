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
    title: 'WELCOME TO THE INVESTIGATION',
    caption: 'CHURCHILL\'S BRIEFING ROOM - APRIL 1943',
    description: 'Churchill pours himself a whisky and lights a fresh cigar. Through the smoke, he slides a worn leather notebook across his desk. "Mr. Cooper had a peculiar habit—writing things backwards to keep them secret. Start with page one. It mentions owls, of all things, and two words. Strange fellow—always said the world was wild at heart and weird on top."',
    clue: (
      <div>
        <p><strong>Mr. Cooper's First Note:</strong></p>
        <div className="backwards-text">
          ".egdoL kcalB"
        </div>
        <p className="code-text">Hint: Try reading it backwards (right to left)</p>
        <p><em>Margin note: "The owls are not what they seem..."</em></p>
        <p><em>Small sketch: A wooden match</em></p>
      </div>
    ),
    puzzle: {
      question: 'What two words did Mr. Cooper write? (no spaces needed)',
      answers: ['black lodge', 'blacklodge', 'the black lodge', 'theblacklodge'],
      hint: 'Read the text from right to left: starting with the last letter',
    },
  },
  {
    title: 'THE FIRST PHOTOGRAPH',
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
    description: 'Churchill takes a long draw from his cigar and studies the photograph. "This aerial photo shows an underground bunker in Berlin. Red curtains, 50 feet underground. Impossible." He taps ash into a crystal ashtray. "Mr. Cooper circled this and wrote about coffee, zigzag floors, and something watching. Also sketched a woman in trouble, wandering dark streets. Peculiar mind."',
    clue: (
      <div>
        <p>The room is precisely 24 feet by 24 feet. The curtains are deep red, like wine.</p>
        <p><strong>Mr. Cooper's note in margin:</strong> <em>&quot;Through the darkness of future past... the room waits. A yellow light in the distance.&quot;</em></p>
        <p><strong>What should we do?</strong> Churchill looks at you expectantly, whisky in hand.</p>
      </div>
    ),
    choices: [
      { text: 'This deserves investigation. Mr. Cooper was onto something.' },
      { text: 'It\'s probably just a photo development error.' },
    ],
  },
  {
    title: 'MORRISON\'S FAVORITE PUZZLE',
    caption: 'NOTEBOOK - PAGE 8 - "A SIMPLE CIPHER"',
    description: 'Churchill refills his glass of scotch. "Mr. Cooper loved puzzles and codes. Always had a cup of coffee while working them—said it helped thinking. This page has a simple number cipher with a friendly greeting. A=1, B=2, and so on. Elementary, really."',
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
    title: 'THE PATTERN EMERGES',
    caption: 'RECONNAISSANCE PHOTO - PRAGUE - APRIL 2, 1943',
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
    description: '"Another sighting," Churchill says, relighting his cigar. "Same dimensions. Same impossible location. But now we see the floor—perfect zigzag pattern, black and white. Mr. Cooper wrote about dancing, dreams, and someone lost on a street in Poland. Getting rather strange, I must say."',
    clue: (
      <div>
        <p><strong>Mr. Cooper's note:</strong> "Three cities, one room. I think it's not IN these places—I think it exists BETWEEN them, somehow."</p>
        <p><em>Scribbled at bottom: "Is it future, or is it past? The silk curtain splits..."</em></p>
        <p>The photographs are authentic. The locations are confirmed. But how can the same room exist in multiple places?</p>
      </div>
    ),
    choices: [
      { text: 'Continue the investigation. This is getting interesting.' },
      { text: 'Something supernatural is happening here.' },
    ],
  },
  {
    title: 'MORRISON\'S LAST MESSAGE',
    caption: 'RADIO TRANSMISSION - APRIL 5, 1943',
    description: 'Three days before vanishing, Mr. Cooper sent a garbled radio message. Most of it was lost to static, but you managed to reconstruct the final words. They are written backwards again—Mr. Cooper\'s signature security method.',
    clue: (
      <div className="transmission-text">
        <p className="glitch-text">[STATIC... BREAKING UP...]</p>
        <p>&quot;...found something... the room is real... I am going to...&quot;</p>
        <p className="glitch-text">[HEAVY STATIC]</p>
        <p><strong>Final words (backwards):</strong></p>
        <div className="backwards-text">
          &quot;...kcab emoc t'now I&quot;
        </div>
        <p className="glitch-text">[TRANSMISSION ENDS]</p>
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
    title: 'YOUR DECISION',
    caption: 'CHURCHILL\'S OFFICE - APRIL 10, 1943',
    description: 'You have laid out everything you found. Churchill pours two glasses of whisky and offers you one. He lights a fresh Romeo y Julieta cigar, his favorite.',
    clue: (
      <div>
        <p><em>&quot;So. Mr. Cooper found something inexplicable—a room that defies location and logic. Owls. Backwards messages. Dreams bleeding into reality. And now Mr. Cooper is gone.&quot;</em></p>
        <p>He takes a slow sip of scotch.</p>
        <p><em>&quot;I have fought in trenches, commanded armies, survived assassination attempts. But this... this is something else entirely.&quot;</em></p>
        <p><em>&quot;The photographs are real. The mystery is real. The question now: do we pursue truth, no matter how dark the path? Or do we leave some doors unopened?&quot;</em></p>
        <p>Churchill looks at you through a cloud of cigar smoke, waiting for your counsel.</p>
      </div>
    ),
    choices: [
      { text: 'Seal the files. Some mysteries are too dangerous.' },
      { text: 'The investigation must continue. We need answers.' },
      { text: 'Mr. Cooper walked through fire for this truth. Honor that.' },
    ],
  },
];
