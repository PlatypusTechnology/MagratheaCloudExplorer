import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AppState } from '@app/app.state';
import { SharedModule } from '@app/shared/shared.module';

@Component({
  selector: 'app-action-row',
  standalone: true,
  imports: [ SharedModule ],
  templateUrl: './action-row.component.html',
  styleUrl: './action-row.component.scss'
})
export class ActionRowComponent {

	@Input() folder?: number;

	constructor(
		private state: AppState, 
	) { }

	public newFolder() {
		this.state.emit("click.newfolder", this.folder);
	}
	public uploadFile() {
		console.info("emitting upload click");
		this.state.emit("click.uploadfile", this.folder);
	}

}
