import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FileUpload, FileUploadModule } from 'primeng/fileupload';
import { AppState } from '@app/app.state';
import { AppWindowComponent } from '@app/shared/components/app-window/app-window.component';
import { SharedModule } from '@app/shared/shared.module';
import { ExploreService } from '../explore.service';
import { ExploreApi } from '../explore.api';
import { Store } from '@app/services/store/store.service';

@Component({
  selector: 'app-file-uploader',
  standalone: true,
  imports: [
		SharedModule,
		FileUploadModule,
	],
	providers: [
		ExploreService,
		ExploreApi,
	],
	encapsulation: ViewEncapsulation.None,
  templateUrl: './file-uploader.component.html',
  styleUrl: './file-uploader.component.scss'
})
export class FileUploaderComponent implements OnInit {

	@Input() folderId?: number;
	@ViewChild("window") window?: AppWindowComponent;
	@ViewChild("upload") uploader?: FileUpload;
	public uploadUrl: string = "";
	public loading:boolean = false;
	public uploadedFiles: any[] = [];
	public fileSelect: boolean = false;

	constructor(
		private state: AppState,
		private store: Store,
		private service: ExploreService,
	) {
	}

	ngOnInit(): void {
		this.store.get("key-val").then(key => {
			this.uploadUrl = this.service.getUploadUrl(key);
		});
		this.state.subscribe("explore.folder", (folder: any) => {
			this.folderId = folder.id;
		});
	}

	public show = () => this.window?.open();

	public preparePackage(event: any) {
		event.formData.append("folder", this.folderId);
		return event;
	}
	public uploadDone(event: any) {
		this.state.emit("refresh", null);
	}

	public send (event:any) {
		console.info("file: ", event);
		let files = event.files;
		this.store.get("key-val").then(key => {
			this.service.upload(key, files, this.folderId)
				.subscribe({
					next: rs => {
						console.info("rs:" , rs);
					}
				})
		});
	}

}
