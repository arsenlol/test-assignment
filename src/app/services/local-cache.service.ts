import { Injectable } from '@angular/core'

export enum StorageKeys {
  Cart = 'cart'
}

@Injectable()
export class LocalCacheService {
    storage: Storage = sessionStorage
    getItem(key: string) {
        return JSON.parse(this.storage.getItem(key))
    }

    removeItem(key: string) {
        return this.storage.removeItem(key)
    }

    setItem(key: string, value: any) {
        return this.storage.setItem(key, JSON.stringify(value))
    }

    clear() {
        return this.storage.clear()
    }
}
