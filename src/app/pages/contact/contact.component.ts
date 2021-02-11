import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  private domain : string = "https:api.github.com"
  private users : Array<object> = [
    { username: "Jesus-RA", linkedin: "jesúsra"},
    { username: "fvalverdeu", linkedin: ""},
    { username: "IvanZM123", linkedin: ""},
    { username: "juanJserrano", linkedin: ""},
    { username: "jmvalderrama", linkedin: ""}
  ]
  github_users = []
  loading : boolean = true
  error : boolean
  error_message : string

  constructor(private http : HttpClient ) { 
    this.loading = true
    this.getGithubUsers()
  }

  ngOnInit(): void {
  }

  getGithubUsers(){

    this.users.forEach( (user : any) => {
      
      this.getGithubUser(user.username)
        .subscribe({
          next: (data:any) => {
            
            this.loading = false            

            data.linkedin = user.linkedin
            this.github_users.push(data)

          },
          error: error => {
            console.error(error)
            this.error = true
            this.error_message = error.message
            this.loading = false
          }
        })
    });

  }

  getGithubUser(user : string){

    return this.http.get(`${this.domain}/users/${user}`)

  }

}
