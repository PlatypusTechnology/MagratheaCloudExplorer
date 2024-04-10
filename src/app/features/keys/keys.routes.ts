import { Routes } from "@angular/router";
import { KeysListComponent } from "./keys-list/keys-list.component";
import { KeyFormComponent } from "./key-form/key-form.component";
import { KeyViewComponent } from "./key-view/key-view.component";

export const routes: Routes = [
	{
		path: '',
		component: KeysListComponent,
	},
	{
		path: 'view',
		component: KeyViewComponent,
	},
	{
		path: 'edit/:id',
		component: KeyFormComponent,
	},
	{
		path: 'new',
		component: KeyFormComponent,
	},
];

