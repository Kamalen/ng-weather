import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CacheData } from '../types/cache-data.type';

@Injectable({
    providedIn: 'root'
})
export class CacheService {
    constructor() {
    }

    /**
     * Get a cached value of an observable.
     * Cache time default to 2h but can be configured
     * @param id
     * @param observable
     * @param cacheTime
     */
    getCached<T>(id: string, observable: Observable<T>, cacheTime: number = 2*60*60*1000): Observable<T> {
        const storedValue = localStorage.getItem(id)
        if(storedValue) {
            const storedData: CacheData<T> = JSON.parse(storedValue)
            const now = Date.now()
            if (now - storedData.storageTimestamp < cacheTime) {
                return of(storedData.data)
            }
        }

        return this.loadAndCache(id, observable)
    }

    private loadAndCache<T>(id: string, observable: Observable<T>): Observable<T> {
        return observable.pipe(
            tap(data => {
               localStorage.setItem(id, JSON.stringify({
                   storageTimestamp: Date.now(),
                   data: data
               }))
            })
        )
    }
}
