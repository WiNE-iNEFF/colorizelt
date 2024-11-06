import { Editor, Plugin, App, addIcon, PluginSettingTab, Setting } from 'obsidian';

interface ColorizeltSetting {
	id: string;
	name: string;
	color: string;
}

const DEFAULT_SETTINGS: ColorizeltSetting[] = [
	{id: "purple", name: "purple", color: "#7C00FE"},
	{id: "lightGreen", name: "light green", color: "#06D001"},
];

export default class Colorizelt extends Plugin {
	settings: ColorizeltSetting[] = [];
	async onload() {
		addIcons()
		await this.loadSettings();

		this.addSettingTab(new ColorizeltSettingTab(this.app, this));

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
						selection = selection.replace(match[0], match[2]);
					});
					editor.replaceSelection(selection);
				}
			}
		});
		
		this.createButtonCommands();
	}
	
	async loadSettings() {
		//await this.saveData(DEFAULT_SETTINGS);
		let LoadData = await this.loadData();
		this.settings = Array.isArray(LoadData) ? LoadData : DEFAULT_SETTINGS;
	}

	async saveSettings() {
		await this.saveData(this.settings);
		this.createButtonCommands();
	}
	
	createButtonCommands() {
		this.settings.forEach((button) => {
			addIcon(`colorizelt-pen-${button.name.toLowerCase().replace(/\s+/g, '-')}`, `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-line"><path d="M12 20h9" stroke="${button.color}"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>`)
			this.addCommand({
				id: `color-text-${button.id}`,
				name: `${button.name.toLowerCase().replace(/\s+/g, '-')}`,
				icon: `colorizelt-pen-${button.name.toLowerCase().replace(/\s+/g, '-')}`,
				editorCallback: (editor: Editor) => {
					let selection = editor.getSelection();
					const replaced = `<span style="color: ${button.color.toLowerCase().replace(/\s+/g, '-')}">${selection}</span>`
					const regex = new RegExp(`<span style="color: ${button.color.toLowerCase().replace(/\s+/g, '-')}">(.*?)<\/span>`, 'g');
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

export class ColorizeltSettingTab extends PluginSettingTab {
	plugin: Colorizelt;
	constructor(app: App, plugin: Colorizelt) {
		super(app, plugin);
		this.plugin = plugin;
	}
	display(): void {
		let { containerEl } = this;
		containerEl.empty();
		containerEl.createEl("h1", {text: "Colorizelt Colors Setting"});

		this.plugin.settings.forEach((button, index) => {
			const setting = new Setting(containerEl)
				.setName(`${button.name.toLowerCase().replace(/\s+/g, '-')}`)
				.addText(text => text
					.setValue(button.name.toLowerCase().replace(/\s+/g, '-'))
					.setPlaceholder('Button name')
					.onChange(async (value) => {
						button.name = value;
						await this.plugin.saveSettings()
					}))

			setting.addColorPicker(colorPicker => colorPicker
					.setValue(button.color)
					.onChange(async (value) => {
						button.color = value;
						await this.plugin.saveSettings();
					}));

			setting.addButton(btn => btn
					.setButtonText("Delete")
					.onClick(async () => {
						this.plugin.settings.splice(index, 1);
						await this.plugin.saveSettings();
						this.display();
					}));
		});
		
		const newButtonSetting = new Setting(containerEl)
			.addButton(btn => btn
					.setButtonText("Add Button")
					.setCta()
					.onClick(async () => {
						this.plugin.settings.push({
							id: `button-{Date.now()}`,
							name: "000000",
							color: "#000000"
						});
						await this.plugin.saveSettings();
						this.display();
					}));
	}
}