import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { TranslocoService } from '@ngneat/transloco';
import { KeysService } from '../keys.service';
import { KeysApi } from '../keys.api';
import { CrawlsService } from '../crawls.service';
import { AppWindowComponent } from '@app/shared/components/app-window/app-window.component';
import { Toaster } from '@app/services/toaster/toaster.service';

@Component({
  selector: 'app-crawl-report',
  standalone: true,
  imports: [ SharedModule ],
	providers: [ KeysApi, KeysService, CrawlsService ],
  templateUrl: './crawl-report.component.html',
  styleUrl: './crawl-report.component.scss'
})
export class CrawlReportComponent implements OnInit {
	
	@Input() crawlId?: string;
	@Input() key?: string;
	public loading: boolean = false;
	public executed?: string;
	public report: string = "";

	@ViewChild("reportwindow") window!: AppWindowComponent;

	constructor(
		private transloco: TranslocoService,
		private toaster: Toaster,
		private service: CrawlsService,
	){ 
	}

	ngOnInit(): void {
		this.getReport();
	}

	public getReport() {
		if(this.key == null) return;
		if(this.crawlId == null) return;
		this.loadReport(this.key!, this.crawlId!);
	}

	public loadReport(k: string, c: string) {
		this.loading = true;
		console.info(`key ${k} and crawl ${c}`);
		this.service.getReport(k!, c!)
			.subscribe({
				next: (rs) => {
					if(rs.success) {
						let data = rs.data;
						this.executed = data.executed_at;
						this.report = data.report;
						if(this.window) this.window.open();
					} else {
						this.toaster.error(`error loading report for crawl [${this.crawlId}]`);
					}
					this.loading = false;
				}
			});
	}
}
