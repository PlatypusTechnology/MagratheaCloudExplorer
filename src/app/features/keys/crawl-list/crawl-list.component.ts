import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { KeysService } from '../keys.service';
import { KeysApi } from '../keys.api';
import { CrawlsService } from '../crawls.service';
import { iCrawl } from '../crawl.interface';
import { Toaster } from '@app/services/toaster/toaster.service';
import { TranslocoService } from '@ngneat/transloco';
import { CrawlReportComponent } from '../crawl-report/crawl-report.component';

@Component({
  selector: 'app-crawl-list',
  standalone: true,
  imports: [ SharedModule, CrawlReportComponent ],
	providers: [ KeysApi, KeysService, CrawlsService ],
  templateUrl: './crawl-list.component.html',
  styleUrl: './crawl-list.component.scss',
})
export class CrawlListComponent implements OnInit {

	@Input() key: string = "";
	public loading: boolean = false;
	public crawls: iCrawl[] = [];
	public title: string = "Crawls"
	public showReport: boolean = false;
	public reportId?: string;
	@ViewChild("reporter") reporter!: CrawlReportComponent;

	constructor(
		private transloco: TranslocoService,
		private toaster: Toaster,
		private service: CrawlsService,
	) { }

	ngOnInit(): void {
		this.getCrawlsByKey();
	}

	public newCrawl() {
		let confirmMessage = this.transloco.translate("keys.create-confirm");
		if(!confirm(confirmMessage)) return;
		this.loading = true;
		this.service.create(this.key)
			.subscribe({
				next: (rs) => {
					console.info(rs);
					if(rs.success) {
						let msg = this.transloco.translate('save-success-general');
						this.toaster.success(msg);
						this.refresh();
					} else {
						let data = rs.data;
						this.toaster.error(data.message);
						this.loading = false;
					}
				}
			});
	}

	public refresh() {
		this.getCrawlsByKey();
	}

	public getCrawlsByKey() {
		if(this.key == "") {
			this.title = "No Key!";
			return;
		}
		this.loading = true;
		this.service.getByKey(this.key)
			.subscribe({
				next: (rs) => {
					console.info(rs);
					this.crawls = rs;
					this.loading = false;
				}
			});
	}

	public viewReport(id: string) {
		this.loading = true;
		this.showReport = true;
		this.reportId = id;
		setTimeout(() => this.loadReport(), 1000);
	}
	public loadReport() {
		this.reporter?.loadReport(this.key, this.reportId!);
		this.loading = false;
	}

	public executeCrawl(id: string) {
		this.loading = true;
		this.service.executeCrawl(this.key, id)
			.subscribe({
				next: (rs) => {
					this.loading = false;
					console.info(rs);
					this.refresh();
					this.viewReport(id);
				}
			});
		
	}

}
