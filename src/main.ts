import { Editor, Plugin, Notice, App, addIcon } from 'obsidian';

export default class Colorizelt extends Plugin {
	async onload() {
		new Notice('Plugin "Colorizelt" v0.0.1 load success!');

		//red color
		this.addCommand({
			id: "color-text-red", name: "Color text in red color",
			hotkeys: [{modifiers: ["Shift", "Mod"], key: "1"}],
			editorCallback: (editor: Editor) => {
				let selection = editor.getSelection();
				const replaced = `<span style="color: red">${selection}</span>`
				const regex = /<span style="color: red">(.*?)<\/span>/g;
				let matches = Array.from(selection.matchAll(regex));

				if (matches.length > 0) {
					matches.forEach((match) => {
						selection = selection.replace(match[0], match[1]);
					});
					editor.replaceSelection(selection);
				} else {
					editor.replaceSelection(replaced);
				}
			}
		});
		//yellow color
		this.addCommand({
			id: "color-text-yellow", name: "Color text in yellow color",
			hotkeys: [{modifiers: ["Shift", "Mod"], key: "2"}],
			editorCallback: (editor: Editor) => {
				let selection = editor.getSelection();
				const replaced = `<span style="color: yellow">${selection}</span>`
				const regex = /<span style="color: yellow">(.*?)<\/span>/g;
				let matches = Array.from(selection.matchAll(regex));

				if (matches.length > 0) {
					matches.forEach((match) => {
						selection = selection.replace(match[0], match[1]);
					});
					editor.replaceSelection(selection);
				} else {
					editor.replaceSelection(replaced);
				}
			}
		});
		//green color
		this.addCommand({
			id: "color-text-green", name: "Color text in green color",
			hotkeys: [{modifiers: ["Shift", "Mod"], key: "3"}],
			editorCallback: (editor: Editor) => {
				let selection = editor.getSelection();
				const replaced = `<span style="color: green">${selection}</span>`
				const regex = /<span style="color: green">(.*?)<\/span>/g;
				let matches = Array.from(selection.matchAll(regex));

				if (matches.length > 0) {
					matches.forEach((match) => {
						selection = selection.replace(match[0], match[1]);
					});
					editor.replaceSelection(selection);
				} else {
					editor.replaceSelection(replaced);
				}
			}
		});
		//blue color
		this.addCommand({
			id: "color-text-blue", name: "Color text in blue color",
			hotkeys: [{modifiers: ["Shift", "Mod"], key: "4"}],
			editorCallback: (editor: Editor) => {
				let selection = editor.getSelection();
				const replaced = `<span style="color: blue">${selection}</span>`
				const regex = /<span style="color: blue">(.*?)<\/span>/g;
				let matches = Array.from(selection.matchAll(regex));

				if (matches.length > 0) {
					matches.forEach((match) => {
						selection = selection.replace(match[0], match[1]);
					});
					editor.replaceSelection(selection);
				} else {
					editor.replaceSelection(replaced);
				}
			}
		});
	}
}
