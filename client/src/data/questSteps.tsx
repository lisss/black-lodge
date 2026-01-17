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
    description: 'Churchill slides a worn leather notebook across his desk. "This belonged to Morrison, our missing photographer. The first page has a simple message—but Morrison had a peculiar habit of writing things backwards to keep them secret from prying eyes."',
    clue: (
      <div>
        <p><strong>Morrison's First Note:</strong></p>
        <div className="backwards-text">
          ".egdoL kcalB"
        </div>
        <p className="code-text">Hint: Try reading it backwards (right to left)</p>
      </div>
    ),
    puzzle: {
      question: 'What two words did Morrison write? (no spaces needed)',
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
    description: 'This aerial photo shows an underground bunker in Berlin. Intelligence analysts were baffled—thermal imaging shows red curtains in a sealed room, 50 feet underground. Impossible. Morrison circled this image and wrote: "It appears. Always the same. Always watching."',
    clue: (
      <div>
        <p>The room is precisely 24 feet by 24 feet. The curtains are deep red, like wine.</p>
        <p><strong>What should we do?</strong> Churchill looks at you expectantly.</p>
      </div>
    ),
    choices: [
      { text: 'This deserves investigation. Morrison was onto something.' },
      { text: 'It\'s probably just a photo development error.' },
    ],
  },
  {
    title: 'MORRISON\'S FAVORITE PUZZLE',
    caption: 'NOTEBOOK - PAGE 8 - "A SIMPLE CIPHER"',
    description: 'Morrison loved puzzles and codes. This page has a simple number cipher. Morrison helpfully wrote at the top: "My favorite! A=1, B=2, C=3... and so on." The numbers below spell out a message.',
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
    description: 'Another sighting! This time in Prague. Same dimensions. Same impossible location. But now you can see the floor: a perfect checkerboard pattern of black and white tiles. Morrison wrote: "The pattern repeats. The room is always identical. How?"',
    clue: (
      <div>
        <p><strong>Morrison's note:</strong> "Three cities, one room. I think it's not IN these places—I think it exists BETWEEN them, somehow."</p>
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
    description: 'Three days before vanishing, Morrison sent a garbled radio message. Most of it was lost to static, but you managed to reconstruct the final words. They are written backwards again—Morrison\'s signature security method.',
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
    hint: 'Remember: Morrison always wrote important things backwards. Read from right to left.',
    puzzle: {
      question: 'What were Morrison\'s final words? (four words, no spaces)',
      answers: ['i wont come back', 'iwontcomeback', 'i won\'t come back', 'iwon\'tcomeback'],
      hint: 'Start from the end and read each letter backwards',
    },
  },
  {
    title: 'YOUR DECISION',
    caption: 'CHURCHILL\'S OFFICE - APRIL 10, 1943',
    description: 'You\'ve laid out everything you found. Churchill lights his cigar thoughtfully.',
    clue: (
      <div>
        <p><em>"So, Morrison found something inexplicable. A room that exists in multiple places. And now Morrison is gone."</em></p>
        <p><em>"The question isn't whether the Black Lodge is real—the photographs prove that. The question is: what do we do with this knowledge?"</em></p>
        <p>He looks at you seriously.</p>
        <p><em>"Some mysteries are better left alone. But some truths, no matter how strange, demand to be understood. Morrison made their choice. Now you must make yours."</em></p>
        <p><strong>What is your recommendation?</strong></p>
      </div>
    ),
    choices: [
      { text: 'Seal the files. Morrison is lost. We must move on.' },
      { text: 'The investigation should continue. Understanding this is important.' },
      { text: 'Morrison left us clues for a reason. Honor that courage.' },
    ],
  },
];
