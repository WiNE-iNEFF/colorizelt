import { Editor, Plugin, Notice, App, addIcon } from 'obsidian';

export default class Colorizelt extends Plugin {
	async onload() {
		addIcons()
		new Notice('Plugin "Colorizelt" v0.0.3 load success!');

		//red color
		this.addCommand({
			id: "color-text-red", name: "Color text in red color",
			hotkeys: [{modifiers: ["Shift", "Mod"], key: "1"}],
			icon: "colorizelt-pen-red",
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
			icon: "colorizelt-pen-yellow",
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
			icon: "colorizelt-pen-green",
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
			icon: "colorizelt-pen-blue",
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
		//clear all
		this.addCommand({
			id: "color-clear", name: "Clear all selected color in text",
			hotkeys: [{modifiers: ["Shift", "Mod"], key: "5"}],
			icon: "colorizelt-clear",
			editorCallback: (editor: Editor) => {
				let selection = editor.getSelection();
				const regex = /<span style="color:(.*?)">(.*?)<\/span>/g;
				let matches = Array.from(selection.matchAll(regex));

				if (matches.length > 0) {
					matches.forEach((match) => {
						selection = selection.replace(match[0], match[1]);
					});
					editor.replaceSelection(selection);
				}
			}
		});
		
	}
}


export function addIcons() {
	addIcon("colorizelt-pen-red", '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line"><path d="M12 20h9" stroke="red"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>');
	addIcon("colorizelt-pen-yellow", '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line"><path d="M12 20h9" stroke="yellow"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>');
	addIcon("colorizelt-pen-green", '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line"><path d="M12 20h9" stroke="green"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>');
	addIcon("colorizelt-pen-blue", '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line"><path d="M12 20h9" stroke="blue"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>');
	addIcon("colorizelt-clear", '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line"><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>');
}
