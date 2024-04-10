import { Injectable, Injector } from "@angular/core";
import { BaseApi } from "@services/api/base.api";
import { Observable } from "rxjs";

@Injectable()
export class ExploreApi extends BaseApi {
	constructor( injector: Injector ) {
		super(injector);
	}

	public exploreKey(key: string, folder?: number|null): Observable<any> {
		let url = this.url("/key/:key/explore").params({ key });
		if(folder) {
			url.queryParams({ folder });
		}
		return this.get(url).pipe(this.defaultMap);
	}

	public viewFile(key: string, file: number): Observable<any> {
		let url = this.url("/key/:key/file/:file").params({ key, file });
		return this.get(url).pipe(this.defaultMap);
	}

	public imageUrl(key: string, file: number): string {
		let url = this.url("/key/:key/image/:file").params({ key, file });
		return url.get();
	}
	public donwloadFile(key: string, file: number): Observable<any> {
		let url = this.url("/key/:key/download/:file").params({ key, file });
		return this.download(url);
	}

	public createFolder(key: string, name: string, $parentId: string|number|null) {
		let url = this.url("/key/:key/folder").params({ key });
		return this.post(url, {
			name, location: $parentId
		}).pipe(this.defaultMap);
	}
	public getUploadUrl(key: string): string {
		let url = this.url("/key/:key/upload").params({ key });
		return url.get();
	}
	public uploadFile(key: string, files: any[], payload?: any) {
		let url = this.url("/key/:key/upload").params({ key });
		return this.upload(url, files, payload);
	}

}
