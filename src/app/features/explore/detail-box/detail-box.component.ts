import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { AppState } from '@app/app.state';
import { AppWindowComponent } from '@app/shared/components/app-window/app-window.component';
import { SharedModule } from '@app/shared/shared.module';
import { iExplorerItem } from '../item.interface';
import { Store } from '@app/services/store/store.service';
import { ExploreService } from '../explore.service';
import { ExploreApi } from '../explore.api';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-detail-box',
  standalone: true,
  imports: [ SharedModule ],
	providers: [
		ExploreApi,
		ExploreService,
	],
  templateUrl: './detail-box.component.html',
  styleUrl: './detail-box.component.scss'
})
export class DetailBoxComponent implements OnInit {

	@Input() item?: iExplorerItem;
	public loading: boolean = false;
	public data: any;
	public imageUrl: string|null = null;
	@ViewChild("window") window?: AppWindowComponent;

	constructor(
		private state: AppState,
		private translate: TranslocoService,
		private service: ExploreService,
	) {
	}

	ngOnInit(): void {
		this.state.subscribe("explore.click",  (item: any) => {
			if(!item || item.type == "folder") return;
			this.imageUrl = null;
			this.item = item;
			this.show();
			this.getInfo();
		});
	}

	public getInfo() {
		this.loading = true;
		this.service.viewFile(this.item!.id)
			.then(rs => {
				this.loading = false;
				this.data = rs;
				this.getImageUrl();
			});
	}

	public getImageUrl() {
		if(this.data.type != "image") {
			this.imageUrl = null;
			return;
		}
		this.service.getImageLink(this.data!.id)
			.then((url: string) => {
				this.imageUrl = url;
			});
	}

	public getSize() {
		return this.service.formatBytes(this.data?.size ?? 0);
	}
	public getIcon() {
		return this.service.getIcon(this.item?.type);
	}

	public show = () => this.window?.open();

	public download() {
		this.service.downloadFile(this.data.id, this.data.mime);
	}

}
