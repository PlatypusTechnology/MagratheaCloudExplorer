import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from '@app/app.state';
import { iKey } from '@app/features/keys/key.interface';
import { AuthService } from '@app/services/auth/authentication.service';
import { NavigationService } from '@app/services/navigation/navigation.service';
import { Toaster } from '@app/services/toaster/toaster.service';
import { SharedModule } from '@app/shared/shared.module';
import { iStoreUser } from '@services/store/store.interface';
import { Store } from '@services/store/store.service';

@Component({
	selector: 'app-navbar',
	standalone: true,
	encapsulation: ViewEncapsulation.None,
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
	imports: [ SharedModule ],
})

export class NavbarComponent implements OnInit {
	public isMenuCollapsed: boolean = false;
	public navTitle: string = "...";
	public user: iStoreUser|null = null;
	public keyVal: string = "-";
	public keyFolder: string = "";

	constructor(
		private _state: AppState,
		private Store: Store,
		private toaster: Toaster,
		private auth: AuthService,
		private nav: NavigationService,
	) {
	}

	ngOnInit(): void {
		this.loadUser();
		this.loadKey();
		this.watchKey();
	}

	public watchKey() {
		this._state.subscribe("key.change", (key: iKey) => {
			this.keyVal = key.val;
			this.keyFolder = key.folder;
			this.navTitle = key.folder;
		});
	}

	public toggleMenu() {
		console.info("toggling menu");
		this._state.toggle('menu.isCollapsed');
	}

	public async loadUser() {
		this.user = await this.Store.getLoggedUser();
		let tag = this.user?.name ?? this.user?.email;
	}

	public async loadKey() {
		this.keyVal = await this.Store.get("key-val");
		this.keyFolder = await this.Store.get("key-folder");
		this.navTitle = this.keyFolder;
	}

	public copyKey() {
		let val = this.keyVal;
		const selBox = document.createElement('textarea');
		selBox.style.position = 'fixed';
		selBox.style.left = '0';
		selBox.style.top = '0';
		selBox.style.opacity = '0';
		selBox.value = val;
		document.body.appendChild(selBox);
		selBox.focus();
		selBox.select();
		document.execCommand('copy');
		document.body.removeChild(selBox);
		this.toaster.success(`key [${val}] copied to clipboard`);
	}

	public navMyData() {
		this.nav.myAccount();
	}

	public navDev() {
		this.nav.goDev();
	}

	public navKeys() {
		this.nav.keyHome();
	}

	public logout() {
		this.auth.logout();
	}

}
