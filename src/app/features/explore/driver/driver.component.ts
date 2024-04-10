import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { ExploreService } from '../explore.service';
import { ExploreApi } from '../explore.api';
import { ItemRowComponent } from '../item-row/item-row.component';
import { TranslocoService } from '@ngneat/transloco';
import { iExplorerItem } from '../item.interface';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { NavigationRowComponent } from '../navigation-row/navigation-row.component';
import { ActionRowComponent } from '../action-row/action-row.component';
import { AppState } from '@app/app.state';


@Component({
  selector: 'app-driver',
  standalone: true,
  imports: [
		SharedModule,
		ItemRowComponent,
		NavigationRowComponent,
		ActionRowComponent,
	],
	providers: [
		ExploreService,
		ExploreApi,
	],
  templateUrl: './driver.component.html',
  styleUrl: './driver.component.scss'
})
export class DriverComponent implements OnInit {

	@Input() folderId?: number
	public loading: boolean = false;
	public titleTranslation: string = "";
	public title: string = "...";
	public data: any[] = [];
	@ViewChild("navigation") navigation!: NavigationRowComponent;

	constructor(
		private state: AppState,
		private transloco: TranslocoService,
		private service: ExploreService,
	) { }

	ngOnInit(): void {
		this.titleTranslation = this.transloco.translate("explorer.driver-title");
		this.refresh();
		this.state.subscribe("refresh", () => this.refresh());
	}

	public refresh() {
		this.loading = true;
		console.info("refreshing " + this.folderId);
		this.service.explore(this.folderId)
			.then(rs => {
				this.state.emit("explore.folder",  { id: this.folderId, name: rs.location });
				this.loading = false;
				this.title = this.titleTranslation + rs.location;
				this.data = rs.content;
			});
	}

	public itemClick(item: iExplorerItem) {
		if(item.type == "folder") {
			this.folderClick(item.id, item.name);
		} else {
			this.state.emit("explore.click", item);
		}
	}

	public folderClick(folderId: number, folderName: string) {
		this.data = [];
		this.folderId = folderId;
		this.navigation.addFolder(folderId, folderName);
		this.refresh();
	}

	public navigateBackToFolder(folderId: number) {
		this.folderId = folderId;
		this.refresh();
	}

}
