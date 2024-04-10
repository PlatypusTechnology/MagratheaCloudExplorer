import { Injectable } from '@angular/core';
import { iExplorerItem } from './item.interface';
import { Store } from '@app/services/store/store.service';
import { ExploreApi } from './explore.api';
import { Observable, map } from 'rxjs';
import { AppState } from '@app/app.state';
import { HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExploreService {

  constructor(
		private state: AppState,
		private store: Store,
		private api: ExploreApi,
	) { }

	private icons: any = {
		"folder": "far fa-folder",
		"image": "fa fa-image",
		"book": "fa fa-book",
		"code": "far fa-file-code",
		"video": "fa fa-video",
		"text": "fa fa-file-alt",
		"database": "fa fa-database",
	};

	public getIcon(type?: string) {
		let defaultIcon = "far fa-file";
		if (!type) return defaultIcon;
		let icon = this.icons[type];
		if (!icon) return defaultIcon;
		return icon;
	}

	public formatBytes(bytes: number, decimals = 2) {
		if (!+bytes) return '0 Bytes'
		const k = 1024
		const dm = decimals < 0 ? 0 : decimals
		const sizes = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
		const i = Math.floor(Math.log(bytes) / Math.log(k))
		return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
	}

	public getObjFromData(i: any): iExplorerItem {
		let item: iExplorerItem = {
			id: parseInt(i['id']),
			type: i['type'],
			name: i['name'],
			size: i['size'],
			created: i['created'],
		};
		return item;
	}

	public explore(folder?: number|null): Promise<any> {
		return new Promise((resolve, reject) => {
			this.store.get("key-val").then(key => {
				this.api.exploreKey(key, folder)
					.pipe(map((rs) => {
						let data = rs.content.map((i: any) => this.getObjFromData(i));
						return {
							parent_id: rs.parent_id,
							location: rs.location,
							content: data,
						};
					}))
					.subscribe(rs => {
						resolve(rs);
					});
			});
		});
	}

	public viewFile(file: number) {
		return new Promise((resolve, reject) => {
			this.store.get("key-val").then(key => {
				this.api.viewFile(key, file)
					.subscribe(rs => {
						resolve(rs);
					});
			});
		});
	}

	public getImageLink(file:number): Promise<string> {
		return new Promise((resolve, reject) => {
			this.store.get("key-val").then(key => {
				resolve(this.api.imageUrl(key, file));
			});
		});
	}
	public downloadFile(fileId:number, mime:string): Promise<any> {
		return new Promise((resolve, reject) => {
			this.store.get("key-val").then(key => {
				this.api.donwloadFile(key, fileId)
					.subscribe(rs => {
						console.info("download rs:", rs);
						let blob = new Blob([rs], { type: mime });
						let url = window.URL.createObjectURL(blob);
						let pwa = window.open(url);
						if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
							alert( 'Please disable your Pop-up blocker and try again.');
							reject(false);
						}
						resolve(true);
					});
			});
		});
	}

	public createFolder(name: string, parent_id: string|number|null): Promise<any> {
		return new Promise((resolve, reject) => {
			this.store.get("key-val").then(key => {
				this.api.createFolder(key, name, parent_id)
					.subscribe({
						next: (rs) => resolve(rs),
						error: (err) => reject(err),
					});
			});
		});
	}

	public prepareUploadEvent(event: any, folderId: number|null) {
		return event;
	}
	public getUploadUrl(keyId: string): string {
		return this.api.getUploadUrl(keyId);
	}
	public upload(key: string, files: any[], folderId?: number): Observable<any> {
		return this.api.uploadFile(key, files[0], { folder: folderId });
	}

}
