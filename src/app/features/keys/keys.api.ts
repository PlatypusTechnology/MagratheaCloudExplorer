import { Injectable, Injector } from "@angular/core";
import { BaseApi } from "@services/api/base.api";
import { Observable } from "rxjs";
import { iKey } from "./key.interface";

@Injectable()
export class KeysApi extends BaseApi {
	constructor(
		injector: Injector
	) {
		super(injector);
	}

	public getKeys(): Observable<any> {
		let url = this.url("/keys");
		return this.get(url).pipe(this.defaultMap);
	}

	public getById(id:string): Observable<any> {
		let url = this.url('/key/:id').params({ id });
		return this.get(url).pipe(this.defaultMap);
	}

	public update(key: iKey): Observable<any> {
		let id = key.id;
		let url = this.url('/key/:id').params({ id });
		return this.put(url, key);
	}

	public insert(data: any): Observable<any> {
		let url = this.url('/keys');
		return this.post(url, data);
	}

}
