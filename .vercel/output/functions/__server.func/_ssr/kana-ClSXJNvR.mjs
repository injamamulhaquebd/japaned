import { t as bi } from "./helpers-x31JXuOZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/kana-ClSXJNvR.js
var hiraganaGroups = [
	{
		id: "h-ohayou",
		script: "hiragana",
		title: bi("From おはよう", "おはよう থেকে"),
		word: {
			ja: "おはよう",
			romaji: "ohayou",
			meaning: bi("good morning", "সুপ্রভাত")
		},
		chars: [
			{
				char: "お",
				romaji: "o"
			},
			{
				char: "は",
				romaji: "ha",
				note: bi("In こんにちは it sounds like wa.", "こんにちは-তে wa শোনায়।")
			},
			{
				char: "よ",
				romaji: "yo"
			},
			{
				char: "う",
				romaji: "u"
			}
		]
	},
	{
		id: "h-konnichiwa",
		script: "hiragana",
		title: bi("From こんにちは", "こんにちは থেকে"),
		word: {
			ja: "こんにちは",
			romaji: "konnichiwa",
			meaning: bi("hello (day)", "হ্যালো (দিন)")
		},
		chars: [
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
			}
		]
	},
	{
		id: "h-watashi",
		script: "hiragana",
		title: bi("From わたし", "わたし থেকে"),
		word: {
			ja: "わたし",
			romaji: "watashi",
			meaning: bi("I", "আমি")
		},
		chars: [
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
		]
	},
	{
		id: "h-neko-mizu",
		script: "hiragana",
		title: bi("From ねこ and みず", "ねこ ও みず থেকে"),
		word: {
			ja: "ねこ",
			romaji: "neko",
			meaning: bi("cat", "বিড়াল")
		},
		chars: [
			{
				char: "ね",
				romaji: "ne"
			},
			{
				char: "み",
				romaji: "mi"
			},
			{
				char: "す",
				romaji: "su"
			},
			{
				char: "ず",
				romaji: "zu",
				note: bi("ず is す with a voice mark.", "ず হলো কণ্ঠচিহ্ন সহ す।")
			}
		]
	},
	{
		id: "h-ie",
		script: "hiragana",
		title: bi("From いえ", "いえ থেকে"),
		word: {
			ja: "いえ",
			romaji: "ie",
			meaning: bi("house", "বাড়ি")
		},
		chars: [
			{
				char: "い",
				romaji: "i"
			},
			{
				char: "え",
				romaji: "e"
			},
			{
				char: "や",
				romaji: "ya"
			},
			{
				char: "へ",
				romaji: "he",
				note: bi("As a particle it often sounds like e.", "particle হিসেবে প্রায়ই e শোনায়।")
			}
		]
	},
	{
		id: "h-kana-a-row",
		script: "hiragana",
		title: bi("The open sounds", "খোলা স্বর"),
		word: {
			ja: "あめ",
			romaji: "ame",
			meaning: bi("rain", "বৃষ্টি")
		},
		chars: [
			{
				char: "あ",
				romaji: "a"
			},
			{
				char: "か",
				romaji: "ka"
			},
			{
				char: "さ",
				romaji: "sa"
			},
			{
				char: "ま",
				romaji: "ma"
			},
			{
				char: "な",
				romaji: "na"
			}
		]
	},
	{
		id: "h-k-row",
		script: "hiragana",
		title: bi("From いきます", "いきます থেকে"),
		word: {
			ja: "いきます",
			romaji: "ikimasu",
			meaning: bi("go", "যাওয়া")
		},
		chars: [
			{
				char: "き",
				romaji: "ki"
			},
			{
				char: "く",
				romaji: "ku"
			},
			{
				char: "け",
				romaji: "ke"
			},
			{
				char: "が",
				romaji: "ga",
				note: bi("Voice mark on か.", "か-এর কণ্ঠচিহ্ন।")
			}
		]
	},
	{
		id: "h-t-row",
		script: "hiragana",
		title: bi("From たべます", "たべます থেকে"),
		word: {
			ja: "たべます",
			romaji: "tabemasu",
			meaning: bi("eat", "খাওয়া")
		},
		chars: [
			{
				char: "て",
				romaji: "te"
			},
			{
				char: "と",
				romaji: "to"
			},
			{
				char: "だ",
				romaji: "da"
			},
			{
				char: "で",
				romaji: "de"
			},
			{
				char: "ど",
				romaji: "do"
			}
		]
	},
	{
		id: "h-n-r",
		script: "hiragana",
		title: bi("From のみます", "のみます থেকে"),
		word: {
			ja: "のみます",
			romaji: "nomimasu",
			meaning: bi("drink", "পান করা")
		},
		chars: [
			{
				char: "の",
				romaji: "no"
			},
			{
				char: "ぬ",
				romaji: "nu"
			},
			{
				char: "ら",
				romaji: "ra"
			},
			{
				char: "り",
				romaji: "ri"
			},
			{
				char: "る",
				romaji: "ru"
			},
			{
				char: "れ",
				romaji: "re"
			},
			{
				char: "ろ",
				romaji: "ro"
			}
		]
	},
	{
		id: "h-h-b-p",
		script: "hiragana",
		title: bi("From ほん", "ほん থেকে"),
		word: {
			ja: "ほん",
			romaji: "hon",
			meaning: bi("book", "বই")
		},
		chars: [
			{
				char: "ひ",
				romaji: "hi"
			},
			{
				char: "ふ",
				romaji: "fu"
			},
			{
				char: "ほ",
				romaji: "ho"
			},
			{
				char: "ば",
				romaji: "ba"
			},
			{
				char: "び",
				romaji: "bi"
			},
			{
				char: "ぶ",
				romaji: "bu"
			},
			{
				char: "べ",
				romaji: "be"
			},
			{
				char: "ぼ",
				romaji: "bo"
			},
			{
				char: "ぱ",
				romaji: "pa"
			},
			{
				char: "ぴ",
				romaji: "pi"
			},
			{
				char: "ぷ",
				romaji: "pu"
			},
			{
				char: "ぺ",
				romaji: "pe"
			},
			{
				char: "ぽ",
				romaji: "po"
			}
		]
	},
	{
		id: "h-y-w",
		script: "hiragana",
		title: bi("Soft turns", "নরম বাঁক"),
		word: {
			ja: "ようこそ",
			romaji: "youkoso",
			meaning: bi("welcome", "স্বাগতম")
		},
		chars: [
			{
				char: "ゆ",
				romaji: "yu"
			},
			{
				char: "よ",
				romaji: "yo"
			},
			{
				char: "を",
				romaji: "o",
				note: bi("The object marker you heard before たべます.", "たべます-এর আগে যে object চিহ্ন শুনেছেন।")
			},
			{
				char: "ゃ",
				romaji: "ya"
			},
			{
				char: "ゅ",
				romaji: "yu"
			},
			{
				char: "ょ",
				romaji: "yo"
			}
		]
	}
];
var katakanaGroups = [
	{
		id: "k-pan",
		script: "katakana",
		title: bi("From パン", "パン থেকে"),
		word: {
			ja: "パン",
			romaji: "pan",
			meaning: bi("bread", "রুটি")
		},
		chars: [{
			char: "パ",
			romaji: "pa"
		}, {
			char: "ン",
			romaji: "n"
		}]
	},
	{
		id: "k-coffee",
		script: "katakana",
		title: bi("From コーヒー", "コーヒー থেকে"),
		word: {
			ja: "コーヒー",
			romaji: "koohii",
			meaning: bi("coffee", "কফি")
		},
		chars: [
			{
				char: "コ",
				romaji: "ko"
			},
			{
				char: "ヒ",
				romaji: "hi"
			},
			{
				char: "ー",
				romaji: "—",
				note: bi("A long sound. You already heard it stretch.", "লম্বা স্বর। ইতিমধ্যে শুনেছেন।")
			}
		]
	},
	{
		id: "k-toire",
		script: "katakana",
		title: bi("From トイレ", "トイレ থেকে"),
		word: {
			ja: "トイレ",
			romaji: "toire",
			meaning: bi("toilet", "টয়লেট")
		},
		chars: [
			{
				char: "ト",
				romaji: "to"
			},
			{
				char: "イ",
				romaji: "i"
			},
			{
				char: "レ",
				romaji: "re"
			}
		]
	},
	{
		id: "k-terebi",
		script: "katakana",
		title: bi("From テレビ", "テレビ থেকে"),
		word: {
			ja: "テレビ",
			romaji: "terebi",
			meaning: bi("TV", "টিভি")
		},
		chars: [
			{
				char: "テ",
				romaji: "te"
			},
			{
				char: "リ",
				romaji: "ri"
			},
			{
				char: "ビ",
				romaji: "bi"
			}
		]
	},
	{
		id: "k-menu",
		script: "katakana",
		title: bi("From メニュー", "メニュー থেকে"),
		word: {
			ja: "メニュー",
			romaji: "menyu",
			meaning: bi("menu", "মেনু")
		},
		chars: [
			{
				char: "メ",
				romaji: "me"
			},
			{
				char: "ニ",
				romaji: "ni"
			},
			{
				char: "ュ",
				romaji: "yu"
			}
		]
	},
	{
		id: "k-raamen",
		script: "katakana",
		title: bi("From ラーメン", "ラーメン থেকে"),
		word: {
			ja: "ラーメン",
			romaji: "raamen",
			meaning: bi("ramen", "রামেন")
		},
		chars: [
			{
				char: "ラ",
				romaji: "ra"
			},
			{
				char: "ア",
				romaji: "a"
			},
			{
				char: "ム",
				romaji: "mu"
			}
		]
	},
	{
		id: "k-injam",
		script: "katakana",
		title: bi("From a name", "নাম থেকে"),
		word: {
			ja: "インジャム",
			romaji: "injamu",
			meaning: bi("Injam", "ইনজাম")
		},
		chars: [
			{
				char: "イ",
				romaji: "i"
			},
			{
				char: "ン",
				romaji: "n"
			},
			{
				char: "ジ",
				romaji: "ji"
			},
			{
				char: "ャ",
				romaji: "ya"
			},
			{
				char: "ム",
				romaji: "mu"
			}
		]
	},
	{
		id: "k-a-row",
		script: "katakana",
		title: bi("Open katakana", "খোলা কাটাকানা"),
		word: {
			ja: "アメリカ",
			romaji: "amerika",
			meaning: bi("America", "আমেরিকা")
		},
		chars: [
			{
				char: "ア",
				romaji: "a"
			},
			{
				char: "カ",
				romaji: "ka"
			},
			{
				char: "サ",
				romaji: "sa"
			},
			{
				char: "タ",
				romaji: "ta"
			},
			{
				char: "ナ",
				romaji: "na"
			},
			{
				char: "ハ",
				romaji: "ha"
			},
			{
				char: "マ",
				romaji: "ma"
			},
			{
				char: "ヤ",
				romaji: "ya"
			},
			{
				char: "ワ",
				romaji: "wa"
			}
		]
	},
	{
		id: "k-iueo",
		script: "katakana",
		title: bi("The rest of the air", "বাকি স্বর"),
		word: {
			ja: "イス",
			romaji: "isu",
			meaning: bi("chair", "চেয়ার")
		},
		chars: [
			{
				char: "ウ",
				romaji: "u"
			},
			{
				char: "エ",
				romaji: "e"
			},
			{
				char: "オ",
				romaji: "o"
			},
			{
				char: "キ",
				romaji: "ki"
			},
			{
				char: "ク",
				romaji: "ku"
			},
			{
				char: "ケ",
				romaji: "ke"
			},
			{
				char: "シ",
				romaji: "shi"
			},
			{
				char: "ス",
				romaji: "su"
			},
			{
				char: "セ",
				romaji: "se"
			},
			{
				char: "ソ",
				romaji: "so"
			}
		]
	}
];
[...hiraganaGroups, ...katakanaGroups];
//#endregion
export { katakanaGroups as n, hiraganaGroups as t };
