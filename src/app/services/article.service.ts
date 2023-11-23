import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
 
  articles: any;
  apiUrl: any ='https://jsonplaceholder.typicode.com/posts';
  constructor( private http : HttpClient) { }
  

  getPost(): Observable<any>{
    return this.http.get<any>("https://jsonplaceholder.typicode.com/posts");
  }

  getPostById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  /**methode qui nous permet de modifiery */
  editerArticle(id: number, updatedData: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.patch(url, updatedData);
  }

  // searchArticles(searchTerm: string): Observable<[]> {
  //   // Implémentez la logique pour rechercher des articles avec le terme de recherche
  //   // Retournez un Observable contenant les articles trouvés
  // }  

}
