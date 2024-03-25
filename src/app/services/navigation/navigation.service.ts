import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigationService {

	private pagesUrl: string = "app";

	constructor(
		private router: Router
	) { }

	public Login(): void {
		this.router.navigate(['login']);
	}

	public goHome(): void {
		this.router.navigate([this.pagesUrl]);
	}

	public myAccount(): void {
		this.router.navigate([this.pagesUrl, "my-account"]);
	}
	public changePassword(): void {
		this.router.navigate([this.pagesUrl, "my-account", "change-password"]);
	}

	public userList(): void {
		this.router.navigate([this.pagesUrl, 'users']);
	}
	public userView(userId: string): void {
		this.router.navigate([this.pagesUrl, 'users', 'view', userId]);
	}
	public userNew(): void {
		this.router.navigate([this.pagesUrl, 'users', 'new']);
	}

	public locationHome(): void {
		this.router.navigate([this.pagesUrl, "locations"]);
	}
	public locationNew(): void {
		this.router.navigate([this.pagesUrl, "locations", "new"]);
	}
	public locationView(id: string): void {
		this.router.navigate([this.pagesUrl, "locations", "view", id]);
	}

	public houseNew(): void {
		this.router.navigate([this.pagesUrl, "houses", "new"]);
	}
	public houseView(id: string): void {
		this.router.navigate([this.pagesUrl, "houses", "view", id]);
	}

	public animalsHome(): void {
		this.router.navigate([this.pagesUrl, "animals"]);
	}
	public animalsList(): void {
		this.router.navigate([this.pagesUrl, "animals", "list"]);
	}
	public animalsForm(id: string): void {
		this.router.navigate([this.pagesUrl, "aniamls", "form", id]);
	}
	public animalsNew(): void {
		this.router.navigate([this.pagesUrl, "animals", "new"]);
	}
	public speciesList(): void {
		this.router.navigate([this.pagesUrl, "animals", "species", "list"]);
	}
	public specieNew(): void {
		this.router.navigate([this.pagesUrl, "animals", "species", "new"]);
	}
	public specieView(id: string): void {
		this.router.navigate([this.pagesUrl, "animals", "species", "view", id]);
	}

	public dietsHome(): void {
		this.router.navigate([this.pagesUrl, "diets"]);
	}
	public dietsList(): void {
		this.router.navigate([this.pagesUrl, "diets", "list"]);
	}
	public dietForm(id: string): void {
		this.router.navigate([this.pagesUrl, "diets", "form", id]);
	}
	public dietNew(): void {
		this.router.navigate([this.pagesUrl, "diets", "new"]);
	}

}
