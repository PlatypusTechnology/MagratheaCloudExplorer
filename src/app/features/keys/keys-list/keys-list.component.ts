import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { TranslocoService } from '@ngneat/transloco';
import { KeysService } from '../keys.service';
import { KeysApi } from '../keys.api';
import { NavigationService } from '@app/services/navigation/navigation.service';
import { iKey } from '../key.interface';

@Component({
  selector: 'app-keys-list',
  standalone: true,
  imports: [ SharedModule ],
	providers: [
		KeysApi,
		KeysService,	
	],
  templateUrl: './keys-list.component.html',
  styleUrl: './keys-list.component.scss'
})
export class KeysListComponent implements OnInit {

	public loading: boolean = false;
	public items: any[] = [];
	public keys: any[] = [];
	public titles: any = {};

	constructor(
		private transloco: TranslocoService,
		private nav: NavigationService,
		private service: KeysService,
	){
	}

	ngOnInit(): void {
		this.setTableData();
		this.getKeys();
	}
	
	setTableData() {
		this.keys = ["folder", "val", "created_at"];
		this.titles = {
			folder: this.transloco.translate("keys.folder"),
			val: this.transloco.translate("keys.val"),
			active: this.transloco.translate("active"),
			created_at: this.transloco.translate("created_at"),
		}
	}

	getKeys(): void {
		this.loading = true;
		this.service.GetKeys().subscribe({
			next: (items) => {
				this.loading = false;
				this.items = items;
			}
		});
	}

	public clickKey(i: iKey): void {
		this.service.selectKey(i);
		this.nav.keyView();
	}

	public addNew(): void {
		this.nav.keyNew();
	}

}
