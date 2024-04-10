import { Routes } from "@angular/router";
import { ExploreHomeComponent } from "./explore-home/explore-home.component";

export const routes: Routes = [
	{
		path: '',
		component: ExploreHomeComponent,
	},
	{
		path: 'folder/:id',
		component: ExploreHomeComponent,
	},
];

