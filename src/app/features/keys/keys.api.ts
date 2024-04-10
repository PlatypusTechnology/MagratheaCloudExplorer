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
	public getByVal(val: string): Observable<any> {
		let url = this.url('/key/:key/view').params({ key: val });
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

	public getCrawlsByKey(key: string): Observable<any> {
		let url = this.url('/key/:key/crawls').params({ key });
		return this.get(url).pipe(this.defaultMap);
	}
	public createCrawl(key: string): Observable<any> {
		let url = this.url('/key/:key/crawl').params({ key });
		return this.post(url, null);
	}
	public executeCrawl(key: string, crawl: string): Observable<any> {
		let url = this.url('/key/:key/crawl/:crawl/execute').params({ key, crawl });
		return this.post(url, null);
	}
	public getCrawlReport(key: string, crawl: string): Observable<any> {
		let url = this.url('/key/:key/crawl/:crawl/report').params({ key, crawl });
		return this.get(url);
	}

}
