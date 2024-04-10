import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

@Component({
  selector: 'app-navigation-row',
  standalone: true,
  imports: [ SharedModule ],
  templateUrl: './navigation-row.component.html',
  styleUrl: './navigation-row.component.scss'
})
export class NavigationRowComponent {

	@Input() loading: boolean = false;
	@Output() callFolder: EventEmitter<any> = new EventEmitter<any>();
	public folders: any[] = [];

	private getTopFolder() {
		return this.folders[this.folders.length-1];		
	}

	goHome() {
		this.folders = [];
		this.goToFolder(null);
	}
	goToFolder(folderId?: number|null) {
		this.callFolder.emit(folderId);
	}
	goBack() {
		this.folders.pop();
		let folder = this.getTopFolder();
		this.goToFolder(folder.id);
	}
	folderClick(id: number) {
		this.folders.pop();
		let folder = this.getTopFolder();
		if(folder.id == id) this.goToFolder(id);
		else this.folderClick(id);
	}

	public addFolder(id: number, name: string) {
		this.folders.push({ id, name });
	}

}
