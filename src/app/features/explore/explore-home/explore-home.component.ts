import { Component, OnInit, ViewChild } from '@angular/core';
import { DriverComponent } from '../driver/driver.component';
import { AppState } from '@app/app.state';
import { FolderCreatorComponent } from '../folder-creator/folder-creator.component';
import { FileUploaderComponent } from '../file-uploader/file-uploader.component';
import { DetailBoxComponent } from '../detail-box/detail-box.component';
import { CommonModule } from '@angular/common';
import { iExplorerItem } from '../item.interface';
import { SharedModule } from '@app/shared/shared.module';

@Component({
  selector: 'app-explore-home',
  standalone: true,
  imports: [
		SharedModule,
		DriverComponent,
		FolderCreatorComponent,
		FileUploaderComponent,
		DetailBoxComponent,
	],
  templateUrl: './explore-home.component.html',
  styleUrl: './explore-home.component.scss'
})
export class ExploreHomeComponent implements OnInit {
	
	@ViewChild("folderCreator") folderCreatorBox?: FolderCreatorComponent;
	@ViewChild("fileUploader") fileUploaderBox?: FileUploaderComponent;

	public showSideBox: boolean = true;
	public folderId?: number;
	public item?: iExplorerItem;

	public showUploadBox: boolean = true;
	public showNewFolderBox: boolean = false;
	public showDetailBox: boolean = false;

	constructor(
		private state: AppState,
	) { }

	ngOnInit(): void {
		this.state.subscribe("click.newfolder", (f: number) => {
			this.showNewFolder();
		});
		this.state.subscribe("click.uploadfile", (f: number) => {
			this.folderId = f;
			this.showUpload();
		});
		this.state.subscribe("explore.click", (item: iExplorerItem) => {
			this.item = item;
			this.showDetailBox = true;
			this.showSideBox = true;
		});
	}

	public showNewFolder() {
		this.showSideBox = true;
		this.showNewFolderBox = true;
		this.folderCreatorBox?.show();
	}
	public showUpload() {
		this.showSideBox = true;
		this.showUploadBox = true;
		this.fileUploaderBox?.show();
	}


}
