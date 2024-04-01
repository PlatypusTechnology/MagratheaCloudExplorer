import { IObjectKeys } from "@app/_general";

export interface iKey extends IObjectKeys {
	id: string;
	val: string;
	active: boolean;
	folder: string;
	created_at: string;
	updated_at: string;
}
