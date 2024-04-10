import { Component, OnInit } from '@angular/core';
import { NavigationService } from '@app/services/navigation/navigation.service';
import { SharedModule } from '@app/shared/shared.module';
import { KeysService } from '../keys.service';
import { KeysApi } from '../keys.api';
import { iKey } from '../key.interface';
import { Store } from '@app/services/store/store.service';
import { CrawlListComponent } from '../crawl-list/crawl-list.component';

@Component({
  selector: 'app-key-view',
  standalone: true,
  imports: [ 
		SharedModule,
		CrawlListComponent,
	],
	providers: [ KeysApi, KeysService, ],
  templateUrl: './key-view.component.html',
  styleUrl: './key-view.component.scss'
})
export class KeyViewComponent implements OnInit {

	public loading: boolean = false;
	public key?: iKey;
	public title: string = "...";

	constructor(
		private store: Store,
		private nav: NavigationService,
		private service: KeysService,
	){ }

	ngOnInit(): void {
		this.loadKey();
	}

	public async loadKey() {
		this.loading = true;
		let key = await this.store.get("key-val");
		this.service.GetKeyByVal(key)
			.subscribe({
				next: (rs) => {
					console.info("got ", rs);
					this.key = rs;
					this.updateTitle();
					this.loading = false;
				}
			});
	}

	public updateTitle() {
		this.title = `Key [${this.key?.val}] ==> ${this.key?.folder}`;
	}

}
