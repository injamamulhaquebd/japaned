import type { Lesson, TalkLine } from "./types";
import {
  bi,
  buildWord,
  copy,
  guess,
  hear,
  kanaWord,
  kanjiMeet,
  lesson,
  opt,
  pattern,
  scene,
  useIt,
} from "./helpers";

const U1 = bi("First mornings", "প্রথম সকাল");
const U2 = bi("People around you", "আপনার চারপাশের মানুষ");
const U3 = bi("Home and table", "বাড়ি ও টেবিল");

function you(
  promptEn: string,
  promptBn: string,
  options: { ja: string; romaji: string; en: string; bn: string; correct: boolean }[],
): TalkLine {
  return {
    role: "you",
    prompt: bi(promptEn, promptBn),
    options: options.map((o) => ({
      ja: o.ja,
      romaji: o.romaji,
      meaning: bi(o.en, o.bn),
      correct: o.correct,
    })),
  };
}

export const lessonsA: Lesson[] = [
  lesson(
    "morning-light",
    "first-mornings",
    U1,
    1,
    "morning",
    bi("Morning light", "সকালের আলো"),
    bi("Someone wakes up. Listen before you know the words.", "কেউ ঘুম থেকে ওঠে। শব্দ জানার আগে শুনুন।"),
    [
      scene(
        "morning",
        "A quiet room. Light comes in. Someone sits up in bed.",
        "একটি শান্ত ঘর। আলো ঢুকছে। কেউ বিছানা থেকে উঠে বসে।",
      ),
      hear("おはよう。", "ohayou", "Good morning.", "সুপ্রভাত।"),
      guess(
        "おはよう。",
        "ohayou",
        "Good morning.",
        "সুপ্রভাত।",
        "What is happening in this room?",
        "এই ঘরে কী হচ্ছে?",
        [
          opt("おはよう。", "Someone is greeting the morning.", "কেউ সকালের অভিবাদন করছে।", true),
          opt("おやすみ。", "Someone is going to sleep.", "কেউ ঘুমাতে যাচ্ছে।", false),
          opt("いただきます。", "Someone is starting a meal.", "কেউ খাওয়া শুরু করছে।", false),
        ],
      ),
      copy("おはよう。", "ohayou", "Good morning.", "সুপ্রভাত।"),
      scene(
        "meet",
        "Later, at the door. A student sees a teacher.",
        "পরে, দরজায়। এক শিক্ষার্থী শিক্ষককে দেখে।",
      ),
      hear(
        "おはようございます。",
        "ohayou gozaimasu",
        "Good morning. (careful, polite)",
        "সুপ্রভাত। (যত্নশীল, ভদ্র)",
      ),
      pattern(
        [
          ["おはよう。", "ohayou", "Good morning. (to a friend, family)", "সুপ্রভাত। (বন্ধু, পরিবার)"],
          [
            "おはようございます。",
            "ohayou gozaimasu",
            "Good morning. (a little more careful)",
            "সুপ্রভাত। (একটু বেশি যত্নশীল)",
          ],
        ],
        "You already felt the difference. The longer one is the same morning feeling, said more carefully.",
        "পার্থক্য আপনি আগেই অনুভব করেছেন। লম্বাটা একই সকালের অনুভূতি, শুধু আরও যত্ন করে বলা।",
      ),
      useIt("You wake up and see your friend. What do you say?", "ঘুম থেকে উঠে বন্ধুকে দেখলেন। কী বলবেন?", [
        { ja: "おはよう。", romaji: "ohayou", en: "Good morning.", bn: "সুপ্রভাত।", correct: true },
        { ja: "おやすみ。", romaji: "oyasumi", en: "Good night.", bn: "শুভ রাত্রি।", correct: false },
        { ja: "さようなら。", romaji: "sayounara", en: "Goodbye.", bn: "বিদায়।", correct: false },
      ]),
      kanaWord("おはよう", "good morning", "সুপ্রভাত", [
        { char: "お", romaji: "o" },
        { char: "は", romaji: "ha" },
        { char: "よ", romaji: "yo" },
        { char: "う", romaji: "u" },
      ]),
      buildWord("おはよう", "ohayou", "good morning", "সুপ্রভাত", ["お", "は", "よ", "う", "ん", "こ"]),
      {
        kind: "talk",
        lines: [
          { role: "them", ja: "おはよう。", romaji: "ohayou", meaning: bi("Good morning.", "সুপ্রভাত।") },
          you("Your friend said good morning. Answer.", "বন্ধু সুপ্রভাত বলেছে। উত্তর দিন।", [
            { ja: "おはよう。", romaji: "ohayou", en: "Good morning.", bn: "সুপ্রভাত।", correct: true },
            { ja: "こんにちは。", romaji: "konnichiwa", en: "Hello (daytime).", bn: "হ্যালো (দিনের বেলা)।", correct: false },
          ]),
        ],
      },
    ],
  ),

  lesson(
    "day-and-night",
    "first-mornings",
    U1,
    2,
    "day",
    bi("Day and night", "দিন ও রাত"),
    bi("The same people, different light, different greetings.", "একই মানুষ, আলাদা আলো, আলাদা অভিবাদন।"),
    [
      scene("day", "Noon. Two people pass on a quiet street.", "দুপুর। শান্ত রাস্তায় দুজন মানুষ একে অপরকে দেখে।"),
      hear("こんにちは。", "konnichiwa", "Hello. / Good afternoon.", "হ্যালো। / শুভ দুপুর।"),
      guess(
        "こんにちは。",
        "konnichiwa",
        "Hello. / Good afternoon.",
        "হ্যালো। / শুভ দুপুর।",
        "When is this greeting living?",
        "এই অভিবাদন কোন সময়ের?",
        [
          opt("", "In the middle of the day.", "দিনের মাঝখানে।", true),
          opt("", "When someone just woke up.", "যখন কেউ সদ্য ঘুম থেকে উঠেছে।", false),
          opt("", "When the lights are off for sleep.", "যখন ঘুমের জন্য আলো নিভিয়ে দেওয়া।", false),
        ],
      ),
      copy("こんにちは。", "konnichiwa", "Hello. / Good afternoon.", "হ্যালো। / শুভ দুপুর।"),
      scene("night", "Evening. A shop is closing. Someone bows slightly.", "সন্ধ্যা। দোকান বন্ধ হচ্ছে। কেউ হালকা নত হয়।"),
      hear("こんばんは。", "konbanwa", "Good evening.", "শুভ সন্ধ্যা।"),
      scene("night", "Later. Someone turns toward a dark room.", "পরে। কেউ অন্ধকার ঘরের দিকে ঘুরে।"),
      hear("おやすみなさい。", "oyasuminasai", "Good night.", "শুভ রাত্রি।"),
      pattern(
        [
          ["おはよう。", "ohayou", "Morning", "সকাল"],
          ["こんにちは。", "konnichiwa", "Daytime", "দিন"],
          ["こんばんは。", "konbanwa", "Evening", "সন্ধ্যা"],
          ["おやすみなさい。", "oyasuminasai", "Before sleep", "ঘুমানোর আগে"],
        ],
        "Japanese greetings follow the light, not a single hello for every hour.",
        "জাপানি অভিবাদন আলোর সাথে চলে, সব সময়ের জন্য একটি হ্যালো নয়।",
      ),
      useIt("It is evening. You meet a neighbor.", "সন্ধ্যা। প্রতিবেশীর সাথে দেখা।", [
        { ja: "こんばんは。", romaji: "konbanwa", en: "Good evening.", bn: "শুভ সন্ধ্যা।", correct: true },
        { ja: "おはよう。", romaji: "ohayou", en: "Good morning.", bn: "সুপ্রভাত।", correct: false },
        { ja: "おやすみなさい。", romaji: "oyasuminasai", en: "Good night.", bn: "শুভ রাত্রি।", correct: false },
      ]),
      kanaWord("こんにちは", "hello (day)", "হ্যালো (দিন)", [
        { char: "こ", romaji: "ko" },
        { char: "ん", romaji: "n" },
        { char: "に", romaji: "ni" },
        { char: "ち", romaji: "chi" },
        { char: "は", romaji: "wa" },
      ]),
      {
        kind: "talk",
        lines: [
          { role: "narrator", ja: "", romaji: "", meaning: bi("It is afternoon.", "এখন দুপুর।") },
          { role: "them", ja: "こんにちは。", romaji: "konnichiwa", meaning: bi("Hello.", "হ্যালো।") },
          you("Answer in the same light.", "একই আলোয় উত্তর দিন।", [
            { ja: "こんにちは。", romaji: "konnichiwa", en: "Hello.", bn: "হ্যালো।", correct: true },
            { ja: "おはよう。", romaji: "ohayou", en: "Good morning.", bn: "সুপ্রভাত।", correct: false },
          ]),
        ],
      },
    ],
  ),

  lesson(
    "first-meeting",
    "first-mornings",
    U1,
    3,
    "meet",
    bi("Meeting someone", "কারও সাথে দেখা"),
    bi("A first meeting is slow, warm, and short.", "প্রথম দেখা ধীর, উষ্ণ এবং ছোট।"),
    [
      scene("meet", "Two people face each other for the first time.", "দুজন মানুষ প্রথমবার মুখোমুখি।"),
      hear("はじめまして。", "hajimemashite", "Nice to meet you. (first time)", "আপনার সাথে দেখা হয়ে ভালো লাগল। (প্রথমবার)"),
      copy("はじめまして。", "hajimemashite", "Nice to meet you.", "আপনার সাথে দেখা হয়ে ভালো লাগল।"),
      hear(
        "どうぞ よろしく。",
        "douzo yoroshiku",
        "Please treat me kindly. / I look forward to this.",
        "অনুগ্রহ করে ভালো রাখবেন। / এগিয়ে যেতে চাই।",
      ),
      guess(
        "はじめまして。",
        "hajimemashite",
        "Nice to meet you.",
        "আপনার সাথে দেখা হয়ে ভালো লাগল।",
        "When does this sentence live?",
        "এই বাক্যটি কখন বাঁচে?",
        [
          opt("", "The first time you meet someone.", "যখন প্রথমবার কারও সাথে দেখা হয়।", true),
          opt("", "Every morning with family.", "পরিবারের সাথে প্রতি সকালে।", false),
          opt("", "When you buy bread.", "যখন রুটি কেনেন।", false),
        ],
      ),
      pattern(
        [
          ["はじめまして。", "hajimemashite", "This is our first meeting.", "এটি আমাদের প্রথম দেখা।"],
          ["どうぞ よろしく。", "douzo yoroshiku", "Please take care of me from here.", "এখন থেকে যত্ন করে রাখবেন।"],
        ],
        "You do not need to unpack every word. Together they mean: we are starting.",
        "প্রতিটি শব্দ খুলে ফেলতে হবে না। একসাথে এদের মানে: আমরা শুরু করছি।",
      ),
      useIt("You meet someone for the first time. Start.", "কারও সাথে প্রথম দেখা। শুরু করুন।", [
        {
          ja: "はじめまして。",
          romaji: "hajimemashite",
          en: "Nice to meet you.",
          bn: "দেখা হয়ে ভালো লাগল।",
          correct: true,
        },
        { ja: "おはよう。", romaji: "ohayou", en: "Good morning.", bn: "সুপ্রভাত।", correct: false },
        { ja: "いただきます。", romaji: "itadakimasu", en: "Let's eat.", bn: "খাওয়া শুরু।", correct: false },
      ]),
      kanaWord("はじめまして", "nice to meet you", "দেখা হয়ে ভালো লাগল", [
        { char: "は", romaji: "ha" },
        { char: "じ", romaji: "ji" },
        { char: "め", romaji: "me" },
        { char: "ま", romaji: "ma" },
        { char: "し", romaji: "shi" },
        { char: "て", romaji: "te" },
      ]),
      {
        kind: "talk",
        lines: [
          {
            role: "them",
            ja: "はじめまして。",
            romaji: "hajimemashite",
            meaning: bi("Nice to meet you.", "দেখা হয়ে ভালো লাগল।"),
          },
          you("Return the first meeting.", "প্রথম দেখার উত্তর দিন।", [
            {
              ja: "はじめまして。 どうぞ よろしく。",
              romaji: "hajimemashite. douzo yoroshiku",
              en: "Nice to meet you too.",
              bn: "আমারও দেখা হয়ে ভালো লাগল।",
              correct: true,
            },
            { ja: "おやすみ。", romaji: "oyasumi", en: "Good night.", bn: "শুভ রাত্রি।", correct: false },
          ]),
        ],
      },
    ],
  ),

  lesson(
    "this-is-me",
    "people",
    U2,
    4,
    "introduce",
    bi("This is me", "এটি আমি"),
    bi("Say who you are. Hear the shape, then notice it.", "নিজেকে বলুন। আকৃতি শুনুন, তারপর লক্ষ্য করুন।"),
    [
      scene("introduce", "A small circle of people. Someone says their name.", "ছোট একটি বৃত্ত। কেউ নিজের নাম বলে।"),
      hear("わたしは インジャムです。", "watashi wa Injamu desu", "I am Injam.", "আমি ইনজাম।"),
      copy("わたしは がくせいです。", "watashi wa gakusei desu", "I am a student.", "আমি একজন শিক্ষার্থী।"),
      hear(
        "わたしは バングラデシュじんです。",
        "watashi wa Banguradeshu-jin desu",
        "I am Bangladeshi.",
        "আমি বাংলাদেশি।",
      ),
      pattern(
        [
          ["わたしは インジャムです。", "watashi wa Injamu desu", "I am Injam.", "আমি ইনজাম।"],
          ["わたしは がくせいです。", "watashi wa gakusei desu", "I am a student.", "আমি একজন শিক্ষার্থী।"],
          [
            "わたしは バングলাデシュじんです。",
            "watashi wa Banguradeshu-jin desu",
            "I am Bangladeshi.",
            "আমি বাংলাদেশি।",
          ],
        ],
        "わたしは marks who we are talking about. です sits at the end, gently finishing the sentence. You already heard both several times.",
        "わたしは বলে আমরা কার কথা বলছি। です বাক্যের শেষে বসে, আলতো করে শেষ করে। দুটোই আপনি কয়েকবার শুনেছেন।",
      ),
      useIt("Someone asks who you are. You are a student.", "কেউ জিজ্ঞেস করল আপনি কে। আপনি শিক্ষার্থী।", [
        {
          ja: "わたしは がくせいです。",
          romaji: "watashi wa gakusei desu",
          en: "I am a student.",
          bn: "আমি শিক্ষার্থী।",
          correct: true,
        },
        {
          ja: "わたしは せんせいです。",
          romaji: "watashi wa sensei desu",
          en: "I am a teacher.",
          bn: "আমি শিক্ষক।",
          correct: false,
        },
        { ja: "おはよう。", romaji: "ohayou", en: "Good morning.", bn: "সুপ্রভাত।", correct: false },
      ]),
      kanaWord("わたし", "I / me", "আমি", [
        { char: "わ", romaji: "wa" },
        { char: "た", romaji: "ta" },
        { char: "し", romaji: "shi" },
      ]),
      kanjiMeet("ひと", "人", "ひと / じん", "わたしは 日本人 です。", "watashi wa nihonjin desu", "I am Japanese. (pattern only)", "আমি জাপানি। (শুধু আকৃতি)"),
      {
        kind: "talk",
        lines: [
          {
            role: "them",
            ja: "おなまえは？",
            romaji: "onamae wa?",
            meaning: bi("Your name?", "আপনার নাম?"),
          },
          you("They asked your name.", "তারা আপনার নাম জিজ্ঞেস করেছে।", [
            {
              ja: "インジャムです。",
              romaji: "Injamu desu",
              en: "I'm Injam.",
              bn: "আমি ইনজাম।",
              correct: true,
            },
            {
              ja: "おはよう。",
              romaji: "ohayou",
              en: "Good morning.",
              bn: "সুপ্রভাত।",
              correct: false,
            },
          ]),
        ],
      },
    ],
  ),

  lesson(
    "this-is",
    "people",
    U2,
    5,
    "thisis",
    bi("This is…", "এটি হলো…"),
    bi("Point at the world. The sentence stays. The thing changes.", "পৃথিবীর দিকে ইঙ্গিত করুন। বাক্য থাকে। জিনিস বদলায়।"),
    [
      scene("thisis", "A table. A book. A glass of water. A cat in the sun.", "একটি টেবিল। একটি বই। এক গ্লাস পানি। রোদে একটি বিড়াল।"),
      hear("これは ほんです。", "kore wa hon desu", "This is a book.", "এটি একটি বই।", "これは 本です。"),
      hear("これは みずです。", "kore wa mizu desu", "This is water.", "এটি পানি।", "これは 水です。"),
      hear("これは ねこです。", "kore wa neko desu", "This is a cat.", "এটি একটি বিড়াল।"),
      pattern(
        [
          ["これは ほんです。", "kore wa hon desu", "This is a book.", "এটি একটি বই।"],
          ["これは みずです。", "kore wa mizu desu", "This is water.", "এটি পানি।"],
          ["これは ねこです。", "kore wa neko desu", "This is a cat.", "এটি একটি বিড়াল।"],
        ],
        "これ is the thing near you. は points to it. です closes. Only the middle word walks away and comes back as something new.",
        "これ কাছের জিনিস। は তার দিকে ইঙ্গিত করে। です শেষ করে। শুধু মাঝের শব্দটি বদলায়।",
      ),
      useIt("You point at the water.", "আপনি পানির দিকে ইঙ্গিত করছেন।", [
        {
          ja: "これは みずです。",
          romaji: "kore wa mizu desu",
          en: "This is water.",
          bn: "এটি পানি।",
          correct: true,
        },
        {
          ja: "これは ほんです。",
          romaji: "kore wa hon desu",
          en: "This is a book.",
          bn: "এটি একটি বই।",
          correct: false,
        },
        {
          ja: "わたしは みずです。",
          romaji: "watashi wa mizu desu",
          en: "I am water.",
          bn: "আমি পানি।",
          correct: false,
        },
      ]),
      kanaWord("ねこ", "cat", "বিড়াল", [
        { char: "ね", romaji: "ne" },
        { char: "こ", romaji: "ko" },
      ]),
      kanjiMeet("みず", "水", "みず", "これは 水です。", "kore wa mizu desu", "This is water.", "এটি পানি।"),
      kanjiMeet("ほん", "本", "ほん", "これは 本です。", "kore wa hon desu", "This is a book.", "এটি একটি বই।"),
      buildWord("ねこ", "neko", "cat", "বিড়াল", ["ね", "こ", "み", "ず"]),
      {
        kind: "talk",
        lines: [
          {
            role: "them",
            ja: "これは なんですか。",
            romaji: "kore wa nan desu ka",
            meaning: bi("What is this?", "এটি কী?"),
          },
          you("They are pointing at a book.", "তারা একটি বইয়ের দিকে ইঙ্গিত করছে।", [
            {
              ja: "これは ほんです。",
              romaji: "kore wa hon desu",
              en: "This is a book.",
              bn: "এটি একটি বই।",
              correct: true,
            },
            {
              ja: "これは ねこです。",
              romaji: "kore wa neko desu",
              en: "This is a cat.",
              bn: "এটি একটি বিড়াল।",
              correct: false,
            },
          ]),
        ],
      },
    ],
  ),

  lesson(
    "family-table",
    "people",
    U2,
    6,
    "family",
    bi("Family at the table", "টেবিলে পরিবার"),
    bi("Names for the people who live with you.", "যাদের সাথে আপনি থাকেন, তাদের নাম।"),
    [
      scene("family", "Evening. Four people around a low table.", "সন্ধ্যা। নিচু টেবিলের চারপাশে চারজন।"),
      hear("こちらは おかあさんです。", "kochira wa okaasan desu", "This is my mother.", "ইনি আমার মা।"),
      hear("こちらは おとうさんです。", "kochira wa otousan desu", "This is my father.", "ইনি আমার বাবা।"),
      hear("わたしの かぞくです。", "watashi no kazoku desu", "This is my family.", "এটি আমার পরিবার।"),
      pattern(
        [
          ["おかあさん", "okaasan", "mother", "মা"],
          ["おとうさん", "otousan", "father", "বাবা"],
          ["おねえさん", "oneesan", "older sister", "বড় বোন"],
          ["おにいさん", "oniisan", "older brother", "বড় ভাই"],
          ["いもうと", "imouto", "younger sister", "ছোট বোন"],
          ["おとうと", "otouto", "younger brother", "ছোট ভাই"],
        ],
        "の sits between わたし and かぞく — it belongs. わたしの かぞく: my family. You heard it in a real room, not a list to recite.",
        "の বসে わたし ও かぞく-এর মাঝে — এটি কার। わたしの かぞく: আমার পরিবার। তালিকা নয়, একটি সত্যিকারের ঘরে শুনেছেন।",
      ),
      useIt("You introduce your mother.", "আপনি মাকে পরিচয় করাচ্ছেন।", [
        {
          ja: "こちらは おかあさんです。",
          romaji: "kochira wa okaasan desu",
          en: "This is my mother.",
          bn: "ইনি আমার মা।",
          correct: true,
        },
        {
          ja: "これは みずです。",
          romaji: "kore wa mizu desu",
          en: "This is water.",
          bn: "এটি পানি।",
          correct: false,
        },
        {
          ja: "おはよう。",
          romaji: "ohayou",
          en: "Good morning.",
          bn: "সুপ্রভাত।",
          correct: false,
        },
      ]),
      kanaWord("かぞく", "family", "পরিবার", [
        { char: "か", romaji: "ka" },
        { char: "ぞ", romaji: "zo" },
        { char: "く", romaji: "ku" },
      ]),
      {
        kind: "talk",
        lines: [
          {
            role: "them",
            ja: "ごかぞくは？",
            romaji: "gokazoku wa?",
            meaning: bi("Your family?", "আপনার পরিবার?"),
          },
          you("Answer simply.", "সহজ করে উত্তর দিন।", [
            {
              ja: "おかあさんと おとうさんです。",
              romaji: "okaasan to otousan desu",
              en: "My mother and father.",
              bn: "আমার মা ও বাবা।",
              correct: true,
            },
            {
              ja: "これは ねこです。",
              romaji: "kore wa neko desu",
              en: "This is a cat.",
              bn: "এটি একটি বিড়াল।",
              correct: false,
            },
          ]),
        ],
      },
    ],
  ),

  lesson(
    "at-home",
    "home-table",
    U3,
    7,
    "home",
    bi("At home", "বাড়িতে"),
    bi("Walk through a house with your ears.", "কানের সাথে একটি বাড়ি ঘুরে দেখুন।"),
    [
      scene("home", "A wooden doorway. Shoes at the entrance. Warm indoor light.", "কাঠের দরজা। প্রবেশে জুতা। ভেতরে উষ্ণ আলো।"),
      hear("うちに かえりました。", "uchi ni kaerimashita", "I came home.", "আমি বাড়ি ফিরেছি।"),
      hear("ここは いえです。", "koko wa ie desu", "This place is a house.", "এই জায়গাটি একটি বাড়ি।"),
      hear("へやは きれいです。", "heya wa kirei desu", "The room is tidy / pretty.", "ঘরটি পরিষ্কার / সুন্দর।"),
      hear("トイレは あそこです。", "toire wa asoko desu", "The toilet is over there.", "টয়লেট ওদিকে।"),
      pattern(
        [
          ["ここ", "koko", "here", "এখানে"],
          ["そこ", "soko", "there (near you)", "সেখানে (আপনার কাছে)"],
          ["あそこ", "asoko", "over there", "ওদিকে"],
        ],
        "ここ・そこ・あそこ follow the same family as これ. Near me, near you, over there. You locate a room the way you located a book.",
        "ここ・そこ・あそこ これ-এর একই পরিবার। আমার কাছে, আপনার কাছে, ওদিকে। বই যেমন দেখিয়েছেন, ঘরও তেমন।",
      ),
      useIt("Someone asks where the toilet is. It is over there.", "কেউ টয়লেট কোথায় জিজ্ঞেস করল। ওদিকে।", [
        {
          ja: "あそこです。",
          romaji: "asoko desu",
          en: "Over there.",
          bn: "ওদিকে।",
          correct: true,
        },
        {
          ja: "わたしは がくせいです。",
          romaji: "watashi wa gakusei desu",
          en: "I am a student.",
          bn: "আমি শিক্ষার্থী।",
          correct: false,
        },
        { ja: "おはよう。", romaji: "ohayou", en: "Good morning.", bn: "সুপ্রভাত।", correct: false },
      ]),
      kanaWord("いえ", "house", "বাড়ি", [
        { char: "い", romaji: "i" },
        { char: "え", romaji: "e" },
      ]),
      {
        kind: "talk",
        lines: [
          { role: "them", ja: "ただいま。", romaji: "tadaima", meaning: bi("I'm home.", "আমি এসেছি।") },
          you("You are the person already inside.", "আপনি ইতিমধ্যে ভিতরে আছেন।", [
            {
              ja: "おかえりなさい。",
              romaji: "okaerinasai",
              en: "Welcome home.",
              bn: "ফিরে এসে ভালো।",
              correct: true,
            },
            {
              ja: "さようなら。",
              romaji: "sayounara",
              en: "Goodbye.",
              bn: "বিদায়।",
              correct: false,
            },
          ]),
        ],
      },
    ],
  ),

  lesson(
    "eating",
    "home-table",
    U3,
    8,
    "eat",
    bi("Eating", "খাওয়া"),
    bi("Food arrives. You say a small sentence, then you eat.", "খাবার আসে। একটি ছোট বাক্য, তারপর খাওয়া।"),
    [
      scene("eat", "Rice, a small plate, chopsticks. Hands rest for a moment.", "ভাত, একটি ছোট থালা, চপস্টিক। হাত এক মুহূর্ত থামে।"),
      hear("いただきます。", "itadakimasu", "I receive this. (said before eating)", "এটি গ্রহণ করি। (খাওয়ার আগে)"),
      hear("ごはんを たべます。", "gohan o tabemasu", "I eat rice / a meal.", "আমি ভাত / খাবার খাই।"),
      hear("パンを たべます。", "pan o tabemasu", "I eat bread.", "আমি রুটি খাই।"),
      hear("おいしいです。", "oishii desu", "It's delicious.", "এটি সুস্বাদু।"),
      hear("ごちそうさまでした。", "gochisousama deshita", "Thank you for the meal.", "খাবারের জন্য ধন্যবাদ।"),
      pattern(
        [
          ["ごはんを たべます。", "gohan o tabemasu", "I eat rice.", "আমি ভাত খাই।"],
          ["パンを たべます。", "pan o tabemasu", "I eat bread.", "আমি রুটি খাই।"],
          ["りんごを たべます。", "ringo o tabemasu", "I eat an apple.", "আমি আপেল খাই।"],
        ],
        "を marks the thing you do the action to. たべます is the eating. You felt を as a small pause before the verb.",
        "を বলে কোন জিনিসের উপর কাজ হচ্ছে। たべます হলো খাওয়া। を-কে ক্রিয়ার আগে একটু থামার মতো শুনেছেন।",
      ),
      useIt("The food is in front of you. Before you start.", "খাবার সামনে। শুরুর আগে।", [
        {
          ja: "いただきます。",
          romaji: "itadakimasu",
          en: "I receive this.",
          bn: "গ্রহণ করি।",
          correct: true,
        },
        {
          ja: "ごちそうさまでした。",
          romaji: "gochisousama deshita",
          en: "Thank you for the meal. (after)",
          bn: "খাবারের ধন্যবাদ। (পরে)",
          correct: false,
        },
        { ja: "さようなら。", romaji: "sayounara", en: "Goodbye.", bn: "বিদায়।", correct: false },
      ]),
      kanaWord("たべます", "eat", "খাওয়া", [
        { char: "た", romaji: "ta" },
        { char: "べ", romaji: "be" },
        { char: "ま", romaji: "ma" },
        { char: "す", romaji: "su" },
      ]),
      kanjiMeet("たべ", "食", "たべ", "ごはんを 食べます。", "gohan o tabemasu", "I eat a meal.", "আমি খাবার খাই।"),
      {
        kind: "talk",
        lines: [
          {
            role: "them",
            ja: "どうぞ。",
            romaji: "douzo",
            meaning: bi("Please, go ahead.", "অনুগ্রহ করে, নিন।"),
          },
          you("Food is offered. Begin.", "খাবার দেওয়া হলো। শুরু করুন।", [
            {
              ja: "いただきます。",
              romaji: "itadakimasu",
              en: "I receive this.",
              bn: "গ্রহণ করি।",
              correct: true,
            },
            { ja: "おはよう。", romaji: "ohayou", en: "Good morning.", bn: "সুপ্রভাত।", correct: false },
          ]),
        ],
      },
    ],
  ),

  lesson(
    "drinking",
    "home-table",
    U3,
    9,
    "drink",
    bi("Drinking", "পান করা"),
    bi("Water, tea, coffee — same motion, different cup.", "পানি, চা, কফি — একই কাজ, আলাদা কাপ।"),
    [
      scene("drink", "A glass, a teacup, steam. Someone lifts a cup.", "এক গ্লাস, একটি চা-কাপ, ভাপ। কেউ কাপ তোলে।"),
      hear("みずを のみます。", "mizu o nomimasu", "I drink water.", "আমি পানি পান করি।", "水を 飲みます。"),
      hear("おちゃを のみます。", "ocha o nomimasu", "I drink tea.", "আমি চা পান করি।"),
      hear("コーヒーを のみます。", "koohii o nomimasu", "I drink coffee.", "আমি কফি পান করি।"),
      pattern(
        [
          ["みずを のみます。", "mizu o nomimasu", "I drink water.", "আমি পানি পান করি।"],
          ["おちゃを のみます。", "ocha o nomimasu", "I drink tea.", "আমি চা পান করি।"],
          ["コーヒーを のみます。", "koohii o nomimasu", "I drink coffee.", "আমি কফি পান করি।"],
        ],
        "たべます was eating. のみます is drinking. Same を, same calm ending ます. Your mouth already knows the rhythm.",
        "たべます ছিল খাওয়া। のみます হলো পান করা। একই を, একই শান্ত ます। ছন্দ মুখ আগেই চেনে।",
      ),
      useIt("You are thirsty. You want water.", "তৃষ্ণা পেয়েছে। পানি চান।", [
        {
          ja: "みずを のみます。",
          romaji: "mizu o nomimasu",
          en: "I drink water.",
          bn: "আমি পানি পান করি।",
          correct: true,
        },
        {
          ja: "ごはんを たべます。",
          romaji: "gohan o tabemasu",
          en: "I eat rice.",
          bn: "আমি ভাত খাই।",
          correct: false,
        },
        { ja: "こんにちは。", romaji: "konnichiwa", en: "Hello.", bn: "হ্যালো।", correct: false },
      ]),
      kanaWord("みず", "water", "পানি", [
        { char: "み", romaji: "mi" },
        { char: "ず", romaji: "zu" },
      ]),
      kanjiMeet("のむ", "飲", "のむ", "水を 飲みます。", "mizu o nomimasu", "I drink water.", "আমি পানি পান করি।"),
      buildWord("みず", "mizu", "water", "পানি", ["み", "ず", "ね", "こ"]),
      {
        kind: "talk",
        lines: [
          {
            role: "them",
            ja: "なにを のみますか。",
            romaji: "nani o nomimasu ka",
            meaning: bi("What will you drink?", "কী পান করবেন?"),
          },
          you("You would like tea.", "আপনি চা চান।", [
            {
              ja: "おちゃを のみます。",
              romaji: "ocha o nomimasu",
              en: "I'll drink tea.",
              bn: "চা পান করব।",
              correct: true,
            },
            {
              ja: "パンを たべます。",
              romaji: "pan o tabemasu",
              en: "I'll eat bread.",
              bn: "রুটি খাব।",
              correct: false,
            },
          ]),
        ],
      },
    ],
  ),

  lesson(
    "going",
    "home-table",
    U3,
    10,
    "go",
    bi("Going somewhere", "কোথাও যাওয়া"),
    bi("A door opens. You are on your way.", "দরজা খোলে। আপনি পথে।"),
    [
      scene("go", "A bag by the door. Morning street. A station in the distance.", "দরজার কাছে ব্যাগ। সকালের রাস্তা। দূরে স্টেশন।"),
      hear("がっこうに いきます。", "gakkou ni ikimasu", "I go to school.", "আমি স্কুলে যাই।", "学校に 行きます。"),
      hear("えきに いきます。", "eki ni ikimasu", "I go to the station.", "আমি স্টেশনে যাই।"),
      hear("うちに かえります。", "uchi ni kaerimasu", "I return home.", "আমি বাড়ি ফিরি।"),
      hear("きのう いきました。", "kinou ikimashita", "I went yesterday.", "গতকাল গিয়েছিলাম।"),
      pattern(
        [
          ["がっこうに いきます。", "gakkou ni ikimasu", "I go to school.", "আমি স্কুলে যাই।"],
          ["えきに いきます。", "eki ni ikimasu", "I go to the station.", "আমি স্টেশনে যাই।"],
          ["うちに かえります。", "uchi ni kaerimasu", "I return home.", "আমি বাড়ি ফিরি।"],
        ],
        "に marks where you are headed. いきます goes; かえります comes home. ました makes it already done — いきました.",
        "に বলে আপনি কোনদিকে যাচ্ছেন। いきます যায়; かえります বাড়ি ফেরে। ました মানে ইতিমধ্যে হয়ে গেছে — いきました।",
      ),
      useIt("It is morning. You leave for school.", "সকাল। স্কুলের উদ্দেশ্যে বেরোন।", [
        {
          ja: "がっこうに いきます。",
          romaji: "gakkou ni ikimasu",
          en: "I go to school.",
          bn: "আমি স্কুলে যাই।",
          correct: true,
        },
        {
          ja: "うちに かえります。",
          romaji: "uchi ni kaerimasu",
          en: "I return home.",
          bn: "আমি বাড়ি ফিরি।",
          correct: false,
        },
        {
          ja: "みずを のみます。",
          romaji: "mizu o nomimasu",
          en: "I drink water.",
          bn: "আমি পানি পান করি।",
          correct: false,
        },
      ]),
      kanaWord("いきます", "go", "যাওয়া", [
        { char: "い", romaji: "i" },
        { char: "き", romaji: "ki" },
        { char: "ま", romaji: "ma" },
        { char: "す", romaji: "su" },
      ]),
      kanjiMeet("いく", "行", "いく", "学校に 行きます。", "gakkou ni ikimasu", "I go to school.", "আমি স্কুলে যাই।"),
      {
        kind: "talk",
        lines: [
          {
            role: "them",
            ja: "どこに いきますか。",
            romaji: "doko ni ikimasu ka",
            meaning: bi("Where are you going?", "কোথায় যাচ্ছেন?"),
          },
          you("You are going to the station.", "আপনি স্টেশনে যাচ্ছেন।", [
            {
              ja: "えきに いきます。",
              romaji: "eki ni ikimasu",
              en: "To the station.",
              bn: "স্টেশনে।",
              correct: true,
            },
            {
              ja: "おいしいです。",
              romaji: "oishii desu",
              en: "It's delicious.",
              bn: "সুস্বাদু।",
              correct: false,
            },
          ]),
        ],
      },
    ],
  ),
];
