import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KeysListComponent } from './keys-list/keys-list.component';
import { KeyFormComponent } from './key-form/key-form.component';
import { routes } from './keys.routes';

export const components = [
	KeysListComponent,
	KeyFormComponent,
];

@NgModule({
  declarations: [],
  imports: [
		...components,
    RouterModule.forChild(routes),
  ]
})
export class KeysModule { }
