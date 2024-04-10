import { IObjectKeys } from "@app/_general";

export interface iCrawl extends IObjectKeys {
	id: string;
	apikey: string;
	status: string;
	result: string;
	executed_at: string;
	created_at: string;
	updated_at: string;
}
