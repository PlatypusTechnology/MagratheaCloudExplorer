import { Injectable } from '@angular/core';
import { KeysApi } from './keys.api';

@Injectable({
  providedIn: 'root'
})
export class CrawlsService {

  constructor(
		private api: KeysApi,
	) { }

	public create(key: string) {
		return this.api.createCrawl(key);
	}

	public getByKey(key: string) {
		return this.api.getCrawlsByKey(key);
	}

	public getReport(key: string, crawlId: string) {
		return this.api.getCrawlReport(key, crawlId);
	}
	public executeCrawl(key: string, crawlId: string) {
		return this.api.executeCrawl(key, crawlId);
	}

}
