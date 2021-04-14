import { SelectSearchOption } from "react-select-search";

export function shuffle(array: SelectSearchOption[]): SelectSearchOption[] {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

// https://gist.github.com/danallison/3ec9d5314788b337b682
export function downloadReadingList(
	text: string,
	fileType: string,
	fileName: string
): void {
	var blob = new Blob([text], { type: fileType });

	var a = document.createElement("a");
	a.download = fileName;
	a.href = URL.createObjectURL(blob);
	a.dataset.downloadurl = [fileType, a.download, a.href].join(":");
	a.style.display = "none";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);
	setTimeout(function () {
		URL.revokeObjectURL(a.href);
	}, 1500);
}

export function sentenceCase(text: string, title: string): string {
	var newString = text
		.replaceAll("(?i)\\Q" + title + "\\E", c => {
			return c.toUpperCase();
		})
		.replaceAll(".", ". ")
		.replaceAll("  ", " ");
	/* text
		.toLowerCase()
		.replace(/(^\s*\w|[\.\!\?]\s*\w)/g, function (c) {
			return c.toUpperCase();
		}) */

	return newString;
}

export function boldQuery(str: string, query: string) {
	const cleanStr = str.replaceAll(".", ". ").replaceAll("  ", " ");
	const n = cleanStr.toUpperCase();
	const q = query.toUpperCase();
	const x = n.indexOf(q);
	if (!q || x === -1) {
		return cleanStr;
	}
	const l = q.length;
	return [
		cleanStr.substr(0, x),
		<b>{cleanStr.substr(x, l)}</b>,
		cleanStr.substr(x + l)
	];
}
