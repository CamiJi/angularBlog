import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  titre:string= "Nice Titre Dude";
  contenu:string = "LoremIpsum";
  compteurLikePlus = 0;
  compteurLikeMoins = 0;


  constructor() { }

  ngOnInit(): void {
  }

  plusUn(){
    console.log("Plus un");
  }

  moinsUn(){
    console.log("Moins un");
  }

}
