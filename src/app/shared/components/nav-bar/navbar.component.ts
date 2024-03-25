import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppState } from '@app/app.state';
import { AuthService } from '@app/services/auth/authentication.service';
import { NavigationService } from '@app/services/navigation/navigation.service';
import { SharedModule } from '@app/shared/shared.module';
import { TranslocoService } from '@ngneat/transloco';
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
	public userTag: string = "...";
	public user: iStoreUser|null = null;

	constructor(
		private _state: AppState,
		private Store: Store,
		private auth: AuthService,
		private translation: TranslocoService,
		private nav: NavigationService,
	) {
	}

	ngOnInit(): void {
		this.loadUser();
		this.initMenuToggle();
	}

	public initMenuToggle() {
		this._state.subscribe("menu.isCollapsed",
			(isCollapsed: boolean) => {
				this.isMenuCollapsed = isCollapsed;
			}
		);
	}

	public toggleMenu() {
		console.info("toggling menu");
		this._state.toggle('menu.isCollapsed');
	}

	public async loadUser() {
		this.user = await this.Store.getLoggedUser();
		let tag = this.user?.name ?? this.user?.email;
		this.userTag = tag ?? "...";
	}

	public navMyData() {
		this.nav.myAccount();
	}

	public logout() {
		this.auth.logout();
	}

}
