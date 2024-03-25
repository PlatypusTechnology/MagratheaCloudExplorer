import { Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';
import { MainComponent } from './shared/layout/main.component';
import { IsAdmin, IsLogged, IsManager } from './services/auth/auth-guard.service';

const devRoute = {
	path: 'dev',
	loadChildren: () => import("./features/dev/dev.module").then(m => m.DevModule),
	data: { breadcrumb: "dev" },
};
const loginRoute =	{
	path: 'login',
	loadChildren: () => import("./features/login/login.module").then(m => m.LoginModule),
};


export const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	loginRoute,
	{
		path: 'single',
		children: [
			devRoute,
		],
	},
	{
		path: 'app',
		component: MainComponent,
		children: [
			{
				path: '',
				redirectTo: 'home',
				pathMatch: 'full'
			},
			{
				path: 'home',
				loadChildren: () => import("./features/home/home.module").then(m => m.HomeModule),
			},
			{
				path: 'my-account',
				canActivate: [IsLogged],
				loadChildren: () => import("./features/my-account/my-account.module").then(m => m.MyAccountModule),
				data: { breadcrumb: "my account" },
			},
			{
				path: 'users',
				canActivate: [IsAdmin],
				loadChildren: () => import("./features/users/users.module").then(m => m.UsersModule),
				data: { breadcrumb: "users" }
			},
			devRoute,
		],
	},
	{ path: '**', component: ErrorComponent }
];
