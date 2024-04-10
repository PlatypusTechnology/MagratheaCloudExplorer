import { IObjectKeys } from "@app/_general";

export interface iExplorerItem extends IObjectKeys {
	id: number;
	type: string;
	name: string;
	size?: number;
	created: string;
}
