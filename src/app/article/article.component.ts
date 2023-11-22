import { Component } from '@angular/core';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {

    /** declaration de la variable 'users' qui sera utilisée pour stocker les données des utilisateurs récupérées du service.  */
posts: any;
/** constructeur qui prend en paramètre un service UserService qui sera injecté automatiquement par Angular grâce à l'injection de dépendance.  */
constructor(private articleService : ArticleService){}
//userData est une  instance (objet) de la classe UserService
ngOnInit(): void {

  
  
  /**getUsers du service UserService est appelé pour obtenir les utilisateurs.  */
  /**La méthode subscribe est utilisée pour écouter les données retournées par le service. Une fois les données obtenues, elles sont assignées à la variable users du composant. */
  this.articleService.getPosts().subscribe(posts =>{
    this.posts = posts; 
  })
}
}
