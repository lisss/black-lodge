export interface QuestStep {
  title: string;
  description: string;
  caption: string;
  image?: React.ReactNode;
  clue?: React.ReactNode;
  puzzle?: {
    question: string;
    answers: string[];
  };
  choices?: {
    text: string;
  }[];
}

export const questSteps: QuestStep[] = [
  {
    title: 'THE PHOTOGRAPHER\'S NOTEBOOK',
    caption: 'RECOVERED ITEM #1 - LEATHER NOTEBOOK, WATER-DAMAGED',
    description: 'The first page of the photographer\'s notebook contains a strange entry dated March 15, 1943. Most of it is illegible, but one line is circled repeatedly:',
    clue: (
      <div className="backwards-text">
        ".ogdol kcalb eht ni teem lliw eW"
      </div>
    ),
    puzzle: {
      question: 'Decode the message. What is the two-word location?',
      answers: ['black lodge', 'the black lodge', 'blacklodge'],
    },
  },
  {
    title: 'RECONNAISSANCE PHOTOGRAPH #247',
    caption: 'AERIAL PHOTO - BERLIN - MARCH 18, 1943 - 14:32 GMT',
    image: (
      <div className="ascii-art">
        <pre>{`
    ╔═══════════════════════════╗
    ║ ░░░░░░░░░░░░░░░░░░░░░░░░░ ║
    ║ ░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░ ║
    ║ ░░▓▓█████████████████░░░░░ ║
    ║ ░░▓▓█╔═══════════╗██░░░░░ ║
    ║ ░░▓▓█║ ▀▀▀▀▀▀▀▀▀ ║██░░░░░ ║
    ║ ░░▓▓█║   CURTAIN  ║██░░░░░ ║
    ║ ░░▓▓█║ ▄▄▄▄▄▄▄▄▄ ║██░░░░░ ║
    ║ ░░▓▓█╚═══════════╝██░░░░░ ║
    ║ ░░▓▓███████████████░░░░░░ ║
    ║ ░░░░░░░░░░░░░░░░░░░░░░░░░ ║
    ╚═══════════════════════════╝
        `}</pre>
      </div>
    ),
    description: 'This aerial photograph was taken over Berlin. Our analysts noticed an anomaly in building 247 - a room that appears to have red curtains visible from above, despite being an underground bunker. The thermal signature is impossible. The room is precisely 24 feet by 24 feet.',
    clue: (
      <div>
        <p>Photographer's note in margin: "The pattern repeats. Always squares. Always curtains."</p>
        <p className="code-text">Coordinates: 52.5200° N, 13.4050° E</p>
      </div>
    ),
    choices: [
      { text: 'Recommend immediate investigation' },
      { text: 'Mark as optical illusion, continue surveillance' },
    ],
  },
  {
    title: 'THE CIPHER',
    caption: 'PHOTOGRAPHER\'S NOTEBOOK - PAGE 15',
    description: 'The photographer left a cipher. Each number corresponds to a letter position in the alphabet (A=1, Z=26). Churchill\'s analysts need your help.',
    clue: (
      <div className="cipher-text">
        6-9-18-5
        <br />
        23-1-12-11
        <br />
        23-9-20-8
        <br />
        13-5
      </div>
    ),
    puzzle: {
      question: 'What is the decoded instruction? (four words)',
      answers: ['fire walk with me', 'firewalkwithme'],
    },
  },
  {
    title: 'RECONNAISSANCE PHOTOGRAPH #331',
    caption: 'AERIAL PHOTO - PRAGUE - APRIL 2, 1943 - 09:15 GMT',
    image: (
      <div className="ascii-art">
        <pre>{`
    ╔═══════════════════════════╗
    ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
    ║ ▓▓██████████████████████▓ ║
    ║ ▓▓██▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄██▓ ║
    ║ ▓▓██▀ ▀▀▀▀▀▀▀▀▀▀ ▀██▓ ║
    ║ ▓▓██  ♦  FLOOR  ♦  ██▓ ║
    ║ ▓▓██  PATTERN: B/W  ██▓ ║
    ║ ▓▓██▄ ▄▄▄▄▄▄▄▄▄▄ ▄██▓ ║
    ║ ▓▓██▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀██▓ ║
    ║ ▓▓██████████████████████▓ ║
    ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║
    ╚═══════════════════════════╝
        `}</pre>
      </div>
    ),
    description: 'Another sighting. This time in Prague. The same dimensions. The same impossible thermal signature. But now we can see the floor pattern - a checkerboard of black and white tiles. Our photographer noted: "It\'s always the same room. Different cities. Same room."',
    clue: (
      <div>
        <p>Weather conditions: Clear skies, impossible visibility into underground structure.</p>
        <p>The photographer\'s final entry before disappearing: "I think it\'s not IN these places. I think it\'s BETWEEN them."</p>
      </div>
    ),
    choices: [
      { text: 'The photographer found something. Continue investigation.' },
      { text: 'This is beyond military intelligence. Seal the files.' },
    ],
  },
  {
    title: 'THE FINAL TRANSMISSION',
    caption: 'RADIO INTERCEPT - APRIL 5, 1943 - SOURCE UNKNOWN',
    description: 'Three days before vanishing, the photographer transmitted a message on an emergency frequency. It was garbled, but Churchill\'s cryptographers reconstructed most of it:',
    clue: (
      <div className="transmission-text">
        <p>"...found the entrance... not on any map... the curtains are..."</p>
        <p className="glitch-text">[STATIC]</p>
        <p>"...when you see the owl... the pattern of the tiles..."</p>
        <p className="glitch-text">[STATIC]</p>
        <p>"...not a place, it's a state of... the cup of coffee..."</p>
        <p className="backwards-text">".em htiw klaw ton od ...esaelp"</p>
        <p className="glitch-text">[TRANSMISSION ENDS]</p>
      </div>
    ),
    puzzle: {
      question: 'What is the photographer\'s backwards warning? (five words)',
      answers: ['please do not walk with me', 'pleasedonotwalkwithme'],
    },
  },
  {
    title: 'THE CHOICE',
    caption: 'CHURCHILL\'S OFFICE - APRIL 10, 1943',
    description: 'You sit across from Churchill. His cigar smoke fills the room. He slides a folder across the desk.',
    clue: (
      <div>
        <p><em>"I've read your analysis, agent. This... Black Lodge. A room that exists everywhere and nowhere. A photographer who found a door between worlds and vanished through it."</em></p>
        <p><em>"The question is not whether it exists. The question is what we do about it."</em></p>
        <p>He fixes you with a hard stare.</p>
        <p><em>"Do we lock these files away and pretend we never saw them? Or do we admit that we're fighting wars on fronts we don't understand? That there are mysteries even victory won't solve?"</em></p>
      </div>
    ),
    choices: [
      { text: 'Seal the files. Some doors should remain closed.' },
      { text: 'Continue investigation. The truth matters, whatever it is.' },
    ],
  },
];
