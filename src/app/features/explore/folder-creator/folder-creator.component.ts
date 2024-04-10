import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AppState } from '@app/app.state';
import { Toaster } from '@app/services/toaster/toaster.service';
import { AppWindowComponent } from '@app/shared/components/app-window/app-window.component';
import { SharedModule } from '@app/shared/shared.module';
import { TranslocoService } from '@ngneat/transloco';
import { ExploreService } from '../explore.service';
import { ExploreApi } from '../explore.api';

@Component({
  selector: 'app-folder-creator',
  standalone: true,
  imports: [ SharedModule ],
	providers: [ ExploreService, ExploreApi ],
  templateUrl: './folder-creator.component.html',
  styleUrl: './folder-creator.component.scss'
})
export class FolderCreatorComponent implements OnInit {

	@Input() folderId: number|null = null;
	@ViewChild("window") window?: AppWindowComponent;
	public loading: boolean = false;
	public location: string = "/";
	public name: string = "";
	public error: boolean = false;

	constructor(
		private state: AppState,
		private transloco: TranslocoService,
		private toaster: Toaster,
		private service: ExploreService,
	) { }

	ngOnInit(): void {
		this.state.subscribe("explore.folder", (folder: any) => {
			if(!folder) return;
			this.folderId = folder.id;
			this.location = folder.name;
		});
	}

	public show() {
		this.name = "";
		this.window?.open();
	}

	public create() {
		this.error = false;
		if (!this.name) {
			this.error = true;
			let errorMsg = this.transloco.translate("errors.folder-name-empty");
			this.toaster.error(errorMsg);
			console.error("name is empty");
			return;
		}
		console.info("creating folder ["+this.name+"] in folder " + this.folderId);
		this.service.createFolder(this.name, this.folderId)
			.then(rs => {
				console.info("result: ", rs);
				let msg = this.transloco.translate("object-created", { object: 'Folder' });
				this.toaster.success(msg);
				this.name = "";
				this.state.emit("refresh", true);
			})
			.catch(err => {
				console.error(err);
				this.toaster.error("Error on folder creation");
			})
	}

}
