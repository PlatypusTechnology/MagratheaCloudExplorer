import { Component, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { SharedModule } from '@app/shared/shared.module';
import { FormService } from '@app/services/form/form.service';
import { NavigationService } from '@app/services/navigation/navigation.service';
import { Toaster } from '@app/services/toaster/toaster.service';
import { KeysApi } from '../keys.api';
import { KeysService } from '../keys.service';
import { iKey } from '../key.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-key-form',
  standalone: true,
  imports: [ SharedModule ],
	providers: [ KeysApi, KeysService, ],
  templateUrl: './key-form.component.html',
  styleUrl: './key-form.component.scss'
})
export class KeyFormComponent implements OnInit {

	public loading: boolean = false;
	public key?: iKey;

	public form?: FormGroup;
	
	constructor(
		public fs: FormService,
		private transloco: TranslocoService,
		private toaster: Toaster,
		private nav: NavigationService,
		private service: KeysService,
	) {
	}

	ngOnInit(): void {
		this.buildForm();
	}

	private buildForm() {
		this.form = this.fs.Build( 
			["media_folder"], ["media_folder"]
		);
	}

	public save() {
		let valid = this.fs.validate(this.form!);
		if(!valid.valid) {
			this.toaster.error(this.transloco.translate('validation-error'));
			return;
		}
		this.loading = true;
		let data = valid.data;
		this.service.Create(data.media_folder)
			.then(rs => {
				this.loading = false;
				if (rs) {
					let successMsg: string = this.transloco.translate('save-success', { object: "Key" });
					this.toaster.success(successMsg);
					this.nav.keyHome();
				} else {
					let errorMsg: string = this.transloco.translate('save-error', { object: "Key" });
					this.toaster.error(errorMsg);
				}
			})
			.catch(err => this.toaster.error(err.message));
	}

	public goBack() {
		this.nav.keyHome();
	}

}
