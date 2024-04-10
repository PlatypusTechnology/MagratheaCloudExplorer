import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DetailBoxComponent } from './detail-box/detail-box.component';
import { DriverComponent } from './driver/driver.component';
import { ExploreHomeComponent } from './explore-home/explore-home.component';
import { ItemRowComponent } from './item-row/item-row.component';
import { NavigationRowComponent } from './navigation-row/navigation-row.component';
import { routes } from './explore.routes';
import { ActionRowComponent } from './action-row/action-row.component';
import { FolderCreatorComponent } from './folder-creator/folder-creator.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';

export const components = [
	DetailBoxComponent,
	DriverComponent,
	ExploreHomeComponent,
	ItemRowComponent,
	NavigationRowComponent,
	ActionRowComponent,
	FolderCreatorComponent,
	FileUploaderComponent,
];

@NgModule({
  declarations: [],
  imports: [
		...components,
		RouterModule.forChild(routes),
  ]
})
export class ExploreModule { }
