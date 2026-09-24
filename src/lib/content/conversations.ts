import type { Dialogue, TalkLine } from "./types";
import { bi } from "./helpers";

function them(ja: string, romaji: string, en: string, bn: string): TalkLine {
  return { role: "them", ja, romaji, meaning: bi(en, bn) };
}

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

export const dialogues: Dialogue[] = [
  {
    id: "hello-name",
    title: bi("Hello, what is your name?", "হ্যালো, নাম কী?"),
    place: bi("A quiet hallway", "শান্ত করিডোর"),
    art: "meet",
    lines: [
      them("こんにちは。", "konnichiwa", "Hello.", "হ্যালো।"),
      you("It is daytime. Greet back.", "দিনের বেলা। অভিবাদন ফেরান।", [
        { ja: "こんにちは。", romaji: "konnichiwa", en: "Hello.", bn: "হ্যালো।", correct: true },
        { ja: "おやすみなさい。", romaji: "oyasuminasai", en: "Good night.", bn: "শুভ রাত্রি।", correct: false },
      ]),
      them("おなまえは？", "onamae wa?", "Your name?", "আপনার নাম?"),
      you("Say who you are.", "নিজেকে বলুন।", [
        { ja: "インジャムです。", romaji: "Injamu desu", en: "I'm Injam.", bn: "আমি ইনজাম।", correct: true },
        { ja: "みずです。", romaji: "mizu desu", en: "I'm water.", bn: "আমি পানি।", correct: false },
      ]),
    ],
  },
  {
    id: "first-meet",
    title: bi("A first meeting", "প্রথম দেখা"),
    place: bi("At the school gate", "স্কুল গেটে"),
    art: "meet",
    lines: [
      them("はじめまして。", "hajimemashite", "Nice to meet you.", "দেখা হয়ে ভালো লাগল।"),
      you("Return the first meeting.", "প্রথম দেখা ফেরান।", [
        {
          ja: "はじめまして。 どうぞ よろしく。",
          romaji: "hajimemashite. douzo yoroshiku",
          en: "Nice to meet you too.",
          bn: "আমারও ভালো লাগল।",
          correct: true,
        },
        { ja: "ただいま。", romaji: "tadaima", en: "I'm home.", bn: "আমি এসেছি।", correct: false },
      ]),
      them("どこから きましたか。", "doko kara kimashita ka", "Where did you come from?", "কোথা থেকে এসেছেন?"),
      you("You came from Bangladesh.", "বাংলাদেশ থেকে এসেছেন।", [
        {
          ja: "バングラデシュから きました。",
          romaji: "Banguradeshu kara kimashita",
          en: "I came from Bangladesh.",
          bn: "বাংলাদেশ থেকে এসেছি।",
          correct: true,
        },
        { ja: "おいしいです。", romaji: "oishii desu", en: "It's delicious.", bn: "সুস্বাদু।", correct: false },
      ]),
    ],
  },
  {
    id: "morning-home",
    title: bi("Morning at home", "বাড়িতে সকাল"),
    place: bi("Kitchen", "রান্নাঘর"),
    art: "morning",
    lines: [
      them("おはよう。", "ohayou", "Good morning.", "সুপ্রভাত।"),
      you("Family morning.", "পরিবারের সকাল।", [
        { ja: "おはよう。", romaji: "ohayou", en: "Good morning.", bn: "সুপ্রভাত।", correct: true },
        { ja: "こんばんは。", romaji: "konbanwa", en: "Good evening.", bn: "শুভ সন্ধ্যা।", correct: false },
      ]),
      them("あさごはんは？", "asagohan wa?", "Breakfast?", "সকালের খাবার?"),
      you("You will eat.", "খাবেন।", [
        { ja: "たべます。", romaji: "tabemasu", en: "I'll eat.", bn: "খাব।", correct: true },
        { ja: "ねます。", romaji: "nemasu", en: "I'll sleep.", bn: "ঘুমাব।", correct: false },
      ]),
    ],
  },
  {
    id: "shop-water",
    title: bi("Buying water", "পানি কেনা"),
    place: bi("A corner shop", "মোড়ের দোকান"),
    art: "shop",
    lines: [
      them("いらっしゃいませ。", "irasshaimase", "Welcome.", "স্বাগতম।"),
      you("You need water.", "পানি দরকার।", [
        { ja: "みずを ください。", romaji: "mizu o kudasai", en: "Water, please.", bn: "পানি দিন।", correct: true },
        { ja: "おやすみ。", romaji: "oyasumi", en: "Good night.", bn: "শুভ রাত্রি।", correct: false },
      ]),
      them("はい、 どうぞ。 ひゃくえんです。", "hai, douzo. hyaku en desu", "Here. 100 yen.", "নিন। ১০০ ইয়েন।"),
      you("Thank them.", "ধন্যবাদ জানান।", [
        {
          ja: "ありがとう ございます。",
          romaji: "arigatou gozaimasu",
          en: "Thank you.",
          bn: "ধন্যবাদ।",
          correct: true,
        },
        { ja: "さようなら。", romaji: "sayounara", en: "Goodbye.", bn: "বিদায়।", correct: false },
      ]),
    ],
  },
  {
    id: "where-school",
    title: bi("Where is the school?", "স্কুল কোথায়?"),
    place: bi("A street", "রাস্তা"),
    art: "ask",
    lines: [
      them("すみません。", "sumimasen", "Excuse me.", "মাফ করবেন।"),
      you("They need help. Listen first — they will ask.", "সাহায্য চাইছে। আগে শুনুন।", [
        { ja: "はい。", romaji: "hai", en: "Yes?", bn: "হ্যাঁ?", correct: true },
        { ja: "いいえ、 ねこです。", romaji: "iie, neko desu", en: "No, it's a cat.", bn: "না, বিড়াল।", correct: false },
      ]),
      them("がっこうは どこですか。", "gakkou wa doko desu ka", "Where is the school?", "স্কুল কোথায়?"),
      you("It is over there.", "ওদিকে।", [
        { ja: "あそこです。", romaji: "asoko desu", en: "Over there.", bn: "ওদিকে।", correct: true },
        { ja: "さんじです。", romaji: "sanji desu", en: "It's 3 o'clock.", bn: "তিনটা।", correct: false },
      ]),
    ],
  },
  {
    id: "time-station",
    title: bi("Time at the station", "স্টেশনে সময়"),
    place: bi("Platform", "প্ল্যাটফর্ম"),
    art: "time",
    lines: [
      them("いま なんじですか。", "ima nanji desu ka", "What time is it?", "এখন কটা বাজে?"),
      you("The clock says 8.", "ঘড়িতে ৮।", [
        { ja: "はちじです。", romaji: "hachiji desu", en: "It's 8.", bn: "৮টা।", correct: true },
        { ja: "みずです。", romaji: "mizu desu", en: "It's water.", bn: "পানি।", correct: false },
      ]),
      them("ありがとう。", "arigatou", "Thanks.", "ধন্যবাদ।"),
      you("A small close.", "ছোট সমাপ্তি।", [
        { ja: "どういたしまして。", romaji: "dou itashimashite", en: "You're welcome.", bn: "আপনাকেও।", correct: true },
        { ja: "いただきます。", romaji: "itadakimasu", en: "Let's eat.", bn: "খাওয়া শুরু।", correct: false },
      ]),
    ],
  },
  {
    id: "cafe",
    title: bi("At a cafe", "ক্যাফেতে"),
    place: bi("A small cafe", "ছোট ক্যাফে"),
    art: "drink",
    lines: [
      them("いらしゃいませ。 なんめいさま？", "irasshaimase. nanmei sama?", "Welcome. How many people?", "স্বাগতম। কজন?"),
      you("Just you.", "শুধু আপনি।", [
        { ja: "ひとりです。", romaji: "hitori desu", en: "One person.", bn: "একজন।", correct: true },
        { ja: "がっこうです。", romaji: "gakkou desu", en: "It's school.", bn: "স্কুল।", correct: false },
      ]),
      them("ごちゅうもんは？", "gochuumon wa?", "Your order?", "অর্ডার?"),
      you("Coffee.", "কফি।", [
        { ja: "コーヒーを ください。", romaji: "koohii o kudasai", en: "Coffee, please.", bn: "কফি দিন।", correct: true },
        { ja: "ねます。", romaji: "nemasu", en: "I sleep.", bn: "ঘুমাই।", correct: false },
      ]),
    ],
  },
  {
    id: "coming-home-talk",
    title: bi("I'm home", "আমি এসেছি"),
    place: bi("The genkan", "গেঙ্কান"),
    art: "return",
    lines: [
      them("おかえりなさい。", "okaerinasai", "Welcome home.", "ফিরে এসে ভালো।"),
      you("You just walked in.", "এইমাত্র ঢুকলেন।", [
        { ja: "ただいま。", romaji: "tadaima", en: "I'm home.", bn: "আমি এসেছি।", correct: true },
        { ja: "いってきます。", romaji: "ittekimasu", en: "I'm heading out.", bn: "বেরোচ্ছি।", correct: false },
      ]),
      them("つかれた？", "tsukareta?", "Tired?", "ক্লান্ত?"),
      you("A little.", "একটু।", [
        { ja: "はい、 ちょっと。", romaji: "hai, chotto", en: "Yes, a little.", bn: "হ্যাঁ, একটু।", correct: true },
        { ja: "これは ほんです。", romaji: "kore wa hon desu", en: "This is a book.", bn: "এটি বই।", correct: false },
      ]),
    ],
  },
  {
    id: "classroom",
    title: bi("In class", "ক্লাসে"),
    place: bi("Classroom", "শ্রেণিকক্ষ"),
    art: "school",
    lines: [
      them("わかりましたか。", "wakarimashita ka", "Did you understand?", "বুঝেছেন?"),
      you("Not yet. Ask kindly.", "এখনও না। সদয়ভাবে চান।", [
        {
          ja: "もう いちど おねがいします。",
          romaji: "mou ichido onegaishimasu",
          en: "Once more, please.",
          bn: "আরেকবার।",
          correct: true,
        },
        { ja: "さようなら。", romaji: "sayounara", en: "Goodbye.", bn: "বিদায়।", correct: false },
      ]),
      them("これは 本です。", "kore wa hon desu", "This is a book.", "এটি একটি বই।"),
      you("Now you understand.", "এখন বুঝেছেন।", [
        { ja: "はい、 わかりました。", romaji: "hai, wakarimashita", en: "Yes, I understood.", bn: "হ্যাঁ, বুঝেছি।", correct: true },
        { ja: "さむいです。", romaji: "samui desu", en: "It's cold.", bn: "ঠান্ডা।", correct: false },
      ]),
    ],
  },
  {
    id: "likes-chat",
    title: bi("What do you like?", "কী পছন্দ?"),
    place: bi("A park bench", "পার্কের বেঞ্চ"),
    art: "like",
    lines: [
      them("なにが すきですか。", "nani ga suki desu ka", "What do you like?", "কী পছন্দ?"),
      you("Cats.", "বিড়াল।", [
        { ja: "ねこが すきです。", romaji: "neko ga suki desu", en: "I like cats.", bn: "বিড়াল পছন্দ।", correct: true },
        { ja: "がっこうに いきます。", romaji: "gakkou ni ikimasu", en: "I go to school.", bn: "স্কুলে যাই।", correct: false },
      ]),
      them("わたしも！", "watashi mo!", "Me too!", "আমিও!"),
      you("Share the feeling.", "অনুভূতি ভাগ করুন।", [
        { ja: "いいですね。", romaji: "ii desu ne", en: "That's nice.", bn: "ভালো।", correct: true },
        { ja: "いくらですか。", romaji: "ikura desu ka", en: "How much?", bn: "কত?", correct: false },
      ]),
    ],
  },
  {
    id: "restaurant",
    title: bi("A simple order", "সহজ অর্ডার"),
    place: bi("Ramen shop", "রামেন দোকান"),
    art: "food",
    lines: [
      them("いらっしゃいませ。", "irasshaimase", "Welcome.", "স্বাগতম।"),
      you("Ask for the menu.", "মেনু চান।", [
        { ja: "メニューを ください。", romaji: "menyu o kudasai", en: "Menu, please.", bn: "মেনু দিন।", correct: true },
        { ja: "おやすみなさい。", romaji: "oyasuminasai", en: "Good night.", bn: "শুভ রাত্রি।", correct: false },
      ]),
      them("どうぞ。", "douzo", "Here you are.", "নিন।"),
      you("Order ramen.", "রামেন অর্ডার করুন।", [
        { ja: "ラーメンを ください。", romaji: "raamen o kudasai", en: "Ramen, please.", bn: "রামেন দিন।", correct: true },
        { ja: "がくせいです。", romaji: "gakusei desu", en: "I'm a student.", bn: "শিক্ষার্থী।", correct: false },
      ]),
    ],
  },
  {
    id: "leaving",
    title: bi("Heading out", "বেরোনো"),
    place: bi("By the door", "দরজার কাছে"),
    art: "go",
    lines: [
      them("どこに いくの？", "doko ni iku no?", "Where are you going?", "কোথায় যাচ্ছ?"),
      you("To school.", "স্কুলে।", [
        { ja: "がっこうに いきます。", romaji: "gakkou ni ikimasu", en: "To school.", bn: "স্কুলে।", correct: true },
        { ja: "ねます。", romaji: "nemasu", en: "I sleep.", bn: "ঘুমাই।", correct: false },
      ]),
      you("You are leaving the house.", "বাড়ি থেকে বেরোচ্ছেন।", [
        { ja: "いってきます。", romaji: "ittekimasu", en: "I'm heading out.", bn: "আমি বেরোচ্ছি।", correct: true },
        { ja: "ただいま。", romaji: "tadaima", en: "I'm home.", bn: "আমি এসেছি।", correct: false },
      ]),
      them("いってらっしゃい。", "itterasshai", "Take care / see you.", "গিয়ে এসো।"),
    ],
  },
];
