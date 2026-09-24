import { a as hear, c as lesson, d as scene, f as useIt, i as guess, l as opt, n as buildWord, o as kanaWord, r as copy, s as kanjiMeet, t as bi, u as pattern } from "./helpers-x31JXuOZ.mjs";
import { t as dialogues } from "./conversations-BZh4Sfom.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/content-DTcfiWqU.js
var U1 = bi("First mornings", "প্রথম সকাল");
var U2 = bi("People around you", "আপনার চারপাশের মানুষ");
var U3 = bi("Home and table", "বাড়ি ও টেবিল");
function you$1(promptEn, promptBn, options) {
	return {
		role: "you",
		prompt: bi(promptEn, promptBn),
		options: options.map((o) => ({
			ja: o.ja,
			romaji: o.romaji,
			meaning: bi(o.en, o.bn),
			correct: o.correct
		}))
	};
}
var lessonsA = [
	lesson("morning-light", "first-mornings", U1, 1, "morning", bi("Morning light", "সকালের আলো"), bi("Someone wakes up. Listen before you know the words.", "কেউ ঘুম থেকে ওঠে। শব্দ জানার আগে শুনুন।"), [
		scene("morning", "A quiet room. Light comes in. Someone sits up in bed.", "একটি শান্ত ঘর। আলো ঢুকছে। কেউ বিছানা থেকে উঠে বসে।"),
		hear("おはよう。", "ohayou", "Good morning.", "সুপ্রভাত।"),
		guess("おはよう。", "ohayou", "Good morning.", "সুপ্রভাত।", "What is happening in this room?", "এই ঘরে কী হচ্ছে?", [
			opt("おはよう。", "Someone is greeting the morning.", "কেউ সকালের অভিবাদন করছে।", true),
			opt("おやすみ。", "Someone is going to sleep.", "কেউ ঘুমাতে যাচ্ছে।", false),
			opt("いただきます。", "Someone is starting a meal.", "কেউ খাওয়া শুরু করছে।", false)
		]),
		copy("おはよう。", "ohayou", "Good morning.", "সুপ্রভাত।"),
		scene("meet", "Later, at the door. A student sees a teacher.", "পরে, দরজায়। এক শিক্ষার্থী শিক্ষককে দেখে।"),
		hear("おはようございます。", "ohayou gozaimasu", "Good morning. (careful, polite)", "সুপ্রভাত। (যত্নশীল, ভদ্র)"),
		pattern([[
			"おはよう。",
			"ohayou",
			"Good morning. (to a friend, family)",
			"সুপ্রভাত। (বন্ধু, পরিবার)"
		], [
			"おはようございます。",
			"ohayou gozaimasu",
			"Good morning. (a little more careful)",
			"সুপ্রভাত। (একটু বেশি যত্নশীল)"
		]], "You already felt the difference. The longer one is the same morning feeling, said more carefully.", "পার্থক্য আপনি আগেই অনুভব করেছেন। লম্বাটা একই সকালের অনুভূতি, শুধু আরও যত্ন করে বলা।"),
		useIt("You wake up and see your friend. What do you say?", "ঘুম থেকে উঠে বন্ধুকে দেখলেন। কী বলবেন?", [
			{
				ja: "おはよう。",
				romaji: "ohayou",
				en: "Good morning.",
				bn: "সুপ্রভাত।",
				correct: true
			},
			{
				ja: "おやすみ。",
				romaji: "oyasumi",
				en: "Good night.",
				bn: "শুভ রাত্রি।",
				correct: false
			},
			{
				ja: "さようなら。",
				romaji: "sayounara",
				en: "Goodbye.",
				bn: "বিদায়।",
				correct: false
			}
		]),
		kanaWord("おはよう", "good morning", "সুপ্রভাত", [
			{
				char: "お",
				romaji: "o"
			},
			{
				char: "は",
				romaji: "ha"
			},
			{
				char: "よ",
				romaji: "yo"
			},
			{
				char: "う",
				romaji: "u"
			}
		]),
		buildWord("おはよう", "ohayou", "good morning", "সুপ্রভাত", [
			"お",
			"は",
			"よ",
			"う",
			"ん",
			"こ"
		]),
		{
			kind: "talk",
			lines: [{
				role: "them",
				ja: "おはよう。",
				romaji: "ohayou",
				meaning: bi("Good morning.", "সুপ্রভাত।")
			}, you$1("Your friend said good morning. Answer.", "বন্ধু সুপ্রভাত বলেছে। উত্তর দিন।", [{
				ja: "おはよう。",
				romaji: "ohayou",
				en: "Good morning.",
				bn: "সুপ্রভাত।",
				correct: true
			}, {
				ja: "こんにちは。",
				romaji: "konnichiwa",
				en: "Hello (daytime).",
				bn: "হ্যালো (দিনের বেলা)।",
				correct: false
			}])]
		}
	]),
	lesson("day-and-night", "first-mornings", U1, 2, "day", bi("Day and night", "দিন ও রাত"), bi("The same people, different light, different greetings.", "একই মানুষ, আলাদা আলো, আলাদা অভিবাদন।"), [
		scene("day", "Noon. Two people pass on a quiet street.", "দুপুর। শান্ত রাস্তায় দুজন মানুষ একে অপরকে দেখে।"),
		hear("こんにちは。", "konnichiwa", "Hello. / Good afternoon.", "হ্যালো। / শুভ দুপুর।"),
		guess("こんにちは。", "konnichiwa", "Hello. / Good afternoon.", "হ্যালো। / শুভ দুপুর।", "When is this greeting living?", "এই অভিবাদন কোন সময়ের?", [
			opt("", "In the middle of the day.", "দিনের মাঝখানে।", true),
			opt("", "When someone just woke up.", "যখন কেউ সদ্য ঘুম থেকে উঠেছে।", false),
			opt("", "When the lights are off for sleep.", "যখন ঘুমের জন্য আলো নিভিয়ে দেওয়া।", false)
		]),
		copy("こんにちは。", "konnichiwa", "Hello. / Good afternoon.", "হ্যালো। / শুভ দুপুর।"),
		scene("night", "Evening. A shop is closing. Someone bows slightly.", "সন্ধ্যা। দোকান বন্ধ হচ্ছে। কেউ হালকা নত হয়।"),
		hear("こんばんは。", "konbanwa", "Good evening.", "শুভ সন্ধ্যা।"),
		scene("night", "Later. Someone turns toward a dark room.", "পরে। কেউ অন্ধকার ঘরের দিকে ঘুরে।"),
		hear("おやすみなさい。", "oyasuminasai", "Good night.", "শুভ রাত্রি।"),
		pattern([
			[
				"おはよう。",
				"ohayou",
				"Morning",
				"সকাল"
			],
			[
				"こんにちは。",
				"konnichiwa",
				"Daytime",
				"দিন"
			],
			[
				"こんばんは。",
				"konbanwa",
				"Evening",
				"সন্ধ্যা"
			],
			[
				"おやすみなさい。",
				"oyasuminasai",
				"Before sleep",
				"ঘুমানোর আগে"
			]
		], "Japanese greetings follow the light, not a single hello for every hour.", "জাপানি অভিবাদন আলোর সাথে চলে, সব সময়ের জন্য একটি হ্যালো নয়।"),
		useIt("It is evening. You meet a neighbor.", "সন্ধ্যা। প্রতিবেশীর সাথে দেখা।", [
			{
				ja: "こんばんは。",
				romaji: "konbanwa",
				en: "Good evening.",
				bn: "শুভ সন্ধ্যা।",
				correct: true
			},
			{
				ja: "おはよう。",
				romaji: "ohayou",
				en: "Good morning.",
				bn: "সুপ্রভাত।",
				correct: false
			},
			{
				ja: "おやすみなさい。",
				romaji: "oyasuminasai",
				en: "Good night.",
				bn: "শুভ রাত্রি।",
				correct: false
			}
		]),
		kanaWord("こんにちは", "hello (day)", "হ্যালো (দিন)", [
			{
				char: "こ",
				romaji: "ko"
			},
			{
				char: "ん",
				romaji: "n"
			},
			{
				char: "に",
				romaji: "ni"
			},
			{
				char: "ち",
				romaji: "chi"
			},
			{
				char: "は",
				romaji: "wa"
			}
		]),
		{
			kind: "talk",
			lines: [
				{
					role: "narrator",
					ja: "",
					romaji: "",
					meaning: bi("It is afternoon.", "এখন দুপুর।")
				},
				{
					role: "them",
					ja: "こんにちは。",
					romaji: "konnichiwa",
					meaning: bi("Hello.", "হ্যালো।")
				},
				you$1("Answer in the same light.", "একই আলোয় উত্তর দিন।", [{
					ja: "こんにちは。",
					romaji: "konnichiwa",
					en: "Hello.",
					bn: "হ্যালো।",
					correct: true
				}, {
					ja: "おはよう。",
					romaji: "ohayou",
					en: "Good morning.",
					bn: "সুপ্রভাত।",
					correct: false
				}])
			]
		}
	]),
	lesson("first-meeting", "first-mornings", U1, 3, "meet", bi("Meeting someone", "কারও সাথে দেখা"), bi("A first meeting is slow, warm, and short.", "প্রথম দেখা ধীর, উষ্ণ এবং ছোট।"), [
		scene("meet", "Two people face each other for the first time.", "দুজন মানুষ প্রথমবার মুখোমুখি।"),
		hear("はじめまして。", "hajimemashite", "Nice to meet you. (first time)", "আপনার সাথে দেখা হয়ে ভালো লাগল। (প্রথমবার)"),
		copy("はじめまして。", "hajimemashite", "Nice to meet you.", "আপনার সাথে দেখা হয়ে ভালো লাগল।"),
		hear("どうぞ よろしく。", "douzo yoroshiku", "Please treat me kindly. / I look forward to this.", "অনুগ্রহ করে ভালো রাখবেন। / এগিয়ে যেতে চাই।"),
		guess("はじめまして。", "hajimemashite", "Nice to meet you.", "আপনার সাথে দেখা হয়ে ভালো লাগল।", "When does this sentence live?", "এই বাক্যটি কখন বাঁচে?", [
			opt("", "The first time you meet someone.", "যখন প্রথমবার কারও সাথে দেখা হয়।", true),
			opt("", "Every morning with family.", "পরিবারের সাথে প্রতি সকালে।", false),
			opt("", "When you buy bread.", "যখন রুটি কেনেন।", false)
		]),
		pattern([[
			"はじめまして。",
			"hajimemashite",
			"This is our first meeting.",
			"এটি আমাদের প্রথম দেখা।"
		], [
			"どうぞ よろしく。",
			"douzo yoroshiku",
			"Please take care of me from here.",
			"এখন থেকে যত্ন করে রাখবেন।"
		]], "You do not need to unpack every word. Together they mean: we are starting.", "প্রতিটি শব্দ খুলে ফেলতে হবে না। একসাথে এদের মানে: আমরা শুরু করছি।"),
		useIt("You meet someone for the first time. Start.", "কারও সাথে প্রথম দেখা। শুরু করুন।", [
			{
				ja: "はじめまして。",
				romaji: "hajimemashite",
				en: "Nice to meet you.",
				bn: "দেখা হয়ে ভালো লাগল।",
				correct: true
			},
			{
				ja: "おはよう。",
				romaji: "ohayou",
				en: "Good morning.",
				bn: "সুপ্রভাত।",
				correct: false
			},
			{
				ja: "いただきます。",
				romaji: "itadakimasu",
				en: "Let's eat.",
				bn: "খাওয়া শুরু।",
				correct: false
			}
		]),
		kanaWord("はじめまして", "nice to meet you", "দেখা হয়ে ভালো লাগল", [
			{
				char: "は",
				romaji: "ha"
			},
			{
				char: "じ",
				romaji: "ji"
			},
			{
				char: "め",
				romaji: "me"
			},
			{
				char: "ま",
				romaji: "ma"
			},
			{
				char: "し",
				romaji: "shi"
			},
			{
				char: "て",
				romaji: "te"
			}
		]),
		{
			kind: "talk",
			lines: [{
				role: "them",
				ja: "はじめまして。",
				romaji: "hajimemashite",
				meaning: bi("Nice to meet you.", "দেখা হয়ে ভালো লাগল।")
			}, you$1("Return the first meeting.", "প্রথম দেখার উত্তর দিন।", [{
				ja: "はじめまして。 どうぞ よろしく。",
				romaji: "hajimemashite. douzo yoroshiku",
				en: "Nice to meet you too.",
				bn: "আমারও দেখা হয়ে ভালো লাগল।",
				correct: true
			}, {
				ja: "おやすみ。",
				romaji: "oyasumi",
				en: "Good night.",
				bn: "শুভ রাত্রি।",
				correct: false
			}])]
		}
	]),
	lesson("this-is-me", "people", U2, 4, "introduce", bi("This is me", "এটি আমি"), bi("Say who you are. Hear the shape, then notice it.", "নিজেকে বলুন। আকৃতি শুনুন, তারপর লক্ষ্য করুন।"), [
		scene("introduce", "A small circle of people. Someone says their name.", "ছোট একটি বৃত্ত। কেউ নিজের নাম বলে।"),
		hear("わたしは インジャムです。", "watashi wa Injamu desu", "I am Injam.", "আমি ইনজাম।"),
		copy("わたしは がくせいです。", "watashi wa gakusei desu", "I am a student.", "আমি একজন শিক্ষার্থী।"),
		hear("わたしは バングラデシュじんです。", "watashi wa Banguradeshu-jin desu", "I am Bangladeshi.", "আমি বাংলাদেশি।"),
		pattern([
			[
				"わたしは インジャムです。",
				"watashi wa Injamu desu",
				"I am Injam.",
				"আমি ইনজাম।"
			],
			[
				"わたしは がくせいです。",
				"watashi wa gakusei desu",
				"I am a student.",
				"আমি একজন শিক্ষার্থী।"
			],
			[
				"わたしは バングলাデシュじんです。",
				"watashi wa Banguradeshu-jin desu",
				"I am Bangladeshi.",
				"আমি বাংলাদেশি।"
			]
		], "わたしは marks who we are talking about. です sits at the end, gently finishing the sentence. You already heard both several times.", "わたしは বলে আমরা কার কথা বলছি। です বাক্যের শেষে বসে, আলতো করে শেষ করে। দুটোই আপনি কয়েকবার শুনেছেন।"),
		useIt("Someone asks who you are. You are a student.", "কেউ জিজ্ঞেস করল আপনি কে। আপনি শিক্ষার্থী।", [
			{
				ja: "わたしは がくせいです。",
				romaji: "watashi wa gakusei desu",
				en: "I am a student.",
				bn: "আমি শিক্ষার্থী।",
				correct: true
			},
			{
				ja: "わたしは せんせいです。",
				romaji: "watashi wa sensei desu",
				en: "I am a teacher.",
				bn: "আমি শিক্ষক।",
				correct: false
			},
			{
				ja: "おはよう。",
				romaji: "ohayou",
				en: "Good morning.",
				bn: "সুপ্রভাত।",
				correct: false
			}
		]),
		kanaWord("わたし", "I / me", "আমি", [
			{
				char: "わ",
				romaji: "wa"
			},
			{
				char: "た",
				romaji: "ta"
			},
			{
				char: "し",
				romaji: "shi"
			}
		]),
		kanjiMeet("ひと", "人", "ひと / じん", "わたしは 日本人 です。", "watashi wa nihonjin desu", "I am Japanese. (pattern only)", "আমি জাপানি। (শুধু আকৃতি)"),
		{
			kind: "talk",
			lines: [{
				role: "them",
				ja: "おなまえは？",
				romaji: "onamae wa?",
				meaning: bi("Your name?", "আপনার নাম?")
			}, you$1("They asked your name.", "তারা আপনার নাম জিজ্ঞেস করেছে।", [{
				ja: "インジャムです。",
				romaji: "Injamu desu",
				en: "I'm Injam.",
				bn: "আমি ইনজাম।",
				correct: true
			}, {
				ja: "おはよう。",
				romaji: "ohayou",
				en: "Good morning.",
				bn: "সুপ্রভাত।",
				correct: false
			}])]
		}
	]),
	lesson("this-is", "people", U2, 5, "thisis", bi("This is…", "এটি হলো…"), bi("Point at the world. The sentence stays. The thing changes.", "পৃথিবীর দিকে ইঙ্গিত করুন। বাক্য থাকে। জিনিস বদলায়।"), [
		scene("thisis", "A table. A book. A glass of water. A cat in the sun.", "একটি টেবিল। একটি বই। এক গ্লাস পানি। রোদে একটি বিড়াল।"),
		hear("これは ほんです。", "kore wa hon desu", "This is a book.", "এটি একটি বই।", "これは 本です。"),
		hear("これは みずです。", "kore wa mizu desu", "This is water.", "এটি পানি।", "これは 水です。"),
		hear("これは ねこです。", "kore wa neko desu", "This is a cat.", "এটি একটি বিড়াল।"),
		pattern([
			[
				"これは ほんです。",
				"kore wa hon desu",
				"This is a book.",
				"এটি একটি বই।"
			],
			[
				"これは みずです。",
				"kore wa mizu desu",
				"This is water.",
				"এটি পানি।"
			],
			[
				"これは ねこです。",
				"kore wa neko desu",
				"This is a cat.",
				"এটি একটি বিড়াল।"
			]
		], "これ is the thing near you. は points to it. です closes. Only the middle word walks away and comes back as something new.", "これ কাছের জিনিস। は তার দিকে ইঙ্গিত করে। です শেষ করে। শুধু মাঝের শব্দটি বদলায়।"),
		useIt("You point at the water.", "আপনি পানির দিকে ইঙ্গিত করছেন।", [
			{
				ja: "これは みずです。",
				romaji: "kore wa mizu desu",
				en: "This is water.",
				bn: "এটি পানি।",
				correct: true
			},
			{
				ja: "これは ほんです。",
				romaji: "kore wa hon desu",
				en: "This is a book.",
				bn: "এটি একটি বই।",
				correct: false
			},
			{
				ja: "わたしは みずです。",
				romaji: "watashi wa mizu desu",
				en: "I am water.",
				bn: "আমি পানি।",
				correct: false
			}
		]),
		kanaWord("ねこ", "cat", "বিড়াল", [{
			char: "ね",
			romaji: "ne"
		}, {
			char: "こ",
			romaji: "ko"
		}]),
		kanjiMeet("みず", "水", "みず", "これは 水です。", "kore wa mizu desu", "This is water.", "এটি পানি।"),
		kanjiMeet("ほん", "本", "ほん", "これは 本です。", "kore wa hon desu", "This is a book.", "এটি একটি বই।"),
		buildWord("ねこ", "neko", "cat", "বিড়াল", [
			"ね",
			"こ",
			"み",
			"ず"
		]),
		{
			kind: "talk",
			lines: [{
				role: "them",
				ja: "これは なんですか。",
				romaji: "kore wa nan desu ka",
				meaning: bi("What is this?", "এটি কী?")
			}, you$1("They are pointing at a book.", "তারা একটি বইয়ের দিকে ইঙ্গিত করছে।", [{
				ja: "これは ほんです。",
				romaji: "kore wa hon desu",
				en: "This is a book.",
				bn: "এটি একটি বই।",
				correct: true
			}, {
				ja: "これは ねこです。",
				romaji: "kore wa neko desu",
				en: "This is a cat.",
				bn: "এটি একটি বিড়াল।",
				correct: false
			}])]
		}
	]),
	lesson("family-table", "people", U2, 6, "family", bi("Family at the table", "টেবিলে পরিবার"), bi("Names for the people who live with you.", "যাদের সাথে আপনি থাকেন, তাদের নাম।"), [
		scene("family", "Evening. Four people around a low table.", "সন্ধ্যা। নিচু টেবিলের চারপাশে চারজন।"),
		hear("こちらは おかあさんです。", "kochira wa okaasan desu", "This is my mother.", "ইনি আমার মা।"),
		hear("こちらは おとうさんです。", "kochira wa otousan desu", "This is my father.", "ইনি আমার বাবা।"),
		hear("わたしの かぞくです。", "watashi no kazoku desu", "This is my family.", "এটি আমার পরিবার।"),
		pattern([
			[
				"おかあさん",
				"okaasan",
				"mother",
				"মা"
			],
			[
				"おとうさん",
				"otousan",
				"father",
				"বাবা"
			],
			[
				"おねえさん",
				"oneesan",
				"older sister",
				"বড় বোন"
			],
			[
				"おにいさん",
				"oniisan",
				"older brother",
				"বড় ভাই"
			],
			[
				"いもうと",
				"imouto",
				"younger sister",
				"ছোট বোন"
			],
			[
				"おとうと",
				"otouto",
				"younger brother",
				"ছোট ভাই"
			]
		], "の sits between わたし and かぞく — it belongs. わたしの かぞく: my family. You heard it in a real room, not a list to recite.", "の বসে わたし ও かぞく-এর মাঝে — এটি কার। わたしの かぞく: আমার পরিবার। তালিকা নয়, একটি সত্যিকারের ঘরে শুনেছেন।"),
		useIt("You introduce your mother.", "আপনি মাকে পরিচয় করাচ্ছেন।", [
			{
				ja: "こちらは おかあさんです。",
				romaji: "kochira wa okaasan desu",
				en: "This is my mother.",
				bn: "ইনি আমার মা।",
				correct: true
			},
			{
				ja: "これは みずです。",
				romaji: "kore wa mizu desu",
				en: "This is water.",
				bn: "এটি পানি।",
				correct: false
			},
			{
				ja: "おはよう。",
				romaji: "ohayou",
				en: "Good morning.",
				bn: "সুপ্রভাত।",
				correct: false
			}
		]),
		kanaWord("かぞく", "family", "পরিবার", [
			{
				char: "か",
				romaji: "ka"
			},
			{
				char: "ぞ",
				romaji: "zo"
			},
			{
				char: "く",
				romaji: "ku"
			}
		]),
		{
			kind: "talk",
			lines: [{
				role: "them",
				ja: "ごかぞくは？",
				romaji: "gokazoku wa?",
				meaning: bi("Your family?", "আপনার পরিবার?")
			}, you$1("Answer simply.", "সহজ করে উত্তর দিন।", [{
				ja: "おかあさんと おとうさんです。",
				romaji: "okaasan to otousan desu",
				en: "My mother and father.",
				bn: "আমার মা ও বাবা।",
				correct: true
			}, {
				ja: "これは ねこです。",
				romaji: "kore wa neko desu",
				en: "This is a cat.",
				bn: "এটি একটি বিড়াল।",
				correct: false
			}])]
		}
	]),
	lesson("at-home", "home-table", U3, 7, "home", bi("At home", "বাড়িতে"), bi("Walk through a house with your ears.", "কানের সাথে একটি বাড়ি ঘুরে দেখুন।"), [
		scene("home", "A wooden doorway. Shoes at the entrance. Warm indoor light.", "কাঠের দরজা। প্রবেশে জুতা। ভেতরে উষ্ণ আলো।"),
		hear("うちに かえりました。", "uchi ni kaerimashita", "I came home.", "আমি বাড়ি ফিরেছি।"),
		hear("ここは いえです。", "koko wa ie desu", "This place is a house.", "এই জায়গাটি একটি বাড়ি।"),
		hear("へやは きれいです。", "heya wa kirei desu", "The room is tidy / pretty.", "ঘরটি পরিষ্কার / সুন্দর।"),
		hear("トイレは あそこです。", "toire wa asoko desu", "The toilet is over there.", "টয়লেট ওদিকে।"),
		pattern([
			[
				"ここ",
				"koko",
				"here",
				"এখানে"
			],
			[
				"そこ",
				"soko",
				"there (near you)",
				"সেখানে (আপনার কাছে)"
			],
			[
				"あそこ",
				"asoko",
				"over there",
				"ওদিকে"
			]
		], "ここ・そこ・あそこ follow the same family as これ. Near me, near you, over there. You locate a room the way you located a book.", "ここ・そこ・あそこ これ-এর একই পরিবার। আমার কাছে, আপনার কাছে, ওদিকে। বই যেমন দেখিয়েছেন, ঘরও তেমন।"),
		useIt("Someone asks where the toilet is. It is over there.", "কেউ টয়লেট কোথায় জিজ্ঞেস করল। ওদিকে।", [
			{
				ja: "あそこです。",
				romaji: "asoko desu",
				en: "Over there.",
				bn: "ওদিকে।",
				correct: true
			},
			{
				ja: "わたしは がくせいです。",
				romaji: "watashi wa gakusei desu",
				en: "I am a student.",
				bn: "আমি শিক্ষার্থী।",
				correct: false
			},
			{
				ja: "おはよう。",
				romaji: "ohayou",
				en: "Good morning.",
				bn: "সুপ্রভাত।",
				correct: false
			}
		]),
		kanaWord("いえ", "house", "বাড়ি", [{
			char: "い",
			romaji: "i"
		}, {
			char: "え",
			romaji: "e"
		}]),
		{
			kind: "talk",
			lines: [{
				role: "them",
				ja: "ただいま。",
				romaji: "tadaima",
				meaning: bi("I'm home.", "আমি এসেছি।")
			}, you$1("You are the person already inside.", "আপনি ইতিমধ্যে ভিতরে আছেন।", [{
				ja: "おかえりなさい。",
				romaji: "okaerinasai",
				en: "Welcome home.",
				bn: "ফিরে এসে ভালো।",
				correct: true
			}, {
				ja: "さようなら。",
				romaji: "sayounara",
				en: "Goodbye.",
				bn: "বিদায়।",
				correct: false
			}])]
		}
	]),
	lesson("eating", "home-table", U3, 8, "eat", bi("Eating", "খাওয়া"), bi("Food arrives. You say a small sentence, then you eat.", "খাবার আসে। একটি ছোট বাক্য, তারপর খাওয়া।"), [
		scene("eat", "Rice, a small plate, chopsticks. Hands rest for a moment.", "ভাত, একটি ছোট থালা, চপস্টিক। হাত এক মুহূর্ত থামে।"),
		hear("いただきます。", "itadakimasu", "I receive this. (said before eating)", "এটি গ্রহণ করি। (খাওয়ার আগে)"),
		hear("ごはんを たべます。", "gohan o tabemasu", "I eat rice / a meal.", "আমি ভাত / খাবার খাই।"),
		hear("パンを たべます。", "pan o tabemasu", "I eat bread.", "আমি রুটি খাই।"),
		hear("おいしいです。", "oishii desu", "It's delicious.", "এটি সুস্বাদু।"),
		hear("ごちそうさまでした。", "gochisousama deshita", "Thank you for the meal.", "খাবারের জন্য ধন্যবাদ।"),
		pattern([
			[
				"ごはんを たべます。",
				"gohan o tabemasu",
				"I eat rice.",
				"আমি ভাত খাই।"
			],
			[
				"パンを たべます。",
				"pan o tabemasu",
				"I eat bread.",
				"আমি রুটি খাই।"
			],
			[
				"りんごを たべます。",
				"ringo o tabemasu",
				"I eat an apple.",
				"আমি আপেল খাই।"
			]
		], "を marks the thing you do the action to. たべます is the eating. You felt を as a small pause before the verb.", "を বলে কোন জিনিসের উপর কাজ হচ্ছে। たべます হলো খাওয়া। を-কে ক্রিয়ার আগে একটু থামার মতো শুনেছেন।"),
		useIt("The food is in front of you. Before you start.", "খাবার সামনে। শুরুর আগে।", [
			{
				ja: "いただきます。",
				romaji: "itadakimasu",
				en: "I receive this.",
				bn: "গ্রহণ করি।",
				correct: true
			},
			{
				ja: "ごちそうさまでした。",
				romaji: "gochisousama deshita",
				en: "Thank you for the meal. (after)",
				bn: "খাবারের ধন্যবাদ। (পরে)",
				correct: false
			},
			{
				ja: "さようなら。",
				romaji: "sayounara",
				en: "Goodbye.",
				bn: "বিদায়।",
				correct: false
			}
		]),
		kanaWord("たべます", "eat", "খাওয়া", [
			{
				char: "た",
				romaji: "ta"
			},
			{
				char: "べ",
				romaji: "be"
			},
			{
				char: "ま",
				romaji: "ma"
			},
			{
				char: "す",
				romaji: "su"
			}
		]),
		kanjiMeet("たべ", "食", "たべ", "ごはんを 食べます。", "gohan o tabemasu", "I eat a meal.", "আমি খাবার খাই।"),
		{
			kind: "talk",
			lines: [{
				role: "them",
				ja: "どうぞ。",
				romaji: "douzo",
				meaning: bi("Please, go ahead.", "অনুগ্রহ করে, নিন।")
			}, you$1("Food is offered. Begin.", "খাবার দেওয়া হলো। শুরু করুন।", [{
				ja: "いただきます。",
				romaji: "itadakimasu",
				en: "I receive this.",
				bn: "গ্রহণ করি।",
				correct: true
			}, {
				ja: "おはよう。",
				romaji: "ohayou",
				en: "Good morning.",
				bn: "সুপ্রভাত।",
				correct: false
			}])]
		}
	]),
	lesson("drinking", "home-table", U3, 9, "drink", bi("Drinking", "পান করা"), bi("Water, tea, coffee — same motion, different cup.", "পানি, চা, কফি — একই কাজ, আলাদা কাপ।"), [
		scene("drink", "A glass, a teacup, steam. Someone lifts a cup.", "এক গ্লাস, একটি চা-কাপ, ভাপ। কেউ কাপ তোলে।"),
		hear("みずを のみます。", "mizu o nomimasu", "I drink water.", "আমি পানি পান করি।", "水を 飲みます。"),
		hear("おちゃを のみます。", "ocha o nomimasu", "I drink tea.", "আমি চা পান করি।"),
		hear("コーヒーを のみます。", "koohii o nomimasu", "I drink coffee.", "আমি কফি পান করি।"),
		pattern([
			[
				"みずを のみます。",
				"mizu o nomimasu",
				"I drink water.",
				"আমি পানি পান করি।"
			],
			[
				"おちゃを のみます。",
				"ocha o nomimasu",
				"I drink tea.",
				"আমি চা পান করি।"
			],
			[
				"コーヒーを のみます。",
				"koohii o nomimasu",
				"I drink coffee.",
				"আমি কফি পান করি।"
			]
		], "たべます was eating. のみます is drinking. Same を, same calm ending ます. Your mouth already knows the rhythm.", "たべます ছিল খাওয়া। のみます হলো পান করা। একই を, একই শান্ত ます। ছন্দ মুখ আগেই চেনে।"),
		useIt("You are thirsty. You want water.", "তৃষ্ণা পেয়েছে। পানি চান।", [
			{
				ja: "みずを のみます。",
				romaji: "mizu o nomimasu",
				en: "I drink water.",
				bn: "আমি পানি পান করি।",
				correct: true
			},
			{
				ja: "ごはんを たべます。",
				romaji: "gohan o tabemasu",
				en: "I eat rice.",
				bn: "আমি ভাত খাই।",
				correct: false
			},
			{
				ja: "こんにちは。",
				romaji: "konnichiwa",
				en: "Hello.",
				bn: "হ্যালো।",
				correct: false
			}
		]),
		kanaWord("みず", "water", "পানি", [{
			char: "み",
			romaji: "mi"
		}, {
			char: "ず",
			romaji: "zu"
		}]),
		kanjiMeet("のむ", "飲", "のむ", "水を 飲みます。", "mizu o nomimasu", "I drink water.", "আমি পানি পান করি।"),
		buildWord("みず", "mizu", "water", "পানি", [
			"み",
			"ず",
			"ね",
			"こ"
		]),
		{
			kind: "talk",
			lines: [{
				role: "them",
				ja: "なにを のみますか。",
				romaji: "nani o nomimasu ka",
				meaning: bi("What will you drink?", "কী পান করবেন?")
			}, you$1("You would like tea.", "আপনি চা চান।", [{
				ja: "おちゃを のみます。",
				romaji: "ocha o nomimasu",
				en: "I'll drink tea.",
				bn: "চা পান করব।",
				correct: true
			}, {
				ja: "パンを たべます。",
				romaji: "pan o tabemasu",
				en: "I'll eat bread.",
				bn: "রুটি খাব।",
				correct: false
			}])]
		}
	]),
	lesson("going", "home-table", U3, 10, "go", bi("Going somewhere", "কোথাও যাওয়া"), bi("A door opens. You are on your way.", "দরজা খোলে। আপনি পথে।"), [
		scene("go", "A bag by the door. Morning street. A station in the distance.", "দরজার কাছে ব্যাগ। সকালের রাস্তা। দূরে স্টেশন।"),
		hear("がっこうに いきます。", "gakkou ni ikimasu", "I go to school.", "আমি স্কুলে যাই।", "学校に 行きます。"),
		hear("えきに いきます。", "eki ni ikimasu", "I go to the station.", "আমি স্টেশনে যাই।"),
		hear("うちに かえります。", "uchi ni kaerimasu", "I return home.", "আমি বাড়ি ফিরি।"),
		hear("きのう いきました。", "kinou ikimashita", "I went yesterday.", "গতকাল গিয়েছিলাম।"),
		pattern([
			[
				"がっこうに いきます。",
				"gakkou ni ikimasu",
				"I go to school.",
				"আমি স্কুলে যাই।"
			],
			[
				"えきに いきます。",
				"eki ni ikimasu",
				"I go to the station.",
				"আমি স্টেশনে যাই।"
			],
			[
				"うちに かえります。",
				"uchi ni kaerimasu",
				"I return home.",
				"আমি বাড়ি ফিরি।"
			]
		], "に marks where you are headed. いきます goes; かえります comes home. ました makes it already done — いきました.", "に বলে আপনি কোনদিকে যাচ্ছেন। いきます যায়; かえります বাড়ি ফেরে। ました মানে ইতিমধ্যে হয়ে গেছে — いきました।"),
		useIt("It is morning. You leave for school.", "সকাল। স্কুলের উদ্দেশ্যে বেরোন।", [
			{
				ja: "がっこうに いきます。",
				romaji: "gakkou ni ikimasu",
				en: "I go to school.",
				bn: "আমি স্কুলে যাই।",
				correct: true
			},
			{
				ja: "うちに かえります。",
				romaji: "uchi ni kaerimasu",
				en: "I return home.",
				bn: "আমি বাড়ি ফিরি।",
				correct: false
			},
			{
				ja: "みずを のみます。",
				romaji: "mizu o nomimasu",
				en: "I drink water.",
				bn: "আমি পানি পান করি।",
				correct: false
			}
		]),
		kanaWord("いきます", "go", "যাওয়া", [
			{
				char: "い",
				romaji: "i"
			},
			{
				char: "き",
				romaji: "ki"
			},
			{
				char: "ま",
				romaji: "ma"
			},
			{
				char: "す",
				romaji: "su"
			}
		]),
		kanjiMeet("いく", "行", "いく", "学校に 行きます。", "gakkou ni ikimasu", "I go to school.", "আমি স্কুলে যাই।"),
		{
			kind: "talk",
			lines: [{
				role: "them",
				ja: "どこに いきますか。",
				romaji: "doko ni ikimasu ka",
				meaning: bi("Where are you going?", "কোথায় যাচ্ছেন?")
			}, you$1("You are going to the station.", "আপনি স্টেশনে যাচ্ছেন।", [{
				ja: "えきに いきます。",
				romaji: "eki ni ikimasu",
				en: "To the station.",
				bn: "স্টেশনে।",
				correct: true
			}, {
				ja: "おいしいです。",
				romaji: "oishii desu",
				en: "It's delicious.",
				bn: "সুস্বাদু।",
				correct: false
			}])]
		}
	])
];
var U4 = bi("Out in the town", "শহরে বাইরে");
var U5 = bi("Asking the world", "পৃথিবীকে জিজ্ঞেস");
var U6 = bi("School days", "স্কুলের দিন");
var U7 = bi("Living the day", "দিন যাপন");
function you(promptEn, promptBn, options) {
	return {
		role: "you",
		prompt: bi(promptEn, promptBn),
		options: options.map((o) => ({
			ja: o.ja,
			romaji: o.romaji,
			meaning: bi(o.en, o.bn),
			correct: o.correct
		}))
	};
}
var lessonsB = [
	lesson("coming-home", "town", U4, 11, "return", bi("Coming home", "বাড়ি ফেরা"), bi("The day folds. You walk back through the same door.", "দিন গুটিয়ে আসে। একই দরজা দিয়ে ফিরে আসেন।"), [
		scene("return", "Dusk. A familiar door. A light already on inside.", "গোধূলি। চেনা দরজা। ভেতরে আলো জ্বলে আছে।"),
		hear("うちに かえります。", "uchi ni kaerimasu", "I go home.", "আমি বাড়ি ফিরি।"),
		hear("いま かえります。", "ima kaerimasu", "I'm going home now.", "এখনই বাড়ি ফিরছি।"),
		hear("きょうは つかれました。", "kyou wa tsukaremashita", "Today I got tired.", "আজ ক্লান্ত হয়েছি।"),
		copy("ただいま。", "tadaima", "I'm home.", "আমি এসেছি।"),
		hear("おかえりなさい。", "okaerinasai", "Welcome home.", "ফিরে এসে ভালো।"),
		pattern([
			[
				"いきます",
				"ikimasu",
				"go (away from here)",
				"যাওয়া (এখান থেকে)"
			],
			[
				"きます",
				"kimasu",
				"come (toward here)",
				"আসা (এখান দিকে)"
			],
			[
				"かえります",
				"kaerimasu",
				"return home",
				"বাড়ি ফেরা"
			]
		], "Japanese cares which way the body is facing. かえります is not just 'go' — it is the path back to where you live.", "জাপানি ভাষা শরীর কোনদিকে মুখ করে আছে তা খেয়াল রাখে। かえります শুধু 'যাওয়া' নয় — যেখানে আপনি থাকেন সেখানে ফেরার পথ।"),
		useIt("You open the door. People are already inside.", "দরজা খুললেন। ভিতরে মানুষ আছে।", [
			{
				ja: "ただいま。",
				romaji: "tadaima",
				en: "I'm home.",
				bn: "আমি এসেছি।",
				correct: true
			},
			{
				ja: "いってきます。",
				romaji: "ittekimasu",
				en: "I'm heading out.",
				bn: "আমি বেরোচ্ছি।",
				correct: false
			},
			{
				ja: "こんにちは。",
				romaji: "konnichiwa",
				en: "Hello.",
				bn: "হ্যালো।",
				correct: false
			}
		]),
		kanjiMeet("くる", "来", "くる", "あした 来ます。", "ashita kimasu", "I will come tomorrow.", "আগামীকাল আসব।"),
		{
			kind: "talk",
			lines: [{
				role: "them",
				ja: "もう かえりますか。",
				romaji: "mou kaerimasu ka",
				meaning: bi("Are you going home already?", "এত তাড়াতাড়ি বাড়ি ফিরছেন?")
			}, you("Yes — you are heading home.", "হ্যাঁ — বাড়ি ফিরছেন।", [{
				ja: "はい、 かえります。",
				romaji: "hai, kaerimasu",
				en: "Yes, I'm going home.",
				bn: "হ্যাঁ, বাড়ি ফিরছি।",
				correct: true
			}, {
				ja: "いいえ、 みずです。",
				romaji: "iie, mizu desu",
				en: "No, it's water.",
				bn: "না, এটি পানি।",
				correct: false
			}])]
		}
	]),
	lesson("shopping", "town", U4, 12, "shop", bi("Shopping", "কেনাকাটা"), bi("A small shop. You point, you ask, you receive.", "ছোট দোকান। ইঙ্গিত, প্রশ্ন, গ্রহণ।"), [
		scene("shop", "Shelves, a counter, a paper bag. Someone waits, not rushing.", "তাক, কাউন্টার, কাগজের ব্যাগ। কেউ অপেক্ষা করছে, তাড়াহুড়ো নেই।"),
		hear("すみません。", "sumimasen", "Excuse me.", "মাফ করবেন।"),
		hear("これを ください。", "kore o kudasai", "This one, please.", "এটি দিন, অনুগ্রহ করে।"),
		hear("いくらですか。", "ikura desu ka", "How much is it?", "এটি কত?"),
		hear("ひゃくえんです。", "hyaku en desu", "It's 100 yen.", "১০০ ইয়েন।"),
		hear("ありがとう ございます。", "arigatou gozaimasu", "Thank you.", "ধন্যবাদ।"),
		pattern([
			[
				"これを ください。",
				"kore o kudasai",
				"This, please.",
				"এটি দিন।"
			],
			[
				"みずを ください。",
				"mizu o kudasai",
				"Water, please.",
				"পানি দিন।"
			],
			[
				"パンを ください。",
				"pan o kudasai",
				"Bread, please.",
				"রুটি দিন।"
			]
		], "ください is a hand held out. か at the end of いくらですか turns it into a question. You already heard か when someone asked なんですか.", "ください হলো এগিয়ে দেওয়া হাত। いくらですか-এর শেষে か একে প্রশ্ন করে। なんですか-তে か আগেই শুনেছেন।"),
		useIt("You want that item on the counter.", "কাউন্টারের সেই জিনিসটি চান।", [
			{
				ja: "これを ください。",
				romaji: "kore o kudasai",
				en: "This, please.",
				bn: "এটি দিন।",
				correct: true
			},
			{
				ja: "おはよう。",
				romaji: "ohayou",
				en: "Good morning.",
				bn: "সুপ্রভাত।",
				correct: false
			},
			{
				ja: "おやすみなさい。",
				romaji: "oyasuminasai",
				en: "Good night.",
				bn: "শুভ রাত্রি।",
				correct: false
			}
		]),
		kanaWord("ください", "please give me", "দয়া করে দিন", [
			{
				char: "く",
				romaji: "ku"
			},
			{
				char: "だ",
				romaji: "da"
			},
			{
				char: "さ",
				romaji: "sa"
			},
			{
				char: "い",
				romaji: "i"
			}
		]),
		{
			kind: "talk",
			lines: [
				{
					role: "them",
					ja: "いらっしゃいませ。",
					romaji: "irasshaimase",
					meaning: bi("Welcome (to the shop).", "স্বাগতম (দোকানে)।")
				},
				you("You want this, and you need the price.", "এটি চান, দামও জানতে চান।", [{
					ja: "これを ください。 いくらですか。",
					romaji: "kore o kudasai. ikura desu ka",
					en: "This, please. How much?",
					bn: "এটি দিন। কত?",
					correct: true
				}, {
					ja: "わたしは ねこです。",
					romaji: "watashi wa neko desu",
					en: "I am a cat.",
					bn: "আমি একটি বিড়াল।",
					correct: false
				}]),
				{
					role: "them",
					ja: "さんびゃくえんです。",
					romaji: "sanbyaku en desu",
					meaning: bi("300 yen.", "৩০০ ইয়েন।")
				},
				you("Receive it kindly.", "কৃতজ্ঞভাবে নিন।", [{
					ja: "ありがとう ございます。",
					romaji: "arigatou gozaimasu",
					en: "Thank you.",
					bn: "ধন্যবাদ।",
					correct: true
				}, {
					ja: "さようなら。",
					romaji: "sayounara",
					en: "Goodbye.",
					bn: "বিদায়।",
					correct: false
				}])
			]
		}
	]),
	lesson("simple-questions", "asking", U5, 13, "ask", bi("Asking simple questions", "সহজ প্রশ্ন"), bi("What, who, where — three doors you can open.", "কী, কে, কোথায় — তিনটি দরজা।"), [
		scene("ask", "A street corner. Someone looks around, then asks.", "রাস্তার মোড়। কেউ চারদিকে দেখে, তারপর জিজ্ঞেস করে।"),
		hear("それは なんですか。", "sore wa nan desu ka", "What is that?", "ওটি কী?"),
		hear("だれですか。", "dare desu ka", "Who is it?", "কে?"),
		hear("どこですか。", "doko desu ka", "Where is it?", "কোথায়?"),
		hear("いつ いきますか。", "itsu ikimasu ka", "When will you go?", "কখন যাবেন?"),
		hear("はい。", "hai", "Yes.", "হ্যাঁ।"),
		hear("いいえ。", "iie", "No.", "না।"),
		pattern([
			[
				"なん / なに",
				"nan / nani",
				"what",
				"কী"
			],
			[
				"だれ",
				"dare",
				"who",
				"কে"
			],
			[
				"どこ",
				"doko",
				"where",
				"কোথায়"
			],
			[
				"いつ",
				"itsu",
				"when",
				"কখন"
			]
		], "A Japanese question often keeps the same sentence and only adds か. Listen: どこです。 then どこですか。 The rise lives at the end.", "জাপানি প্রশ্ন প্রায়ই একই বাক্য রাখে, শুধু か যোগ করে। শুনুন: どこです। তারপর どこですか। উঠে যাওয়া শেষে থাকে।"),
		useIt("You don't know what that thing is.", "ওই জিনিসটি কী জানেন না।", [
			{
				ja: "それは なんですか。",
				romaji: "sore wa nan desu ka",
				en: "What is that?",
				bn: "ওটি কী?",
				correct: true
			},
			{
				ja: "それは ねこです。",
				romaji: "sore wa neko desu",
				en: "That is a cat.",
				bn: "ওটি একটি বিড়াল।",
				correct: false
			},
			{
				ja: "おはよう。",
				romaji: "ohayou",
				en: "Good morning.",
				bn: "সুপ্রভাত।",
				correct: false
			}
		]),
		guess("どこですか。", "doko desu ka", "Where is it?", "কোথায়?", "This question is looking for…", "এই প্রশ্ন খুঁজছে…", [
			opt("", "A place.", "একটি জায়গা।", true),
			opt("", "A time of day.", "দিনের একটি সময়।", false),
			opt("", "A person's name.", "কারও নাম।", false)
		]),
		{
			kind: "talk",
			lines: [{
				role: "them",
				ja: "がっこうは どこですか。",
				romaji: "gakkou wa doko desu ka",
				meaning: bi("Where is the school?", "স্কুল কোথায়?")
			}, you("Point over there.", "ওদিকে ইঙ্গিত করুন।", [{
				ja: "あそこです。",
				romaji: "asoko desu",
				en: "Over there.",
				bn: "ওদিকে।",
				correct: true
			}, {
				ja: "おいしいです。",
				romaji: "oishii desu",
				en: "It's delicious.",
				bn: "সুস্বাদু।",
				correct: false
			}])]
		}
	]),
	lesson("what-time", "asking", U5, 14, "time", bi("What time is it", "এখন কটা বাজে"), bi("Time is a sound you hear in stations and kitchens.", "সময় স্টেশন ও রান্নাঘরে শোনা একটি শব্দ।"), [
		scene("time", "A round clock on a kitchen wall. Morning light on the numbers.", "রান্নাঘরের দেয়ালে ঘড়ি। সংখ্যার উপর সকালের আলো।"),
		hear("いま なんじですか。", "ima nanji desu ka", "What time is it now?", "এখন কটা বাজে?"),
		hear("いちじです。", "ichiji desu", "It's one o'clock.", "একটা বাজে।"),
		hear("さんじです。", "sanji desu", "It's three o'clock.", "তিনটা বাজে।"),
		hear("じゅうじです。", "juuji desu", "It's ten o'clock.", "দশটা বাজে।"),
		hear("はん です。", "han desu", "It's half past.", "সাড়ে।"),
		hear("くじはん です。", "kuji han desu", "It's 9:30.", "সাড়ে নয়টা।"),
		pattern([
			[
				"いちじ",
				"ichiji",
				"1 o'clock",
				"১টা"
			],
			[
				"にじ",
				"niji",
				"2 o'clock",
				"২টা"
			],
			[
				"さんじ",
				"sanji",
				"3 o'clock",
				"৩টা"
			],
			[
				"よじ",
				"yoji",
				"4 o'clock",
				"৪টা"
			],
			[
				"ごじ",
				"goji",
				"5 o'clock",
				"৫টা"
			],
			[
				"ろくじ",
				"rokuji",
				"6 o'clock",
				"৬টা"
			],
			[
				"しちじ",
				"shichiji",
				"7 o'clock",
				"৭টা"
			],
			[
				"はちじ",
				"hachiji",
				"8 o'clock",
				"৮টা"
			],
			[
				"くじ",
				"kuji",
				"9 o'clock",
				"৯টা"
			],
			[
				"じゅうじ",
				"juuji",
				"10 o'clock",
				"১০টা"
			],
			[
				"じゅういちじ",
				"juuichiji",
				"11 o'clock",
				"১১টা"
			],
			[
				"じゅうにじ",
				"juuniji",
				"12 o'clock",
				"১২টা"
			]
		], "じ rides after the number and turns it into o'clock. はん is the half. You do not need to chant them — you will meet them on clocks.", "じ সংখ্যার পরে বসে তাকে ঘড়ির সময় করে। はん হলো অর্ধেক। মুখস্থ তালিকা নয় — ঘড়িতে এদের সাথে দেখা হবে।"),
		useIt("Someone asks the time. The clock says 3.", "কেউ সময় জিজ্ঞেস করল। ঘড়িতে ৩।", [
			{
				ja: "さんじです。",
				romaji: "sanji desu",
				en: "It's 3 o'clock.",
				bn: "তিনটা বাজে।",
				correct: true
			},
			{
				ja: "みずです。",
				romaji: "mizu desu",
				en: "It's water.",
				bn: "এটি পানি।",
				correct: false
			},
			{
				ja: "はい。",
				romaji: "hai",
				en: "Yes.",
				bn: "হ্যাঁ।",
				correct: false
			}
		]),
		kanjiMeet("じ", "時", "じ", "いま 何時ですか。", "ima nanji desu ka", "What time is it now?", "এখন কটা বাজে?"),
		{
			kind: "talk",
			lines: [{
				role: "them",
				ja: "いま なんじですか。",
				romaji: "ima nanji desu ka",
				meaning: bi("What time is it?", "এখন কটা বাজে?")
			}, you("It is 7 o'clock.", "এখন ৭টা।", [{
				ja: "しちじです。",
				romaji: "shichiji desu",
				en: "It's 7.",
				bn: "৭টা।",
				correct: true
			}, {
				ja: "ねこです。",
				romaji: "neko desu",
				en: "It's a cat.",
				bn: "বিড়াল।",
				correct: false
			}])]
		}
	]),
	lesson("counting-life", "asking", U5, 15, "numbers", bi("Numbers in life", "জীবনের সংখ্যা"), bi("Count things you can hold, not a naked list.", "হাতে ধরা যায় এমন জিনিস গণনা করুন, খালি তালিকা নয়।"), [
		scene("numbers", "Apples on a plate. Coins on a counter. Fingers unfolding.", "থালায় আপেল। কাউন্টারে মুদ্রা। আঙুল খুলছে।"),
		hear("ひとつ ください。", "hitotsu kudasai", "One, please. (of this thing)", "একটি দিন।"),
		hear("ふたつ ください。", "futatsu kudasai", "Two, please.", "দুটি দিন।"),
		hear("みっつ ください。", "mittsu kudasai", "Three, please.", "তিনটি দিন।"),
		hear("いち、 に、 さん。", "ichi, ni, san", "One, two, three.", "এক, দুই, তিন।"),
		hear("これ にこ です。", "kore niko desu", "These are two small things. (you'll hear こ later)", "এগুলো দুটি ছোট জিনিস।"),
		pattern([
			[
				"いち",
				"ichi",
				"1",
				"১"
			],
			[
				"に",
				"ni",
				"2",
				"২"
			],
			[
				"さん",
				"san",
				"3",
				"৩"
			],
			[
				"よん / し",
				"yon / shi",
				"4",
				"৪"
			],
			[
				"ご",
				"go",
				"5",
				"৫"
			],
			[
				"ろく",
				"roku",
				"6",
				"৬"
			],
			[
				"なな / しち",
				"nana / shichi",
				"7",
				"৭"
			],
			[
				"はち",
				"hachi",
				"8",
				"৮"
			],
			[
				"きゅう / く",
				"kyuu / ku",
				"9",
				"৯"
			],
			[
				"じゅう",
				"juu",
				"10",
				"১০"
			]
		], "ひとつ ふたつ みっつ is how you ask for pieces of something. いち に さん is the backbone you will hear in prices and time. Both live in shops, not in a chart.", "ひとつ ふたつ みっつ দিয়ে টুকরো চাওয়া হয়। いち に さん দাম ও সময়ের মেরুদণ্ড। দুটোই দোকানে বাঁচে, চার্টে নয়।"),
		useIt("You want two of those apples.", "সেই আপেল দুটি চান।", [
			{
				ja: "ふたつ ください。",
				romaji: "futatsu kudasai",
				en: "Two, please.",
				bn: "দুটি দিন।",
				correct: true
			},
			{
				ja: "おやすみなさい。",
				romaji: "oyasuminasai",
				en: "Good night.",
				bn: "শুভ রাত্রি।",
				correct: false
			},
			{
				ja: "わたしは がくせいです。",
				romaji: "watashi wa gakusei desu",
				en: "I am a student.",
				bn: "আমি শিক্ষার্থী।",
				correct: false
			}
		]),
		kanjiMeet("いち", "一", "いち", "一つ ください。", "hitotsu kudasai", "One, please.", "একটি দিন।"),
		kanjiMeet("に", "二", "に", "二つ ください。", "futatsu kudasai", "Two, please.", "দুটি দিন।"),
		kanjiMeet("さん", "三", "さん", "三つ ください。", "mittsu kudasai", "Three, please.", "তিনটি দিন।")
	]),
	lesson("at-school", "school", U6, 16, "school", bi("At school", "স্কুলে"), bi("A classroom is full of names you already almost know.", "শ্রেণিকক্ষে এমন নাম যেগুলো আপনি প্রায় চেনেন।"), [
		scene("school", "Desks in rows. A board. Morning light on paper.", "সারিতে ডেস্ক। একটি বোর্ড। কাগজে সকালের আলো।"),
		hear("ここは がっこうです。", "koko wa gakkou desu", "This is a school.", "এটি একটি স্কুল।", "ここは 学校です。"),
		hear("あの ひとは せんせいです。", "ano hito wa sensei desu", "That person is a teacher.", "ঐ ব্যক্তি একজন শিক্ষক।"),
		hear("わたしは がくせいです。", "watashi wa gakusei desu", "I am a student.", "আমি একজন শিক্ষার্থী।"),
		hear("にほんごを べんきょうします。", "nihongo o benkyou shimasu", "I study Japanese.", "আমি জাপানি পড়ি।"),
		hear("わかりました。", "wakarimashita", "I understood.", "বুঝেছি।"),
		hear("もう いちど おねがいします。", "mou ichido onegaishimasu", "Once more, please.", "আরেকবার, অনুগ্রহ করে।"),
		pattern([
			[
				"せんせい",
				"sensei",
				"teacher",
				"শিক্ষক"
			],
			[
				"がくせい",
				"gakusei",
				"student",
				"শিক্ষার্থী"
			],
			[
				"がっこう",
				"gakkou",
				"school",
				"স্কুল"
			],
			[
				"べんきょうします",
				"benkyou shimasu",
				"study",
				"পড়াশোনা করা"
			]
		], "わかりました is the feeling of a window opening. If it did not open, もう いちど — one more time — is a complete, kind sentence.", "わかりました হলো জানালা খোলার অনুভূতি। না খুললে もう いちど — আরেকবার — একটি পূর্ণ, সদয় বাক্য।"),
		useIt("You did not catch the sentence.", "বাক্যটি ধরতে পারেননি।", [
			{
				ja: "もう いちど おねがいします。",
				romaji: "mou ichido onegaishimasu",
				en: "Once more, please.",
				bn: "আরেকবার।",
				correct: true
			},
			{
				ja: "さようなら。",
				romaji: "sayounara",
				en: "Goodbye.",
				bn: "বিদায়।",
				correct: false
			},
			{
				ja: "おいしいです。",
				romaji: "oishii desu",
				en: "Delicious.",
				bn: "সুস্বাদু।",
				correct: false
			}
		]),
		kanjiMeet("がっこう", "学校", "がっこう", "学校に 行きます。", "gakkou ni ikimasu", "I go to school.", "আমি স্কুলে যাই।"),
		kanjiMeet("せんせい", "先生", "せんせい", "先生は あそこです。", "sensei wa asoko desu", "The teacher is over there.", "শিক্ষক ওদিকে।"),
		{
			kind: "talk",
			lines: [{
				role: "them",
				ja: "わかりましたか。",
				romaji: "wakarimashita ka",
				meaning: bi("Did you understand?", "বুঝতে পেরেছেন?")
			}, you("You understood.", "বুঝেছেন।", [{
				ja: "はい、 わかりました。",
				romaji: "hai, wakarimashita",
				en: "Yes, I understood.",
				bn: "হ্যাঁ, বুঝেছি।",
				correct: true
			}, {
				ja: "これは みずです。",
				romaji: "kore wa mizu desu",
				en: "This is water.",
				bn: "এটি পানি।",
				correct: false
			}])]
		}
	]),
	lesson("daily-moves", "school", U6, 17, "daily", bi("Daily moves", "দৈনন্দিন চলা"), bi("A day is a chain of small verbs you already felt.", "একটি দিন ছোট ক্রিয়ার শৃঙ্খল যা আপনি আগেই অনুভব করেছেন।"), [
		scene("daily", "Sunrise, a bag, a desk, a lamp at night.", "সূর্যোদয়, একটি ব্যাগ, একটি ডেস্ক, রাতে বাতি।"),
		hear("ろくじに おきます。", "rokuji ni okimasu", "I get up at 6.", "৬টায় উঠি।"),
		hear("あさごはんを たべます。", "asagohan o tabemasu", "I eat breakfast.", "সকালের খাবার খাই।"),
		hear("はなします。", "hanashimasu", "I speak / I talk.", "আমি কথা বলি।"),
		hear("みます。", "mimasu", "I watch / I look.", "আমি দেখি।"),
		hear("よみます。", "yomimasu", "I read.", "আমি পড়ি।"),
		hear("かきます。", "kakimasu", "I write.", "আমি লিখি।"),
		hear("じゅういちじに ねます。", "juuichiji ni nemasu", "I go to bed at 11.", "১১টায় ঘুমাতে যাই।"),
		pattern([
			[
				"おきます",
				"okimasu",
				"wake up / get up",
				"ঘুম থেকে ওঠা"
			],
			[
				"たべます",
				"tabemasu",
				"eat",
				"খাওয়া"
			],
			[
				"いきます",
				"ikimasu",
				"go",
				"যাওয়া"
			],
			[
				"はなします",
				"hanashimasu",
				"speak",
				"কথা বলা"
			],
			[
				"ねます",
				"nemasu",
				"sleep",
				"ঘুমানো"
			]
		], "に after a time (ろくじに) is when the action happens — the same に that pointed at school. One little sound, two jobs you can feel from context.", "সময়ের পরে に (ろくじに) বলে কাজ কখন হয় — যে に স্কুলের দিকেও ইঙ্গিত করেছিল। একটি ছোট শব্দ, দুটি কাজ, পরিস্থিতি থেকে বোঝা যায়।"),
		useIt("Night. You are going to sleep.", "রাত। ঘুমাতে যাচ্ছেন।", [
			{
				ja: "ねます。",
				romaji: "nemasu",
				en: "I go to sleep.",
				bn: "ঘুমাতে যাই।",
				correct: true
			},
			{
				ja: "おきます。",
				romaji: "okimasu",
				en: "I get up.",
				bn: "উঠি।",
				correct: false
			},
			{
				ja: "いきます。",
				romaji: "ikimasu",
				en: "I go.",
				bn: "যাই।",
				correct: false
			}
		]),
		kanaWord("ねます", "sleep", "ঘুমানো", [
			{
				char: "ね",
				romaji: "ne"
			},
			{
				char: "ま",
				romaji: "ma"
			},
			{
				char: "す",
				romaji: "su"
			}
		]),
		kanjiMeet("みる", "見", "みる", "テレビを 見ます。", "terebi o mimasu", "I watch TV.", "আমি টিভি দেখি।")
	]),
	lesson("days-of-week", "living", U7, 18, "week", bi("Days of the week", "সপ্তাহের দিন"), bi("The week turns like weather. Names return every seven suns.", "সপ্তাহ আবহাওয়ার মতো ঘোরে। সাত সূর্যে নাম ফিরে আসে।"), [
		scene("week", "A paper calendar on the wall. Someone circles tomorrow.", "দেয়ালে কাগজের ক্যালেন্ডার। কেউ আগামীকালকে ঘিরে রাখে।"),
		hear("きょうは げつようびです。", "kyou wa getsuyoubi desu", "Today is Monday.", "আজ সোমবার।", "今日は 月曜日です。"),
		hear("あしたは かようびです。", "ashita wa kayoubi desu", "Tomorrow is Tuesday.", "আগামীকাল মঙ্গলবার।"),
		hear("きのうは にちようびでした。", "kinou wa nichiyoubi deshita", "Yesterday was Sunday.", "গতকাল রবিবার ছিল।"),
		pattern([
			[
				"げつようび",
				"getsuyoubi",
				"Monday",
				"সোমবার"
			],
			[
				"かようび",
				"kayoubi",
				"Tuesday",
				"মঙ্গলবার"
			],
			[
				"すいようび",
				"suiyoubi",
				"Wednesday",
				"বুধবার"
			],
			[
				"もくようび",
				"mokuyoubi",
				"Thursday",
				"বৃহস্পতিবার"
			],
			[
				"きんようび",
				"kinyoubi desu",
				"Friday",
				"শুক্রবার"
			],
			[
				"どようび",
				"doyoubi",
				"Saturday",
				"শনিবার"
			],
			[
				"にちようび",
				"nichiyoubi",
				"Sunday",
				"রবিবার"
			]
		], "ようび is the 'day-of-week' ending. きょう today, あした tomorrow, きのう yesterday. You will keep meeting them, not drilling them.", "ようび সপ্তাহের দিনের শেষাংশ। きょう আজ, あした আগামীকাল, きのう গতকাল। মুখস্থ নয়, বারবার দেখা।"),
		useIt("Someone asks about today. It is Friday.", "কেউ আজকের কথা জিজ্ঞেস করল। শুক্রবার।", [
			{
				ja: "きんようびです。",
				romaji: "kinyoubi desu",
				en: "It's Friday.",
				bn: "শুক্রবার।",
				correct: true
			},
			{
				ja: "みずです。",
				romaji: "mizu desu",
				en: "It's water.",
				bn: "পানি।",
				correct: false
			},
			{
				ja: "おはよう。",
				romaji: "ohayou",
				en: "Good morning.",
				bn: "সুপ্রভাত।",
				correct: false
			}
		]),
		kanjiMeet("きょう", "今日", "きょう", "今日は 月曜日です。", "kyou wa getsuyoubi desu", "Today is Monday.", "আজ সোমবার।"),
		kanjiMeet("げつ", "月", "げつ / つき", "月曜日です。", "getsuyoubi desu", "It's Monday.", "সোমবার।"),
		kanjiMeet("ひ", "日", "ひ / にち", "日曜日です。", "nichiyoubi desu", "It's Sunday.", "রবিবার।")
	]),
	lesson("food-talk", "living", U7, 19, "food", bi("Talking about food", "খাবার নিয়ে কথা"), bi("A small restaurant. Menus, steam, a simple want.", "ছোট রেস্তোরাঁ। মেনু, ভাপ, একটি সহজ চাওয়া।"), [
		scene("food", "A wooden counter, bowls, a handwritten menu.", "কাঠের কাউন্টার, বাটি, হাতে লেখা মেনু।"),
		hear("メニューを ください。", "menyu o kudasai", "The menu, please.", "মেনু দিন।"),
		hear("おすすめは なんですか。", "osusume wa nan desu ka", "What do you recommend?", "কী সুপারিশ করবেন?"),
		hear("ラーメンを ください。", "raamen o kudasai", "Ramen, please.", "রামেন দিন।"),
		hear("おいしいです。", "oishii desu", "It's delicious.", "সুস্বাদু।"),
		hear("ちょっと からいです。", "chotto karai desu", "It's a little spicy.", "একটু ঝাল।"),
		hear("おみずを ください。", "omizu o kudasai", "Water, please.", "পানি দিন।"),
		hear("おかいけい おねがいします。", "okaikei onegaishimasu", "The bill, please.", "বিল দিন।"),
		useIt("The food is good. Say so.", "খাবার ভালো। তাই বলুন।", [
			{
				ja: "おいしいです。",
				romaji: "oishii desu",
				en: "It's delicious.",
				bn: "সুস্বাদু।",
				correct: true
			},
			{
				ja: "つかれました。",
				romaji: "tsukaremashita",
				en: "I'm tired.",
				bn: "ক্লান্ত।",
				correct: false
			},
			{
				ja: "がっこうです。",
				romaji: "gakkou desu",
				en: "It's school.",
				bn: "স্কুল।",
				correct: false
			}
		]),
		{
			kind: "talk",
			lines: [{
				role: "them",
				ja: "ごちゅうもんは？",
				romaji: "gochuumon wa?",
				meaning: bi("Your order?", "আপনার অর্ডার?")
			}, you("You want ramen and water.", "রামেন ও পানি চান।", [{
				ja: "ラーメンと みずを ください。",
				romaji: "raamen to mizu o kudasai",
				en: "Ramen and water, please.",
				bn: "রামেন ও পানি দিন।",
				correct: true
			}, {
				ja: "がっこうに いきます。",
				romaji: "gakkou ni ikimasu",
				en: "I go to school.",
				bn: "স্কুলে যাই।",
				correct: false
			}])]
		}
	]),
	lesson("likes-and-weather", "living", U7, 20, "like", bi("Likes and weather", "পছন্দ ও আবহাওয়া"), bi("Feelings about food, cats, and the sky.", "খাবার, বিড়াল ও আকাশ নিয়ে অনুভূতি।"), [
		scene("like", "A park. Wind. Someone smiles at a cat, then at the sky.", "পার্ক। হাওয়া। কেউ বিড়াল দেখে হাসে, তারপর আকাশে।"),
		hear("ねこが すきです。", "neko ga suki desu", "I like cats.", "আমি বিড়াল পছন্দ করি।"),
		hear("コーヒーが すきです。", "koohii ga suki desu", "I like coffee.", "আমি কফি পছন্দ করি।"),
		hear("スポーツが すきじゃありません。", "supootsu ga suki ja arimasen", "I don't like sports.", "আমি খেলাধুলা পছন্দ করি না।"),
		scene("weather", "The same park. Bright, then a grey sheet of cloud.", "একই পার্ক। উজ্জ্বল, তারপর ধূসর মেঘ।"),
		hear("きょうは いい てんきです。", "kyou wa ii tenki desu", "The weather is nice today.", "আজ আবহাওয়া ভালো।"),
		hear("あついです。", "atsui desu", "It's hot.", "গরম।"),
		hear("さむいです。", "samui desu", "It's cold.", "ঠান্ডা।"),
		hear("あめです。", "ame desu", "It's rain.", "বৃষ্টি।"),
		pattern([
			[
				"すきです",
				"suki desu",
				"like",
				"পছন্দ"
			],
			[
				"すきじゃありません",
				"suki ja arimasen",
				"don't like",
				"পছন্দ নয়"
			],
			[
				"あついです",
				"atsui desu",
				"hot",
				"গরম"
			],
			[
				"さむいです",
				"samui desu",
				"cold",
				"ঠান্ডা"
			]
		], "が in ねこが すきです marks what the feeling points at. じゃありません gently turns a statement around. You do not need a grammar page — you felt the no.", "ねこが すきです-এর が বলে অনুভূতি কার দিকে। じゃありません আলতো করে উল্টে দেয়। ব্যাকরণ পাতা নয় — 'না' অনুভব করেছেন।"),
		useIt("You like tea.", "আপনি চা পছন্দ করেন।", [
			{
				ja: "おちゃが すきです。",
				romaji: "ocha ga suki desu",
				en: "I like tea.",
				bn: "চা পছন্দ করি।",
				correct: true
			},
			{
				ja: "おちゃを ください。",
				romaji: "ocha o kudasai",
				en: "Tea, please. (ordering)",
				bn: "চা দিন। (অর্ডার)",
				correct: false
			},
			{
				ja: "さむいです。",
				romaji: "samui desu",
				en: "It's cold.",
				bn: "ঠান্ডা।",
				correct: false
			}
		]),
		kanjiMeet("あめ", "雨", "あめ", "今日は 雨です。", "kyou wa ame desu", "It's rain today.", "আজ বৃষ্টি।"),
		{
			kind: "talk",
			lines: [{
				role: "them",
				ja: "なにが すきですか。",
				romaji: "nani ga suki desu ka",
				meaning: bi("What do you like?", "কী পছন্দ করেন?")
			}, you("You like cats.", "বিড়াল পছন্দ করেন।", [{
				ja: "ねこが すきです。",
				romaji: "neko ga suki desu",
				en: "I like cats.",
				bn: "বিড়াল পছন্দ করি।",
				correct: true
			}, {
				ja: "ただいま。",
				romaji: "tadaima",
				en: "I'm home.",
				bn: "আমি এসেছি।",
				correct: false
			}])]
		}
	])
];
var lessons = [...lessonsA, ...lessonsB].sort((a, b) => a.order - b.order);
function getLesson(id) {
	return lessons.find((l) => l.id === id);
}
function getDialogue(id) {
	return dialogues.find((d) => d.id === id);
}
function nextLesson(completed) {
	return lessons.find((l) => !completed.includes(l.id)) ?? lessons[lessons.length - 1];
}
function isUnlocked(lesson, completed) {
	if (lesson.order <= 1) return true;
	const prev = lessons.find((l) => l.order === lesson.order - 1);
	return !prev || completed.includes(prev.id);
}
function units() {
	const map = /* @__PURE__ */ new Map();
	for (const l of lessons) {
		const existing = map.get(l.unit);
		if (existing) existing.lessons.push(l);
		else map.set(l.unit, {
			id: l.unit,
			title: l.unitTitle,
			lessons: [l]
		});
	}
	return [...map.values()];
}
function sentenceBank() {
	const out = [];
	const seen = /* @__PURE__ */ new Set();
	for (const l of lessons) for (const s of l.steps) if (s.kind === "hear" || s.kind === "copy") {
		if (!s.ja || seen.has(s.ja)) continue;
		seen.add(s.ja);
		out.push({
			ja: s.ja,
			romaji: s.romaji,
			meaning: s.meaning,
			lessonId: l.id,
			art: l.art,
			title: l.title
		});
	}
	return out;
}
function reachableSentences(completed) {
	const done = new Set(completed);
	const bank = sentenceBank();
	const allowed = new Set(lessons.filter((l) => done.has(l.id) || isUnlocked(l, completed)).map((l) => l.id));
	const filtered = bank.filter((s) => allowed.has(s.lessonId));
	return filtered.length > 0 ? filtered : bank.slice(0, 8);
}
//#endregion
export { nextLesson as a, units as c, lessons as i, getLesson as n, reachableSentences as o, isUnlocked as r, sentenceBank as s, getDialogue as t };
