//#region node_modules/.nitro/vite/services/ssr/assets/helpers-x31JXuOZ.js
var bi = (en, bn) => ({
	en,
	bn
});
function lesson(id, unit, unitTitle, order, art, title, teaser, steps) {
	return {
		id,
		unit,
		unitTitle,
		order,
		art,
		title,
		teaser,
		steps
	};
}
function scene(art, en, bn) {
	return {
		kind: "scene",
		art,
		happening: bi(en, bn)
	};
}
function hear(ja, romaji, en, bn, jaKanji) {
	return {
		kind: "hear",
		ja,
		romaji,
		meaning: bi(en, bn),
		jaKanji
	};
}
function guess(ja, romaji, en, bn, qEn, qBn, options) {
	return {
		kind: "guess",
		ja,
		romaji,
		meaning: bi(en, bn),
		question: bi(qEn, qBn),
		options
	};
}
function copy(ja, romaji, en, bn) {
	return {
		kind: "copy",
		ja,
		romaji,
		meaning: bi(en, bn)
	};
}
function pattern(lines, noticeEn, noticeBn) {
	return {
		kind: "pattern",
		lines: lines.map(([ja, romaji, en, bn]) => ({
			ja,
			romaji,
			meaning: bi(en, bn)
		})),
		notice: bi(noticeEn, noticeBn)
	};
}
function useIt(promptEn, promptBn, options, promptJa) {
	return {
		kind: "use",
		prompt: bi(promptEn, promptBn),
		promptJa,
		options: options.map((o) => ({
			ja: o.ja,
			romaji: o.romaji,
			meaning: bi(o.en, o.bn),
			correct: o.correct
		}))
	};
}
function buildWord(target, romaji, en, bn, tiles) {
	return {
		kind: "build",
		target,
		romaji,
		meaning: bi(en, bn),
		tiles
	};
}
function kanaWord(word, en, bn, parts) {
	return {
		kind: "kana",
		word,
		meaning: bi(en, bn),
		parts
	};
}
function kanjiMeet(kana, kanji, reading, sentence, sentenceRomaji, en, bn) {
	return {
		kind: "kanji",
		kana,
		kanji,
		reading,
		sentence,
		sentenceRomaji,
		meaning: bi(en, bn)
	};
}
var opt = (ja, en, bn, correct, romaji) => ({
	ja,
	label: bi(en, bn),
	correct,
	romaji
});
//#endregion
export { hear as a, lesson as c, scene as d, useIt as f, guess as i, opt as l, buildWord as n, kanaWord as o, copy as r, kanjiMeet as s, bi as t, pattern as u };
