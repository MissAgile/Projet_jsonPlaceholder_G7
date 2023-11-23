// detail-article.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailArticleService {
  private apiUrl = 'https://jsonplaceholder.typicode.com'; // URL de base de JSONPlaceholder

  constructor(private http: HttpClient) {}

  getArticleDetails(articleId: number): Observable<any> {
    const url = `${this.apiUrl}/posts/${articleId}`;
    return this.http.get<any>(url);
  }
}
