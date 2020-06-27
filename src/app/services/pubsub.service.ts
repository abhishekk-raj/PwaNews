import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PubsubService {

    private newsCategory: BehaviorSubject<string> = new BehaviorSubject<string>('');

    public getNewsCategory(): Observable<string> {
        return this.newsCategory.asObservable();
    }

    public updateNewsCategory(category: string): void {
        this.newsCategory.next(category);
    }
}