import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { DetailArticleService } from '../services/detail-article.service';
import { FormsModule } from '@angular/forms'; 
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
articleId: any;// Assurez-vous d'avoir quelque chose comme ceci dans votre composant
 // Le type doit correspondre à la structure de vos articles
  articles: any;
  selectedArticle: any = { title: '', body: '' };
  searchArticles: any;

getArticleDetails() {

}

// updateArticle(){}
  posts: any;
  details: any;
  blog: any;
  articleDetails: any;
  searchTerm :string ='';
  article: any[] = [];
  // searchTerm: string = '';
  // articles: any;
  // articleId :number;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private detailArticleService: DetailArticleService
  ) {}

  ngOnInit(): void {
        // Récupérer les articles
        this.articleService.getPost().subscribe(posts => {
          this.posts = posts;
        });

    /**deatils article */
    const articleId = 5; // Remplacez par l'ID réel de l'article que vous souhaitez récupérer
    this.detailArticleService.getArticleDetails(articleId).subscribe(details => {
      this.articleDetails = details;
       // mise à jour la variable selectedArticle 
      this.selectedArticle = this.articles.find((article: { id: number; }) => article.id === articleId);
    });


    // Récupérez le terme de recherche depuis les paramètres de requête
    // this.route.queryParams.subscribe(params => {
    //   this.searchTerm = params['q'];
    //   // Si le terme de recherche est défini, effectuez la recherche
    //   if (this.searchTerm) {
    //     this.searchArticles();
    //   } else {
    //     // Sinon, chargez tous les articles
    //     this.loadArticles();
    //   }
    // });
  }

  // searchArticles(): void {
  //   // Effectuez la recherche d'articles (implémentation de la fonction selon votre service)
  //   this.articleService.searchArticles(this.searchTerm).subscribe(article => {
  //     this.articles = article;
  //   });
  // }
  // loadArticles() {
  //   throw new Error('Method not implemented.');
  // }

  


     
  }
  

