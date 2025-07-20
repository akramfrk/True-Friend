let questions = [
  {
    numb: 1,
    question: "What’s my go-to reaction when someone says “calm down” while I’m already calm?",
    answer: "B. Say “I am calm” with increasing volume",
    options: [
      "A. Start glitching like a broken NPC",
      "B. Say “I am calm” with increasing volume",
      "C. Politely implode internally",
      "D. Freeze like a Windows 98 popup"
    ]
  },
  {
    numb: 2,
    question: "What do I look like more? Dedicated probability teacher :)",
    answer: "B. Capitalist",
    options: [
      "A. Commitment freak",
      "B. Capitalist",
      "C. Nazi",
      "D. NPC"
    ]
  },
  {
    numb: 3,
    question: "Which anime character am I most like when I'm stressed?",
    answer: "D. Goku (smiles through chaos)",
    options: [
      "A. Levi (cold but focused)",
      "B. Zenitsu (screaming inside and outside)",
      "C. L (sits weird, thinks deep)",
      "D. Goku (smiles through chaos)"
    ]
  },
  {
    numb: 4,
    question: "What would be my anime arc?",
    answer: "D. Rise of the Chill Master",
    options: [
      "A. The Overworked Student Saga",
      "B. The Sleep-Deprived Coder",
      "C. The Shawarma Redemption",
      "D. Rise of the Chill Master"
    ]
  },
  {
    numb: 5,
    question: "What’s my exam preparation style?",
    answer: "C. Make a perfect study plan I never follow",
    options: [
      "A. “Start one week early” (never happens)",
      "B. Study everything the night before",
      "C. Make a perfect study plan I never follow",
      "D. Cry, then somehow pass"
    ]
  },
  {
    numb: 6,
    question: "What’s always next to me while studying?",
    answer: "B. Me7chia",
    options: [
      "A. Snacks and regrets",
      "B. Me7chia",
      "C. My phone (which I totally ignore... right?)",
      "D. 10 pens, 0 motivation"
    ]
  },
  {
    numb: 7,
    question: "What kind of friend am I?",
    answer: "B. The chaotic one: “Let’s skip and get food.”",
    options: [
      "A. The motivator: “You got this!”",
      "B. The chaotic one: “Let’s skip and get food.”",
      "C. The listener who gives deep advice",
      "D. The meme sender at 3AM"
    ]
  },
  {
    numb: 8,
    question: "What’s the best way to convince me to go out?",
    answer: "B. Say “it’s a quick thing” (it’s never quick)",
    options: [
      "A. Mention food",
      "B. Say “it’s a quick thing” (it’s never quick)",
      "C. Threaten to come drag me",
      "D. Show me who’s already there"
    ]
  },
  {
    numb: 9,
    question: "Which one of these is most “me”?",
    answer: "D. All of the above",
    options: [
      "A. Laughing at my own jokes",
      "B. Accidentally ignoring messages",
      "C. Daydreaming mid-conversation",
      "D. All of the above"
    ]
  },
  {
    numb: 10,
    question: "What’s my actual life motto?",
    answer: "C. Why not both?",
    options: [
      "A. Sleep is optional",
      "B. We’ll see what happens",
      "C. Why not both?",
      "D. If it works, don’t touch it"
    ]
  },
  {
    numb: 11,
    question: "What’s my role in a group project?",
    answer: "C. The vibes manager with snacks",
    options: [
      "A. The ghost (was he even in this group?)",
      "B. The perfectionist who rewrites everything",
      "C. The vibes manager with snacks",
      "D. The last-minute life saver"
    ]
  },
  {
    numb: 12,
    question: "What do I always do when someone takes a photo of me?",
    answer: "B. Act like I wasn’t ready (even when I was)",
    options: [
      "A. Peace sign without thinking",
      "B. Act like I wasn’t ready (even when I was)",
      "C. Smile like an NPC",
      "D. Refuse and say “I look tired”"
    ]
  },
  {
    numb: 13,
    question: "What’s the first thing I say when I wake up?",
    answer: "C. *^&%$#... Ask Ismail",
    options: [
      "A. 5 more minutes...",
      "B. Where’s my phone?",
      "C. *^&%$#... Ask Ismail",
      "D. I should’ve slept earlier"
    ]
  },
  {
    numb: 14,
    question: "Which drink describes my vibe?",
    answer: "D. Water — simple, essential, underrated",
    options: [
      "A. Strong coffee — focused & intense",
      "B. Boba tea — chill with a twist",
      "C. Red Bull — chaotic and fast",
      "D. Water — simple, essential, underrated"
    ]
  },
  {
    numb: 15,
    question: "What’s my brain doing during class?",
    answer: "C. Overthinking something random from 2015",
    options: [
      "A. Taking perfect notes",
      "B. Doodling and daydreaming",
      "C. Overthinking something random from 2015",
      "D. Half-listening, half-planning a side project"
    ]
  }
];

const ukMe = [
  "Wooow you really know me?! 😲❤️",
  "You read me like a book 📖🔥",
  "Bingo! That’s me 😎👌",
  "You just unlocked my personality 💡😂",
  "Bruh how do you know that 😳",
  "You spying on me or what? 👀",
  "That’s creepily accurate 😅",
  "Yoo that's too real 💀💯",
  "You got me 😂",
  "Did we grow up together or something?? 😭",
  "You know me better than I do 😭👏",
  "That’s suspiciously correct 🤨✨",
  "Okay okay, you win 🏆😌",
  "Caught me in 4K 😳📸",
  "You’re in my head rent-free 🧠💬"
];

const udkMe = [
  "Do you even know me?? 😤",
  "Nahhh that’s not me 💀",
  "Try again, stranger 👋",
  "Absolutely not 😒",
  "Wrong person my friend 🤡",
  "Who do you think I am? 😐",
  "I feel personally attacked 😶",
  "Nope nope nope 🚫",
  "You must be thinking of someone else 😬",
  "That’s not even close 😂",
  "I’m actually offended 😔",
  "We clearly need to talk more 🤝",
  "You don’t know the real me 🫥",
  "Delete that answer immediately 🗑️",
  "That ain’t me chief 🙅‍♂️"
];

let lowScoreReplies = [
  "Do you even know me? 😐",
  "We seriously need to talk more... 😅",
  "Bro... really? 😭",
  "Try again, maybe you'll find me this time 🕵️‍♂️"
];

let midScoreReplies = [
  "You're getting warmer 🔥",
  "Not bad, not great 😏",
  "We talked before, right? 🤔",
  "You kinda know me... kinda. 😅"
];

let highScoreReplies = [
  "You really know me! 🫶",
  "You're a real one 💯",
  "The Real One 😎",
  "I trust you with my secrets now 🤝"
];


