import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


/**importation du service 'UserService'  */


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  /** declaration de la variable 'users' qui sera utilisée pour stocker les données des utilisateurs récupérées du service.  */
users: any;




constructor(private userData : UserService , ){}
ngOnInit(): void {

  /**getUsers du service UserService est appelé pour obtenir les utilisateurs.  */
  /**La méthode subscribe est utilisée pour écouter les données retournées par le service. Une fois les données obtenues, elles sont assignées à la variable users du composant. */
  this.userData.getUsers().subscribe(users =>{
    this.users = users;
  });

 

}

}
