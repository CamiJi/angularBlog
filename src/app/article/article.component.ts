import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  titre:string= "Nice Titre Dude";
  contenu:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit illo earum et non, quisquam officiis omnis temporibus voluptatem rerum voluptate nesciunt repellat iusto dolor animi dolores! Accusantium, veritatis dicta Saepe rem quam, odit rerum nisi, ab minima ullam et, nesciunt libero magnam. Rerum sequi vel facere minima possimus? Laboriosam deserunt nam facere necessitatibus saepe quas dignissimos quis vitae commodi.";
  compteurLikePlus = 0;
  compteurLikeMoins = 0;


  constructor() { }

  ngOnInit(): void {
  }

  plusUn(){
    console.log("Plus un");
    this.compteurLikePlus++;
  }

  moinsUn(){
    console.log("Moins un");
    this.compteurLikeMoins++;
  }

}
