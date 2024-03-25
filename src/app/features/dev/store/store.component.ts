import { Component, OnInit } from '@angular/core';
import { Store } from '@app/services/store/store.service';
import { SharedModule } from '@app/shared/shared.module';
import { stringify } from 'querystring';

@Component({
  selector: 'app-dev-store',
  standalone: true,
  imports: [ SharedModule ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent implements OnInit {

	public loadingToken: boolean = false;
	public loadingUser: boolean = false;
	public loading: boolean = false;
	public token: string = "...";
	public user: any = "...";

	constructor(
		private Store: Store,
	) {
	}

	ngOnInit(): void {
		this.loading = true;
		Promise.all([
			this.loadToken(),
			this.loadUser(),	
		]).then(() => this.loading = false);
	}

	private loadToken() {
		this.loadingToken = true;
		return this.Store.getToken()
			.then((t) => {
				this.token = t;
				this.loadingToken = false;
			});
	}

	private loadUser() {
		this.loadingUser = true;
		return this.Store.loadUserFromStorage()
			.then((u) => {
				console.info("got user ", u);
				this.user = u;
				this.loadingUser = false;
			});
	}

}
