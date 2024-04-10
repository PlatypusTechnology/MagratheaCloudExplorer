import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AppState } from '@app/app.state';
import { KeysApi } from './keys.api';
import { iKey } from './key.interface';
import { Store } from '@app/services/store/store.service';

@Injectable({
  providedIn: 'root'
})
export class KeysService {

  constructor(
		private _state: AppState,
		private store: Store,
		private api: KeysApi,
	) { }

	public getObjFromData(k: any): iKey {
		let key: iKey = {
			id: k['id'],
			val: k['val'],
			active: k['active'],
			folder: k['media_folder'],
			created_at: k['created_at'],
			updated_at: k['updated_at'],
		};
		return key;
	}

	public GetKeys(): Observable<iKey[]> {
		return this.api.getKeys()
			.pipe(
				map((rs: any[]) => {
					return rs.map(k => this.getObjFromData(k));
				})
			);
	}

	public GetKeyById(id: string): Observable<iKey> {
		return this.api.getById(id)
			.pipe(map(rs => this.getObjFromData(rs)));
	}
	public GetKeyByVal(val: string): Observable<iKey> {
		return this.api.getByVal(val)
			.pipe(map(rs => this.getObjFromData(rs)));
	}

	public Create(folder: string): Promise<boolean> {
		return new Promise((resolve, reject) => {
			this.api.insert({ "media_folder": folder })
				.subscribe(rs => {
					if(rs.success) resolve(true);
					else reject(rs);
				});
		});
	}

	public Save(key: iKey): Promise<boolean> {
		return new Promise((resolve, reject) => {
			if (key.id != null) {
				this.api.update(key)
					.subscribe(rs => resolve(rs.success));
			} else {
				this.api.insert(key)
					.subscribe(rs => {
						if(rs.success) resolve(true);
						else reject(rs);
					});
			}
		});
	}

	public selectKey(key: iKey) {
		this.store.set("key-val", key.val);
		this.store.set("key-folder", key.folder);
		this._state.emit("key.change", key);
	}

}
