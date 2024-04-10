import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iExplorerItem } from '../item.interface';
import { CommonModule } from '@angular/common';
import { ExploreService } from '../explore.service';

@Component({
	selector: 'app-item-row',
	standalone: true,
	imports: [ CommonModule ],
	providers: [ ExploreService ],
	templateUrl: './item-row.component.html',
	styleUrl: './item-row.component.scss'
})
export class ItemRowComponent {

	@Input() item?: iExplorerItem
	@Output() rowClick: EventEmitter<iExplorerItem> = new EventEmitter<iExplorerItem>();

	constructor(
		private service: ExploreService,
	) { }

	public isFolder(): boolean {
		return (this.item?.type == "folder");
	}

	public getIcon() {
		return this.service.getIcon(this.item?.type);
	}
	public getSize(): string {
		let size = this.item?.size;
		if(!size) return "-";
		return this.formatBytes(size);
	}

	public formatBytes(bytes: number) {
		return this.service.formatBytes(bytes);
	}

	public rowAction() {
		this.rowClick.emit(this.item!);
	}

	public download() {

	}
	public moreInfo() {

	}

}
